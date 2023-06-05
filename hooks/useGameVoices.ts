import {create} from 'zustand'
import _ from 'lodash'


type Voice={
    voice:string;
    title:string;
    
}


interface VoicesStore{
    voices:Voice[];
    onChangeVoice:(item:Voice)=>void;
    onAdd:(item:Voice)=>void;
    onDelete:(item:Voice)=>void;
}


const useGameVoices = create<VoicesStore>((set)=>({
    voices: [
        
    ],
    onChangeVoice:(voice)=>{
        set(()=>({voices:[voice]}));
    },
    onAdd:(voice)=>{
        set((state)=>({
            voices:[...state.voices,voice]
        }))
    },
    onDelete:(item)=>{
        set((state)=>({
            voices:state.voices.filter((voice)=>!(_.isEqual(voice,item)))
        }))
    },
}))

export default useGameVoices;
