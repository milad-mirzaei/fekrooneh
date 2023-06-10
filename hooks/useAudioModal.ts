import {create} from 'zustand'


interface AudioModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useAudioModal = create<AudioModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useAudioModal;