import {create} from 'zustand'
import _ from 'lodash'

import { v4 as uuidv4 } from 'uuid';
import { defaultItems, extraAnswers } from '../constants/defaultFourChoiceItems';
import { fourXtwo } from '../constants/defaultPairingItems';

export type Gozine={
    id:string;
    text?:string;
    image?:any;
    mask?:string;
    color:string;
    isSelected:boolean;
}

export type fourChoice = {
        question?:string;
        image:any;
        music:any;
        video:any;
        answers:Gozine[];
        isMultipleChoice:boolean;
}



export type trueFalse = {
    question?:string;
    image:any;
    music:any;
    video:any;
    answer:'درست'|'غلط';
}

export type sequenceAndOrder={
    question?:string;
    image:any;
    music:any;
    video:any;
    answers:Gozine[];
    trueSequence:string[];
    isLtr:boolean;
}

export type PairingInnerItem=
{
    id:string;
    text?:string;
    image?:any;
    color:string;
}

export type PairingItem={
    color:string;
    innerItems:PairingInnerItem[]
}

export type pairing = {
    question?:string;
    image:any;
    music:any;
    video:any;
    arrangeModel:string;
    pairingItems:PairingItem[];
}

export type Level = {
    id:string;
    type:string;
    icon:string;
    isSelected:boolean;
    extraAnswers:any[];
    rahnamaColor?:string;
    rahnamaIcon?:string;
    fourChoice:fourChoice;
    trueFalse:trueFalse;
    sequenceAndOrder:sequenceAndOrder;
    pairing:pairing;
    zaman:number;
    emtiaz:number;
    sakhti:string;
}

interface LevelsStore{
    levels:Level[];
    onAdd:(item:Level)=>void;
    onDelete:(item:Level)=>void;
    onCopy:(item:Level)=>void;
 
    onChangeLevel:(item:Level[])=>void;
}

const gozineMasks = [
    "images/GozineMask.svg",
    "images/GozineMask2.svg",
    "images/GozineMask3.svg",
    "images/GozineMask1.svg",
    "images/GozineMask.svg",
    "images/GozineMask3.svg",
  ];

const LevelsHook = create<LevelsStore>((set)=>({
    levels:[
        {
            id:uuidv4(),
            type:'چهار گزینه ای',
            icon:'images/4gozineLevelIcon.svg',
            isSelected:true,
            extraAnswers:[...extraAnswers],
            fourChoice:{
                answers:[...defaultItems],
                isMultipleChoice:false,
                image:null,
                music:null,
                video:null,
            },
            trueFalse:{
                answer:'درست',
                image:null,
                music:null,
                video:null,
                question:'',
            },
            sequenceAndOrder:{
                answers:[...defaultItems].reverse(),
                image:null,
                music:null,
                video:null,
                trueSequence:[],
                question:'',
                isLtr:false
            },
            pairing:{
                question:'',
                image:null,
                music:null,
                video:null,
                arrangeModel:'4 دسته 2 تایی',
                pairingItems:fourXtwo
            },
            zaman:30,
            emtiaz:5,
            sakhti:'آسون'
        },
    ],
    onAdd:(item)=>{
        set((state)=>({
            levels:[...state.levels,item]
        }))
    },
    onDelete:(item)=>{
        set((state)=>({
            levels:state.levels.filter((level)=>!(_.isEqual(level,item)))
        }))
    },
    onCopy:(item)=>{
        set((state)=>({levels:state.levels.splice(state.levels.findIndex(lev=>lev.id == item.id),0,item)}))
    },

    onChangeLevel:(levelsList)=>{
        set(()=>({levels:levelsList}));
    }
}))

export default LevelsHook;