import useChaharGozineList, { Gozine } from '@/hooks/useChaharGozineList';
import React from 'react'

interface GozineCardProps{
    index:number;
    gozine:Gozine;
    onSelect:(index:number)=>void;
    
}

const GozineCard:React.FC<GozineCardProps> = ({index,onSelect,gozine}) => {
    const colors=[
        'bg-[#ffb72a]',
        'bg-[#7900FF]',
        'bg-[#B2FFD6]',
        'bg-[#FF836F]',
        'bg-[#ffb72a]',
        'bg-[#ffb72a]',
    ]
    const gozineMasks=[
        'images/GozineMask.svg',
        'images/GozineMask2.svg',
        'images/GozineMask3.svg',
        'images/GozineMask1.svg',
    ]

    const chaharGozine = useChaharGozineList();
    const chaharGozineList = chaharGozine.gozineList;


  return (
    <div className={` relative
     ${chaharGozineList.length==4 &&' w-[180px] h-[234px]' } 
     ${chaharGozineList.length==5 &&' w-[150px] h-[204px]' } 
     ${chaharGozineList.length==6 &&' w-[137px] h-[195px]' } 

     w-[180px] h-[234px] p-[20px] flex items-center justify-center rounded-[13px] ${gozine.color}  border-[3px] border-black `} style={{ boxShadow: "4px 3px black" }}>
        <img className='absolute top-[71px] right-[5px]' src={gozineMasks[index]} alt="mask" />
        <p className="absolute text-white text-[28px] font-['yekanbakhfat'] ">{gozine.text}</p>
        <div className='cursor-pointer absolute top-[25px] left-[25px] w-[35px] h-[35px] rounded-full border-[2px] border-white flex justify-center items-center' style={{ boxShadow: "4px 3px black" }} onClick={()=>onSelect(index)}>
            {gozine.isSelected && <div className='w-[18px] h-[18px] rounded-full bg-[#28DE7C]'></div>}
        </div>
        <div className='absolute bottom-[24px] flex justify-center items-center gap-1'>
            <div className={`
            ${chaharGozineList.length==5 && 'w-[30px] h-[30px]'}
            ${chaharGozineList.length==6 && 'w-[28px] h-[28px]'}
            cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#7900FF] `} style={{ boxShadow: "2px 2px black" }}>
                <img src="images/calculator.svg" alt="" />
            </div>
            <div className={`
            ${chaharGozineList.length==5 && 'w-[30px] h-[30px]'}
            ${chaharGozineList.length==6 && 'w-[28px] h-[28px]'}
            cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#0066FF] `} style={{ boxShadow: "2px 2px black" }}>
            <img src="images/edit.svg" alt="" />
            </div>
            <div className={`
            ${chaharGozineList.length==5 && 'w-[30px] h-[30px]'}
            ${chaharGozineList.length==6 && 'w-[28px] h-[28px]'}
            cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#ffb72a] `} style={{ boxShadow: "2px 2px black" }}>
            <img src="images/image.svg" alt="" />
            </div>
           {chaharGozine.gozineList.length >3 &&  <div className={`
           ${chaharGozineList.length==5 && 'w-[30px] h-[30px]'}
           ${chaharGozineList.length==6 && 'w-[28px] h-[28px]'}
           cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#F03944] `} style={{ boxShadow: "2px 2px black" }} onClick={()=>chaharGozine.onDelete(gozine)}>
            <img src="images/closecircle2.svg" alt="" />
            </div>}
        </div>
    </div>
  )
}

export default GozineCard