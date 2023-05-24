import {create} from 'zustand'

interface SelectedLevelStore {
    selectedLevel:number;
    onChange:(index:number)=>void ;
    onUp:()=>void;
    onDown:()=>void;
}

const useSelectedLevel=create<SelectedLevelStore>((set)=>({
    selectedLevel : 0,
    onChange:(index)=>set({selectedLevel:index}),
    onUp:()=>set((state)=>({selectedLevel:state.selectedLevel!-1})),
    onDown:()=>set((state)=>({selectedLevel:state.selectedLevel!+1}))
}))

export default useSelectedLevel;