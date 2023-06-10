
import React from 'react'
import DialogQuestionEditable from './DialogQuestionEditable';
import { v4 as uuidv4 } from "uuid";
import useAudioModal from '@/hooks/useAudioModal';
import useAddImageModal from '@/hooks/useAddImageModal';
import useLevels from '@/hooks/useLevels';
import Image from 'next/image';


const DialogBox = () => {
    const audioModal = useAudioModal();
    const addImageModal = useAddImageModal();

    const levels = useLevels();

    const levelsList = levels.levels;
    const selectedLevelIndex = levelsList.findIndex(
      (level) => level.isSelected == true
    );
    const currentLevel = levels.levels[selectedLevelIndex];
    const question = currentLevel.dialogBox.question;
    
    const image = currentLevel?.dialogBox?.image;
    const music = currentLevel?.dialogBox?.music;
    const video = currentLevel?.dialogBox?.video;
    const caretPos=currentLevel?.dialogBox.caretPosition;
    const curentItemPos=currentLevel?.dialogBox.currentItemPosition;


    const handleLevelImageDelete = () => {
        const newLevel = currentLevel;
        newLevel.dialogBox.image = null;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      };
    
      const handleAddBlank = (blankIndex:number,index:number,)=>{
        // console.log(blankIndex??);
        const newLevel = currentLevel;
        const ques= newLevel.dialogBox.question[index].text;
        const slice1 = ques?.slice(0,blankIndex);
        const slice2 = ques?.slice(blankIndex);
        newLevel.dialogBox.question.splice(index, 1, {id:uuidv4(),text:slice1!,dialog:null},{id:uuidv4(),text:null,dialog:{choices:[],trueAnswer:0,isOpen:false}},{id:uuidv4(),text:slice2!,dialog:null});
        // console.log(newLevel.dialogBox.question);
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }
    
    const handleDeleteBlank = (index: number) => {
        const newLevel = currentLevel;
    
          const text =`${newLevel.dialogBox.question[index-1].text} ${newLevel.dialogBox.question[index+1].text}`
            newLevel.dialogBox.question[index-1].text=text
    
        newLevel.dialogBox.question.splice(index,2);
     
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
        console.log(levelsList)
      };

      const handleOpenDialog = (index:number)=>{
          const newLevel =currentLevel;
          console.log(newLevel.dialogBox.question[index]);
        newLevel.dialogBox.question[index].dialog!.isOpen= newLevel.dialogBox.question[index].dialog!.isOpen == true?false:true;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }

      const handleChangeTrueAnswer=(answerIndex:number,ItemIndex:number)=>{
        console.log(answerIndex,ItemIndex);
        const newLevel =currentLevel;
        console.log(newLevel.dialogBox.question[ItemIndex].dialog?.trueAnswer);
        newLevel.dialogBox.question[ItemIndex].dialog!.trueAnswer! = answerIndex;
        levelsList.splice(selectedLevelIndex, 1, newLevel);
        levels.onChangeLevel(levelsList);
      }
    



  return (
    <div className="p-[12px]  flex flex-col items-center justify-start gap-5">
      <div
        className="md:w-[660px] md:h-[42px] w-[750px] h-[53px] hover:scale-105 transition-all duration-500 bg-[#6B00E2] rounded-[34px] border-[1px]  border-black flex items-center justify-between px-3 gap-4 cursor-pointer"
        style={{ boxShadow: "4px 3px black" }}
      >
        <div className="flex items-center justify-start gap-2">
          <div className="w-[32px] h-[32px] mr-5 rounded-full bg-[#FFB72A] border-[1px] border-black flex items-center justify-center">
            <Image src="images/rahnamaIcon.svg" alt="rahnama" />
          </div>
          <p className="text-white font-bold text-[16px] md:text-[11px]">
            برای فعال شدن تمام قابلیت های بازیسازی میتونی اشتراک پریمیوم بگیری و
            از اونها لذت ببری.
          </p>
        </div>
        <div className="flex items-center justify-start">
          <p className="text-white font-bold text-[16px] md:text-[11px]">
            خرید اشتراک پریمیوم
          </p>
          <Image src="images/arrowcircleup2.svg" alt="arrow" />
        </div>
      </div>
      <div className="md:min-h-[260px]  flex flex-row justify-start items-end gap-5">
        <div
          className="relative md:w-[457px] md:min-h-[240px] w-[557px]  hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
          style={{ boxShadow: "4px 3px black" }}
        >
          <div
            className="absolute -top-[25px] w-[110px] h-[44px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center"
            style={{ boxShadow: "4px 3px black" }}
          >
            <p className="text-[16px] text-white font-bold">جا سوالی</p>
          </div>
          <div>
            <div
              className="absolute bottom-[15px] left-[15px]  py-[10px] px-[14px]  bg-[#C7DDFF] rounded-[15px] border-[2px] border-dashed border-[#0066FF] flex items-center justify-center cursor-pointer"
              onClick={()=>{console.log(caretPos,curentItemPos);handleAddBlank(caretPos,curentItemPos)}}
            >
              <p className="text-[14px] text-[#0066FF] font-bold">
                افزودن دیالوگ باکس
              </p>
            </div>
          </div>
          <div
            className=" w-[42px] h-[42px] rounded-full border-[1px] border-black flex items-center justify-center bg-[#DFECFF]"
            style={{ boxShadow: "4px 3px black" }}
          >
            <Image src="images/editIcon.svg" alt="edit" />
          </div>
          <div className="flex items-center gap-[2px] pr-[12px] mt-[20px]  flex-wrap w-full">
            {question.map((item,index)=>
            item.text !== null ?<div key={index} style={{zIndex:50-index}}><DialogQuestionEditable index={index} key={index} /></div>
             :
             <div className="relative flex justify-center items-center">
              <div className={`relative flex justify-center items-center gap-2 min-w-full p-[10px] bg-white border-dashed  border-[2px] border-black rounded-[15px] cursor-pointer  `} 
              style={{  zIndex:100-index }}
              onClick={()=>handleOpenDialog(index)}
              >
                <div className='absolute -top-1 -right-1 w-[15px] h-[15px] rounded-full bg-red-600 cursor-pointer'
                  onClick={()=>{handleDeleteBlank(index)}}
                  ></div>
                <p>
                    {item.dialog?.choices.length ==0 ? 'انتخاب کن':item.dialog?.choices[item.dialog.trueAnswer]}
                </p>
                <div className=' w-[23px] h-[15px] flex justify-center items-center rounded-[10px] border-black border-[1px] bg-neutral-300'>
                    <Image src="images/VectorDown.svg" alt="vector" width={8}/>
                </div>
                {item.dialog?.isOpen && <div className={`absolute min-w-[130px]  border-[1px] border-black rounded-[13px] bg-neutral-100 top-[50px]  p-[10px]  `}>
                    <div className='flex flex-col gap-2'>
                    {item.dialog.choices.map((itm,indx)=>(
                    <div key={indx} className={` w-full flex justify-center items-center rounded-[10px] py-[7px] px-[10px] ${indx == item.dialog?.trueAnswer ? 'border-[3px] border-green-500':'bg-white'} `} onClick={()=>handleChangeTrueAnswer(indx,index)}>
                      {itm}
                    </div>
                    ))}
                    </div>
                    </div>}
                </div>
                  
             </div>
             )}
            
          
          </div>
         
        </div>
        <div
          className="md:w-[300px] md:h-[240px] w-[347px] h-[263px] hover:scale-105 transition-all duration-500 border-dashed border-[2px] border-black rounded-[14px] bg-white flex flex-col items-center justify-center gap-4"
          style={{ boxShadow: "4px 3px black" }}
        >
          {image == null && music == null && video == null ? (
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-2">
                <div
                  className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#FFB72A] border-dashed border-[#ffffff] border-[2px] rounded-[15px]"
                  onClick={() => addImageModal.onOpen("levelImage", null, null)}
                >
                  <Image src="images/image.svg" alt="image" />
                  {/* <div className="absolute w-[20px] h-[20px] flex items-center justify-center bg-white rounded-full border-[2px] -right-[10px] border-black">
              <Image src="images/+.svg" alt="plus" />
            </div> */}
                </div>
                <div
                  className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#F6EDFF] border-dashed border-[#6B00E2] border-[2px] rounded-[15px]"
                  onClick={audioModal.onOpen}
                >
                  <Image src="images/voicecircle.svg" alt="voice" />
                  <div
                    className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FFB72A] rounded-full border-[1px] -top-[17px] border-black"
                    style={{ boxShadow: "1px 1px black" }}
                  >
                    <Image src="images/rahnamaIcon2.svg" alt="plus" />
                  </div>
                </div>
                <div className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#DDFFED] border-dashed border-[#28DE7C] border-[2px] rounded-[15px]">
                  <Image src="images/videocircle.svg" alt="video" />
                  <div
                    className="absolute w-[23px] h-[23px] flex items-center justify-center bg-[#FFB72A] rounded-full border-[1px] -top-[17px] border-black"
                    style={{ boxShadow: "1px 1px black" }}
                  >
                    <Image src="images/rahnamaIcon2.svg" alt="plus" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-1">
                <Image src="images/info.svg" alt="info" />
                <p className="text-[13px] font-semibold text-black opacity-50">
                  میتونی یک تصویر , صدا یا ویدیو اضافه کنی
                </p>
              </div>
            </div>
          ) : music == null && video == null ? (
            <div className="md:h-[175px] md:w-[175px] flex justify-center items-center group/levelImage  relative">
              <Image className="h-full" src={image["data_url"]} alt="" />
              <div className="absolute w-[300px] h-[175px] rounded-[20px] bg-neutral-300 bg-opacity-40  hidden group-hover/levelImage:flex items-center  gap-2 justify-center transition-all duration-500">
                <button
                  className="  rounded-[15px] px-5 py-2 bg-white border-[3px] border-white group/remove border-dashed hover:border-purple-500 transition-all duration-500"
                  onClick={()=>{handleLevelImageDelete}}
                >
                  <p className="text-[20px] text-gray-400 group-hover/remove:text-purple-500 transition-all duration-500">
                    پاک کردن
                  </p>
                </button>
              </div>
            </div>
          ) : image == null && video == null ? (
            <p>موزیک</p>
          ) : (
            <p>ویدیو</p>
          )}
        </div>
      </div></div>
  )
}

export default DialogBox