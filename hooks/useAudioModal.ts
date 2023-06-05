import {create} from 'zustand'


interface AudioModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const AudioModalHook = create<AudioModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default AudioModalHook;