import {create} from 'zustand'

// type ImageModalType='levelImage'|'answer1'|'answer2'|'answer3'|'answer4'|'answer5'|'answer6';


interface AddImageModalStore{
    isOpen:boolean;
    type:string;
    itemIndex:number|null;
    innerItemIndex:number|null;
    onOpen:(modalType:string,ii:number|null,iii:number|null)=>void;
    onClose:()=>void;
}

const useAddImageModal = create<AddImageModalStore>((set)=>({
    isOpen:false,
    type:'levelImage',
    itemIndex:null,
    innerItemIndex:null,
    onOpen:(t,ii,iii)=>set({isOpen:true,type:t,itemIndex:ii,innerItemIndex:iii}),
    onClose:()=>set({isOpen:false})
}))

export default useAddImageModal;