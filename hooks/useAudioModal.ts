import {create} from 'zustand'


interface AudioModalHookStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const AudioModalHook = create<AudioModalHookStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default AudioModalHook;