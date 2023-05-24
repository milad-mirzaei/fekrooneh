import React, { useEffect, useState } from 'react'
import LevelCard from '../LevelCard'
import useLevels from '@/hooks/useLevels';
import useSelectedLevel from '@/hooks/useSelectedLevel';
import { v4 as uuidv4 } from 'uuid';

const LeftSideBar = () => {
    const selectedLevel = useSelectedLevel();
    // const [selectedLevel, setSelectedLevel] = useState(0);
    const levels = useLevels();
    const levelsList = levels.levels;
    // const levels=[
    //     {
    //         name:"چهار گزینه ای",
    //         icon:"images/4gozineLevelIcon.svg",
    //     },
    //     {
    //         name:"درست و نادرست",
    //         icon:"images/dorostnadorost.svg",
    //     },
    //     {
    //         name:"جفتش کن",
    //         icon:"images/jofteshkon.svg",
    //     },
    //     {
    //         name:"جفتش کن",
    //         icon:"images/jofteshkon.svg",
    //     },
    // ] 

  return (
    <div className=' h-full col-span-2 flex flex-col gap-2 items-center justify-start pt-4'>
        <div className='w-[222px] h-[44px] rounded-[100px] flex items-center justify-start gap-10 px-4 bg-[#E6E8FD] border-black border-[1px] cursor-pointer' style={{ boxShadow: "3px 2px black" }} onClick={()=>levels.onAdd({name:'چهار گزینه ای',icon:'images/4gozineLevelIcon.svg',levelNumber:levelsList.length,isSelected:false,zaman:5,emtiaz:5,id:uuidv4(),sakhti:'آسون'})}>
            <div className='w-[17.5px] h-[17.5px] rounded-full bg-[#d9d9d9]'></div>
            <p className='font-bold'>افزودن مرحله</p>
        </div>
        <div className='w-[222px] h-[44px] rounded-[100px] flex items-center justify-start gap-10 px-4 bg-white border-black border-[1px]' style={{ boxShadow: "3px 2px black" }}>
            <div className='w-[17.5px] h-[17.5px] rounded-full bg-[#d9d9d9]'></div>
            <p className='font-bold'>افزودن اسلاید</p>
        </div>
        <div className='levelsScroll  flex flex-col pt-2 items-center gap-2  w-[257px] mr-2 h-[557px] overflow-y-scroll'>
            {levelsList.map((item,index)=>(
                <div onClick={()=>{selectedLevel.onChange(index);}} className='h-[225px]' key={index} >
                    <LevelCard
                name={item.name}
                icon={item.icon}
                levelNumber={index}
                isSelected={selectedLevel.selectedLevel == index}
                zaman={item.zaman}
                emtiaz={item.emtiaz}
                sakhti={item.sakhti}
                id={item.id}
                />
                </div>
            ))}
        </div>
    </div>
  )
}

export default LeftSideBar