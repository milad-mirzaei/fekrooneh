import {create} from 'zustand'

interface GameModlesStore{
    models:string[],
}

const useGameModels=create<GameModlesStore>((set)=>({
    models: [
        'چهار گزینه ای',
    'چند گزینه ای',
    'درست و غلط',
    'توالی و ترتیب',
    'دیالوگ باکس',
    'کشیدن و رها کردن',
    'جای خالی',
    'جفت سازی',
    'ویدئو و سوال',
    'پول',
    'تشریحی',
    'پازل متنی',
    'نقاشی',
      ]
}))

export default useGameModels;