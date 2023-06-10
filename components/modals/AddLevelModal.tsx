import React, { useState } from "react";
import Modal from "../Modal";
import LevelsHook from "../../hooks/useLevels";
import useAddLevelModal from "../../hooks/useAddLevelModal";
import useGameModels from "../../hooks/useGameModels";
import { v4 as uuidv4 } from "uuid";
import { fourXtwo } from "../../constants/defaultPairingItems";
import { defaultItems, extraAnswers } from "../../constants/defaultFourChoiceItems";

const AddLevelModal = () => {
  const levels = LevelsHook();

  const addLevelModal = useAddLevelModal();
  const { models } = useGameModels();
  const [selectedType, setSelectedType] = useState(models[0]);

  const bodyContent = (
    <div className="flex justify-start items-start p-10 gap-4">
      <div className="flex flex-col flex-1 items-center justify-start gap-2 ">
        {models.map((model,index) => (
          <div key={index} className={`w-full h-[44px] flex items-center group/gameType hover:bg-black rounded-[50px] border-[1px] border-black border-opacity-20 px-7  gap-4  cursor-pointer ${model == selectedType && 'bg-black'} `} onClick={()=>setSelectedType(model)} >
            <div className="w-[20px] h-[20px] bg-[#D9D9D9] rounded-[7px]"></div>
            <p className={`font-bold text-[14px] group-hover/gameType:text-white ${model == selectedType && 'text-white'}`}>{model}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 items-start justify-start gap-5 pt-5 ">
        <p className="text-[13px]">پیش نمایش بازی</p>
        <div className="w-[262px] h-[194px] rounded-[27px] border-[1px] border-black border-opacity-20"></div>
        <h1 className="font-extrabold text-[22px] font-['yekanbakhfat']">
          کوییز
        </h1>
        <div className="w-[223px]">
          <p className="text-black text-opacity-50 text-[15px]">
            کوییز یک بازی جذابه که میتونی باهاش سطح دانش بقیه رو با سوالت بفهمی
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className="w-[175px] h-[52px] bg-black rounded-[100px] flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => {
              levels.onAdd({
                id: uuidv4(),
                emtiaz: 5,
                zaman: 30,
                icon: "images/4gozineLevelIcon.svg",
                extraAnswers:JSON.parse(JSON.stringify(extraAnswers)),
                fourChoice: {
                  answers:JSON.parse(JSON.stringify(defaultItems)) ,
                  image: null,
                  music: null,
                  video: null,
                  isMultipleChoice: selectedType=='چند گزینه ای'?true: false,
                },
                trueFalse:{
                  answer:'درست',
                  image:null,
                  music:null,
                  video:null,
                  question:'',
                },
                sequenceAndOrder:{
                  answers: JSON.parse(JSON.stringify(defaultItems)).reverse(),
                  image:null,
                  music:null,
                  video:null,
                  trueSequence:[],
                  question:'',
                  isLtr:false

                },
                pairing:{
                  question:'',
                image:null,
                music:null,
                video:null,
                arrangeModel:'4 دسته 2 تایی',
                pairingItems:JSON.parse(JSON.stringify(fourXtwo))
                },
                descriptive:{
                  question:'',
                  image:null,
                  music:null,
                  video:null,
                  mainAnswer:'',
                  otherAnswers:['']
                },
                dragAndDrop:{
                  image:null,
                  music:null,
                  video:null,
                  question:[{id:uuidv4(),text:'',blank:null}],
                  extraAnswers:[],
                  caretPosition:0,
                  currentItemPosition:0
                },
                dialogBox:{
                  image:null,
                  music:null,
                  video:null,
                  question:[{id:uuidv4(),text:'',dialog:null}],
                  caretPosition:0,
                  currentItemPosition:0
                },
                isSelected: false,
                type: selectedType,
                sakhti: "آسون",
              });
              addLevelModal.onClose();
            }}
          >
            <div className="w-[22px] h-[22px] bg-[#D9D9D9] rounded-[10px]"></div>
            <p className="font-bold text-[17px] text-white ">افزودن این بازی</p>
          </div>
          <div
            className="w-[175px] h-[52px] bg-[#D7D7D7] rounded-[100px] flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => {
              addLevelModal.onClose();
            }}
          >
            <div className="w-[22px] h-[22px] bg-black rounded-[10px]"></div>
            <p className="font-bold text-[17px] text-black ">انصراف</p>
          </div>
        </div>
      </div>
    </div>
  );
  return <Modal isOpen={addLevelModal.isOpen} body={bodyContent} onClose={addLevelModal.onClose} />;
};

export default AddLevelModal;
