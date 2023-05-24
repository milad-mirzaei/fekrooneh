import {create} from 'zustand'

interface GameModlesStore{
    models:string[],
}

const useGameModels=create<GameModlesStore>((set)=>({
    models: [
        'چهار گزینه ای',
        'درست و نادرست',
        'جفتش کن',
      ]
}))

export default useGameModels;