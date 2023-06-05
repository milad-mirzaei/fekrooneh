import useChaharGozineList, { Gozine } from '@/hooks/useChaharGozineList';
import React from 'react'
import Image from 'next/image';

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
        'images/GozineMask.svg',
        'images/GozineMask3.svg',
    ]

    const chaharGozine = useChaharGozineList();
    const chaharGozineList = chaharGozine.gozineList;
    const selectedGozineIndex = chaharGozineList.findIndex((gozine)=>gozine.isSelected == true);

    const selectHandle = (index:number)=>{
        const newList = chaharGozineList;
        newList[selectedGozineIndex].isSelected = false;
        newList[index].isSelected=true;
        chaharGozine.onChangeGozine(newList);
       }

      
      const handleDelete=(gozine:Gozine)=>{
        if(index == selectedGozineIndex){
        selectHandle(selectedGozineIndex-1);
        chaharGozine.onDelete(gozine);}else{
            chaharGozine.onDelete(gozine);
        }
    }


  return (
    <div className={` relative
     ${chaharGozineList.length==4 &&' md:w-[180px] md:h-[257px]' } 
     ${chaharGozineList.length==5 &&' md:w-[155px] md:h-[257px]' } 
     ${chaharGozineList.length==6 &&' md:w-[135px] md:h-[245px]' } 

     w-[180px] h-[257px]  flex items-center justify-center rounded-[13px] ${gozine.color}  border-[3px] border-black `} style={{ boxShadow: "4px 3px black" }}>
        <Image className='absolute top-[71px] right-[5px]' src={gozineMasks[index]} alt="mask" />
        <p className="absolute text-white text-[28px] font-['yekanbakhfat'] ">{gozine.text}</p>
        <div className='cursor-pointer absolute top-[25px] left-[25px] md:top-[12px] md:left-[12px]  w-[35px] h-[35px] md:w-[30px] md:h-[30px] rounded-full border-[2px] border-white flex justify-center items-center' style={{ boxShadow: "4px 3px black" }} onClick={()=>onSelect(index)}>
            {gozine.isSelected && <div className='w-[18px] h-[18px] rounded-full bg-[#28DE7C]'></div>}
        </div>
        <div className='absolute bottom-[24px] md:bottom-[17px] flex justify-center items-center gap-1'>
            <div className={`
            ${chaharGozineList.length==5 && 'md:w-[27px] md:h-[27px]'}
            ${chaharGozineList.length==6 && 'md:w-[27px] md:h-[27px]'}
            cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#7900FF] `} style={{ boxShadow: "2px 2px black" }}>
                <Image src="images/calculator.svg" alt="" width={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20} height={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20}  />
            </div>
            <div className={`
            ${chaharGozineList.length==5 && 'md:w-[27px] md:h-[27px]'}
            ${chaharGozineList.length==6 && 'md:w-[27px] md:h-[27px]'}
            cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#0066FF] `} style={{ boxShadow: "2px 2px black" }}>
            <Image src="images/edit.svg" alt="" width={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20} height={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20} />
            </div>
            <div className={`
            ${chaharGozineList.length==5 && 'md:w-[27px] md:h-[27px]'}
            ${chaharGozineList.length==6 && 'md:w-[27px] md:h-[27px]'}
            cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#ffb72a] `} style={{ boxShadow: "2px 2px black" }}>
            <Image src="images/image.svg" alt="" width={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20} height={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20}  />
            </div>
           {chaharGozine.gozineList.length >3 &&  <div className={`
           ${chaharGozineList.length==5 && 'md:w-[27px] md:h-[27px]'}
           ${chaharGozineList.length==6 && 'md:w-[27px] md:h-[27px]'}
           cursor-pointer w-[35px] h-[35px] flex justify-center items-center rounded-full border-[2px] border-black bg-[#F03944] `} style={{ boxShadow: "2px 2px black" }} onClick={()=>handleDelete(gozine)}>
            <Image src="images/closecircle2.svg" alt="" width={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20} height={chaharGozineList.length ==5 ?15:chaharGozineList.length ==6 ?13 :20}  />
            </div>}
        </div>
    </div>
  )
}

export default GozineCard