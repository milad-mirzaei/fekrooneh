import React from 'react'
import AudioModalHook from '../../../hooks/useAudioModal';
import AddImageModalHook from '../../../hooks/useAddImageModal';
import LevelsHook from '../../../hooks/useLevels';
import Image from 'next/image';



const TrueFalse = () => {
  
    const audioModal = AudioModalHook();
    const addImageModal = AddImageModalHook();

    const levels = LevelsHook();
  
    const levelsList = levels.levels;
    const selectedLevelIndex = levelsList.findIndex(
      (level) => level.isSelected == true
    );
    const currentLevel = levels.levels[selectedLevelIndex];
    const question = currentLevel.trueFalse.question;
  
    const handleChangeQuestion = (quest: string) => {
      const newLevel = currentLevel;
      newLevel.trueFalse.question = quest;
      levelsList.splice(selectedLevelIndex, 1, newLevel);
      levels.onChangeLevel(levelsList);
    };
  
    const handleLevelImageDelete = () => {
      const newLevel = currentLevel;
      newLevel.trueFalse.image = null;
      levelsList.splice(selectedLevelIndex, 1, newLevel);
      levels.onChangeLevel(levelsList);
    };

    const handleSelectAnswer=(answer:'درست'|'غلط')=>{
      const newLevel = currentLevel;
      newLevel.trueFalse.answer= answer;
      levelsList.splice(selectedLevelIndex,1,newLevel);
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
      <div className="md:h-[175px] h-[257px] flex flex-row justify-start items-end gap-5">
        <div
          className="relative md:w-[457px] md:h-[160px] w-[557px] h-[220px] hover:scale-105 transition-all duration-500 flex flex-row bg-white border-[2px] border-black rounded-[15px] p-[31px] items-start"
          style={{ boxShadow: "4px 3px black" }}
        >
          <div
            className="absolute -top-[25px] w-[110px] h-[44px] bg-[#28DE7C] rounded-[15px] border-[1px] border-black flex items-center justify-center"
            style={{ boxShadow: "4px 3px black" }}
          >
            <p className="text-[16px] text-white font-bold">جا سوالی</p>
          </div>
          <div
            className=" w-[42px] h-[42px] rounded-full border-[1px] border-black flex items-center justify-center bg-[#DFECFF]"
            style={{ boxShadow: "4px 3px black" }}
          >
            <Image src="images/editIcon.svg" alt="edit" />
          </div>
          <textarea
            disabled={false}
            onChange={(e) => {
              handleChangeQuestion(e.target.value);
            }}
            value={question ? question : ""}
            placeholder={`سوالت رو اینجا تایپ کن عزیز من \n و از بقیه بپرس تا بهت جواب بدن تایید کنی \n تا سه خط میتونی سوال بنویسی `}
            rows={3}
            className={`
            textarea
            w-full
            p-2 
            pr-8
            text-lg 
            font-bold
            bg-white 
            outline-none
            text-black
            placeholder:text-black
            placeholder:text-[24px]
            md:placeholder:text-[16px]
            placeholder:font-extrabold
            transition
            border-none
            focus:border-none
            focus:border-transparent
            focus:ring-0
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
          `}
            style={{ resize: "none" }}
          />
        </div>
        <div
          className="md:w-[300px] md:h-[175px] w-[347px] h-[263px] hover:scale-105 transition-all duration-500 border-dashed border-[2px] border-black rounded-[14px] bg-white flex flex-col items-center justify-center gap-4"
          style={{ boxShadow: "4px 3px black" }}
        >
          {currentLevel?.trueFalse?.image == null &&
          currentLevel?.trueFalse?.music == null &&
          currentLevel?.trueFalse?.video == null ? (
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="flex gap-2">
                <div
                  className="cursor-pointer relative w-[55px] h-[50px] flex items-center justify-center bg-[#FFB72A] border-dashed border-[#ffffff] border-[2px] rounded-[15px]"
                  onClick={() => addImageModal.onOpen("levelImage",null,null)}
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
          ) : currentLevel.trueFalse.music == null &&
            currentLevel.trueFalse.video == null ? (
            <div className="md:h-[175px] md:w-[175px] flex justify-center items-center group/levelImage  relative">
              
              <Image
                className="h-full"
                src={currentLevel.trueFalse.image["data_url"]}
                alt=""
              />
              <div className="absolute w-[300px] h-[175px] rounded-[20px] bg-neutral-300 bg-opacity-40  hidden group-hover/levelImage:flex items-center  gap-2 justify-center transition-all duration-500">
                
                <button className="  rounded-[15px] px-5 py-2 bg-white border-[3px] border-white group/remove border-dashed hover:border-purple-500 transition-all duration-500" onClick={handleLevelImageDelete}>
                  <p className="text-[20px] text-gray-400 group-hover/remove:text-purple-500 transition-all duration-500">
                    پاک کردن
                  </p>
                </button>
              </div>
            </div>
          ) : currentLevel.trueFalse.image == null &&
            currentLevel.trueFalse.video == null ? (
            <p>موزیک</p>
          ) : (
            <p>ویدیو</p>
          )}
        </div>
      </div>
     <div className='flex flex-row justify-center items-center gap-4'>
      <div className='w-[400px] h-[161px] border-[1px] border-black bg-[#B2FFD6] rounded-[13px] flex flex-row justify-between items-center cursor-pointer  hover:scale-105 transition-all duration-500' style={{ boxShadow: "4px 3px black" }} onClick={()=>handleSelectAnswer('درست')} > 
            <div className='flex justify-between items-center gap-7'>
              <Image src="/images/GozineMask3.svg" alt="" />
              <p className='text-[30px] text-[#002612] font-bold'>درست</p>
            </div>
            {currentLevel.trueFalse.answer == 'درست' ?<div className='w-[50px] h-[50px] ml-5 rounded-full bg-white flex justify-center items-center'style={{ boxShadow: "3px 3px black" }}>
                <div className='w-[25px] h-[25px] rounded-full bg-[#28DE7C]'></div>
            </div>:null}
      </div>
      <div className='w-[400px] h-[161px] border-[1px] border-black bg-[#FFDDD1] rounded-[13px] flex flex-row justify-between items-center cursor-pointer  hover:scale-105 transition-all duration-500' style={{ boxShadow: "4px 3px black" }} onClick={()=>handleSelectAnswer('غلط')} >
            <div className='flex justify-between items-center gap-7 pr-4'>
              <Image src="/images/GozineMask4.svg" alt="" />
              <p className='text-[30px] text-[#770E00] font-bold'>نادرست</p>
            </div>
            {currentLevel.trueFalse.answer == 'غلط' ?<div className='w-[50px] h-[50px] ml-5 rounded-full bg-white flex justify-center items-center'style={{ boxShadow: "3px 3px black" }}>
                <div className='w-[25px] h-[25px] rounded-full bg-[#28DE7C]'></div>
            </div>:null}
      </div>
     </div>
    </div>
  );
    }  
export default TrueFalse;