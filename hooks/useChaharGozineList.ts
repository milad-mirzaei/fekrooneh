import create from 'zustand'
import _ from 'lodash'

export type Gozine={
    id:string;
    text?:string;
    image?:FormData;
    color:string;
    isSelected:boolean;
}

interface ChaharGozineListStore{
    gozineList:Gozine[];
    onAdd:(item:Gozine)=>void;
    onDelete:(item:Gozine)=>void;
    onChangeGozine:(item:Gozine[])=>void;
}

const useChaharGozineList = create<ChaharGozineListStore>((set)=>({
    gozineList:[
        {
            id:'',
            text:'',
            color:'bg-[#ffb72a]',
            isSelected:true,
            
        },
        {
            id:'',
            text:'',
            color:'bg-[#7900FF]',
            isSelected:false,
            
        },
        {
            id:'',
            text:'',
            color:'bg-[#B2FFD6]',
            isSelected:false,
            
        },
        {
            id:'',
            text:'',
            color:'bg-[#FF836F]',
            isSelected:false,
            
        },
    ],
   onAdd:(item)=>{
        set((state)=>({
            gozineList:[...state.gozineList,item]
        }))
    },
    onDelete:(item)=>{
        set((state)=>({
            gozineList:state.gozineList.filter((level)=>!(_.isEqual(level,item)))
        }))
    },
    onChangeGozine:(items)=>{
        set(()=>({gozineList:items}));
    }
}))

export default useChaharGozineList;