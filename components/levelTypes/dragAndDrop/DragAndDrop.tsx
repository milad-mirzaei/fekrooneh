
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GrClose } from "react-icons/gr";
import QuestionEditable from "./QuestionEditable";
import AudioModalHook from "@/hooks/useAudioModal";
import AddImageModalHook from "@/hooks/useAddImageModal";
import LevelsHook from "@/hooks/useLevels";
import Image from "next/image";

const DragAndDrop = () => {
  const audioModal = AudioModalHook();
  const addImageModal = AddImageModalHook();

  const [uncorrectAnswer, setUncorrectAnswer] = useState('');
  const addUncorrectAnswerRef = useRef<HTMLInputElement>(null);

  const levels = LevelsHook();

  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const question = currentLevel.dragAndDrop.question;
  const extraAnswers = currentLevel.dragAndDrop.extraAnswers;
  const image = currentLevel?.dragAndDrop?.image;
  const music = currentLevel?.dragAndDrop?.music;
  const video = currentLevel?.dragAndDrop?.video;
  const caretPos=currentLevel?.dragAndDrop.caretPosition;
  const curentItemPos=currentLevel?.dragAndDrop.currentItemPosition;

  

  const handleChangeAnswer = (answer: string, index: number) => {
    const newLevel = currentLevel;
    newLevel.dragAndDrop.question[index].blank = answer;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleLevelImageDelete = () => {
    const newLevel = currentLevel;
    newLevel.dragAndDrop.image = null;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleAddBlank = (blankIndex:number,index:number,)=>{
    // console.log(blankIndex??);
    const newLevel = currentLevel;
    const ques= newLevel.dragAndDrop.question[index].text;
    const slice1 = ques?.slice(0,blankIndex);
    const slice2 = ques?.slice(blankIndex);
    newLevel.dragAndDrop.question.splice(index, 1, {id:uuidv4(),text:slice1!,blank:null},{id:uuidv4(),text:null,blank:''},{id:uuidv4(),text:slice2!,blank:null});
    // console.log(newLevel.dragAndDrop.question);
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  }

  const handleAddUncorrectAnswer = (answer:string)=>{
    if(answer !== null && answer !== ''){
      const newLevel = currentLevel;
    newLevel.dragAndDrop.extraAnswers.push({id:uuidv4(),text:answer});
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
    }
  }


  const handleDeleteBlank = (index: number) => {
    const newLevel = currentLevel;

      const text =`${newLevel.dragAndDrop.question[index-1].text} ${newLevel.dragAndDrop.question[index+1].text}`
        newLevel.dragAndDrop.question[index-1].text=text

    newLevel.dragAndDrop.question.splice(index,2);
 
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
    console.log(levelsList)
  };

  const divRef = useRef<HTMLDivElement>(null);

  console.log(divRef.current?.textContent);



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
      <div className="md:h-[260px] h-[257px]  flex flex-row justify-start items-end gap-5">
        <div
          className="relative md:w-[457px] md:h-[240px] w-[557px] h-[220px] hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
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
              onClick={()=>{console.log(caretPos,curentItemPos); handleAddBlank(caretPos,curentItemPos)}}
            >
              <p className="text-[14px] text-[#0066FF] font-bold">
                افزودن جای خالی
              </p>
            </div>
          </div>
          <div
            className=" w-[42px] h-[42px] rounded-full border-[1px] border-black flex items-center justify-center bg-[#DFECFF]"
            style={{ boxShadow: "4px 3px black" }}
          >
            <Image src="images/editIcon.svg" alt="edit" />
          </div>
          <div className="flex items-center gap-[2px] pr-[12px] mt-[20px] flex-wrap w-full">
            {question.map((item,index)=>item.text !== null ?<QuestionEditable index={index} key={index}/>
             :
             <div key={index} className="relative flex justify-center items-center">
              <div
                    dir="rtl"
                    className="min-w-[50px] border-[2px] border-dashed border-black rounded-[13px] p-[7px] px-[17px] flex items-center justify-center"
                    contentEditable
                    suppressContentEditableWarning={true}
                    onKeyDown={(e)=>{
                      if(e.key === 'Enter'){
                        e.preventDefault();
                      }
                    }}
                    onBlur={(e) =>
                      handleChangeAnswer(e.currentTarget.textContent!, index)
                    }
                  >
                    {item.blank}
                  </div>
                  <div className='absolute -top-1 -right-1 w-[15px] h-[15px] rounded-full bg-red-600 cursor-pointer'
                  onClick={()=>handleDeleteBlank(index)}
                  ></div>
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
                  onClick={handleLevelImageDelete}
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
      </div>
      <div className="flex justify-center items-center gap-2  h-[110px] w-full">
        {question.map((item, index) => {
          if (item.blank !== null && item.blank !== '') {
            return (
              <div
              key={index}
                className="bg-[#28DE7C] border-[1px] border-black rounded-[12px] px-[10px] h-[50px] cursor-pointer hover:-translate-y-[7px] transition-all duration-300 flex justify-center items-center text-[17px] font-extrabold"
                style={{ boxShadow: "2px 2px black" }}
              >
                {item.blank}
              </div>
            );
          }
        })}
        {extraAnswers.map((item,index)=>(
        <div key={index} className="bg-[#FF8861] border-[1px] border-black rounded-[12px] px-[10px] h-[50px] cursor-pointer hover:-translate-y-[7px] transition-all duration-300 flex justify-center items-center text-[17px] font-extrabold"
        style={{ boxShadow: "2px 2px black" }}
        >
          {item.text}
        </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-2  h-[110px] p-7 w-full">
        <div className="flex items-center justify-center gap-1 bg-white  py-[10px] px-[10px] rounded-[10px] border-black border-[1px] hover:scale-110 transition-all duration-300" style={{ boxShadow: "1px 1px black" }}>
          <div className="bg-neutral-300 w-[30px] h-[30px] rounded-[10px] flex justify-center items-center cursor-pointer" onClick={()=>{handleAddUncorrectAnswer(uncorrectAnswer),setUncorrectAnswer('');}}>+</div>
          <input
           type="text"
           placeholder="اضافه کردن جای خالی نادرست"
           ref={addUncorrectAnswerRef}
           value={uncorrectAnswer}
           onChange={(e)=>setUncorrectAnswer(e.target.value)}
           className="placeholder:text-[13px] border-none focus:border-none focus:outline-none focus:ring-0 w-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
