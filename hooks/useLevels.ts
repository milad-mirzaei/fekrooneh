import {create} from 'zustand'
import _ from 'lodash'


export type Level = {
    id:string;
    name:string;
    icon:string;
    levelNumber:number;
    isSelected:boolean;
    rahnamaColor?:string;
    rahnamaIcon?:string;
    zaman:number;
    emtiaz:number;
    sakhti:string;
}

interface LevelsStore{
    levels:Level[];
    onAdd:(item:Level)=>void;
    onDelete:(item:Level)=>void;
    onCopy:(item:Level)=>void;
    onChangeLevelName:(item:Level,name:string)=>void;
    onChangeLevelZaman:(item:Level,zaman:number)=>void;
    onChangeLevelEmtiaz:(item:Level,emtiaz:number)=>void;
    onChangeLevelSakhti:(item:Level,sakhti:string)=>void;
}

const useLevels = create<LevelsStore>((set)=>({
    levels:[
        {
            id:'',
            name:'چهار گزینه ای',
            icon:'images/4gozineLevelIcon.svg',
            levelNumber:0,
            isSelected:true,
            zaman:30,
            emtiaz:5,
            sakhti:'آسون'
        }       
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
    onCopy:(item)=>set({}),
    onChangeLevelName:(item,name)=>{
        const newItem = item;
        newItem.name=name;
        set((state)=>({levels:state.levels.splice(state.levels.findIndex(lev=>lev.id == item.id),1,newItem)}));
    },
    onChangeLevelZaman:(item,zaman)=>{
        const newItem = item;
        newItem.zaman=zaman;
        set((state)=>({levels:state.levels.splice(state.levels.findIndex(lev=>lev.id == item.id),1,newItem)}));
    },
    onChangeLevelEmtiaz:(item,emtiaz)=>{
        const newItem = item;
        newItem.emtiaz=emtiaz;
        set((state)=>({levels:state.levels.splice(state.levels.findIndex(lev=>lev.id == item.id),1,newItem)}));
    },
    onChangeLevelSakhti:(item,sakhti)=>{
        const newItem = item;
        newItem.sakhti=sakhti;
        set((state)=>({levels:state.levels.splice(state.levels.findIndex(lev=>lev.id == item.id),1,newItem)}));
    },
}))

export default useLevels;