
import React, { useRef } from "react";
import GozineCard from "../fourChoice/GozineCard";
import useAudioModal from "@/hooks/useAudioModal";
import useAddImageModal from "@/hooks/useAddImageModal";
import useLevels from "@/hooks/useLevels";
import Image from "next/image";

const Descriptive = () => {
  const audioModal = useAudioModal();
  const addImageModal = useAddImageModal();

  const levels = useLevels();

  const levelsList = levels.levels;
  const selectedLevelIndex = levelsList.findIndex(
    (level) => level.isSelected == true
  );
  const currentLevel = levels.levels[selectedLevelIndex];
  const question = currentLevel.descriptive.question;
  const image = currentLevel?.descriptive?.image;
  const music = currentLevel?.descriptive?.music;
  const video = currentLevel?.descriptive?.video;
  const mainAnswer = currentLevel.descriptive.mainAnswer;
  const otherAnswers = currentLevel.descriptive.otherAnswers;

  const handleChangeQuestion = (quest: string) => {
    const newLevel = currentLevel;
    newLevel.descriptive.question = quest;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleLevelImageDelete = () => {
    const newLevel = currentLevel;
    newLevel.descriptive.image = null;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeMainAnswer = (mainAns: string) => {
    const newLevel = currentLevel;
    newLevel.descriptive.mainAnswer = mainAns;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleChangeOtherAnswers = (ans: string, ansIndex: number) => {
    const newLevel = currentLevel;
    newLevel.descriptive.otherAnswers[ansIndex] = ans;
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleAddAnswer = () => {
    const newLevel = currentLevel;
    newLevel.descriptive.otherAnswers.push("");
    levelsList.splice(selectedLevelIndex, 1, newLevel);
    levels.onChangeLevel(levelsList);
  };

  const handleDeleteAnswer = (ansIndex:number)=>{
    const newLevel = currentLevel;
    delete newLevel.descriptive.otherAnswers[ansIndex];
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
      <div className="w-full h-[300px]  flex items-center justify-center gap-3 pt-5">
        <div className="flex flex-col w-[200px] gap-3 h-full pt-10">
          <p className="text-[20px] font-['Shabnam'] font-extrabold">
            پاسخ درست <br /> به همراه پاسخ های مورد
            <br /> قبول رو تایپ کن
          </p>
          <p className="text-[14px] font-['Shabnam'] ">
            وارد کردن پاسخ اصلی به طور صحیح الزامی است.
          </p>
        </div>
        <div className="flex flex-col w-[614px] h-full gap-3">
          <div
            className="w-[557px] h-[50px] rounded-[12px] border-[1px] border-black bg-[#30D67C] px-[15px] mr-[40px] flex items-center justify-start gap-2 "
            style={{ boxShadow: "2px 2px black" }}
          >
            <p className="text-white text-[13px]">پاسخ اصلی :</p>
            <input
              type="text"
              value={mainAnswer}
              id="mainAnswerInput"
              onChange={(e) => handleChangeMainAnswer(e.target.value)}
              className="flex-auto bg-transparent border-none focus:border-none focus:ring-0 text-white font-bold text-[18px]"
            />
            <div
              className="w-[32px] h-[32px] rounded-full border-[1px] border-black bg-[#0066FF] flex items-center justify-center cursor-pointer"
              style={{ boxShadow: "2px 2px black" }}
              onClick={()=>{document.getElementById('mainAnswerInput')?.focus()}}
            >
              <Image src="images/edit.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col h-[300px] w-[625px] ml-[15px] pl-[15px] overflow-auto gap-2 ">
            {otherAnswers.map((ans, index) => (
              <div className="flex items-center justify-start pr-[15px] gap-4" key={index}>
                <p>یا</p>
                <div
                  className={`w-[557px] h-[46px] flex items-center justify-start rounded-[12px] border-[1px] border-black bg-white  px-[15px] ${
                    index == 0 && "border-dashed border-[2px]"
                  }`}
                  style={{ boxShadow: index == 0 ? "" : "2px 2px black" }}
                >
                  <p className="text-black opacity-50 text-[13px]">
                    شبیه اینم بود قبوله :
                  </p>
                  <input
                    type="text"
                    id={`input ${index}`}
                    value={otherAnswers[index]}
                    onChange={(e) =>
                      handleChangeOtherAnswers(e.target.value, index)
                    }
                    className="flex-auto bg-transparent border-none focus:border-none focus:ring-0 text-black font-bold text-[18px]"
                  />
                  <div className="flex gap-2">
                    <div
                      className="w-[32px] h-[32px] rounded-full border-[1px] border-black bg-[#0066FF] flex items-center justify-center cursor-pointer"
                      style={{ boxShadow: "2px 2px black" }}
                      onClick={()=>{document.getElementById(`input ${index}`)?.focus()}}
                    >
                      <Image src="images/edit.svg" alt="" />
                    </div>
                    {index !== 0 &&
                    <div
                    className="w-[32px] h-[32px] rounded-full border-[1px] border-black bg-[#F03944] flex items-center justify-center"
                    style={{ boxShadow: "2px 2px black" }}
                    onClick={()=>handleDeleteAnswer(index)}
                  >
                    <Image src="images/closecircle2.svg" alt="" />
                  </div>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="w-[557px] h-[75px] rounded-[12px] border-[1px] border-black bg-[#0066FF] px-[15px] mr-[40px] flex items-center justify-center gap-2 cursor-pointer "
            style={{ boxShadow: "2px 2px black" }}
            onClick={handleAddAnswer}
          >
            <p className="text-white font-bold">+ افزودن پاسخ درست</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptive;
