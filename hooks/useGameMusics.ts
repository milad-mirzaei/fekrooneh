import {create} from 'zustand'


type Music={
    music:string;
    image:string;
    title:string;
    isSelected:boolean;
}


interface MusicsStore{
    musics:Music[];
    onChangeMusic:(item:Music[])=>void;
}


const useGameMusics = create<MusicsStore>((set)=>({
    musics: [
        {
            music:'musics/1.mp3',
            image:'images/music1.jpg',
            title:'موزیک 1',
            isSelected:true
        },
        {
            music:'musics/2.mp3',
            image:'images/music2.jpg',
            title:'موزیک 2',
            isSelected:false
        },
        {
            music:'musics/3.mp3',
            image:'images/music3.jpg',
            title:'موزیک 3',
            isSelected:false
        },
        {
            music:'musics/4.mp3',
            image:'images/music4.jpg',
            title:' موزیک 4',
            isSelected:false
        },
        {
            music:'musics/5.mp3',
            image:'images/music5.jpg',
            title:'موزیک 5',
            isSelected:false
        },
    ],
    onChangeMusic:(musicList)=>{
        set(()=>({musics:musicList}));
    }
}))

export default useGameMusics;
