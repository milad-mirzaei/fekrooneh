import {create} from 'zustand'


interface AddLevelModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useAddLevelModal = create<AddLevelModalStore>((set)=>({
    isOpen:true,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useAddLevelModal;