import {create} from 'zustand'
import { Level } from './useLevels';


interface PreviewModalStore{
    isOpen:boolean;
    currentLevel:Level|null;
    onOpen:(currentLevel:Level)=>void;
    onClose:()=>void;
}

const usePreviewModal = create<PreviewModalStore>((set)=>({
    isOpen:false,
    currentLevel:null,
    onOpen:(currentLevel)=>set({isOpen:true,currentLevel:currentLevel}),
    onClose:()=>set({isOpen:false})
}))

export default usePreviewModal;