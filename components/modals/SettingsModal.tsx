import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";
import Input from "../Input";
import useSettingsModal from "../../hooks/useSettingsModal";
import Image from "next/image";


const SettingsModal = () => {
  const [title, setTitle] = useState("");
  const [tozihat, setTozihat] = useState("");
  const [tag, setTag] = useState("");
  const emptyList: string[] = [];
  const [tagList, setTagList] = useState(emptyList);

  const settingsModal = useSettingsModal();

  const tagRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleAddTag = () => {
    if (tagRef.current !== null) {
      setTagList([...tagList, tagRef.current.value]);
    }
  };

  const bodyContent = (
    <div className="w-full h-full  p-7 flex flex-col items-start justify-start gap-6">
      <div className="flex gap-6 items-start justify-start">
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px] ">
          <p className="text-[#aaaaaa] text-[17px] pr-8">نام بازی : (الزامی)</p>
          <div className="w-[338px] h-[64px] rounded-[34px] ">
            <Input
              disabled={false}
              value={title}
              placeholder="نام بازی"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              isTitle={true}
            />
          </div>
          <p className="text-[#aaaaaa] text-[17px] pr-8">
            توضیحات بازی (اختیاری)
          </p>
          <textarea
            rows={5}
            value={tozihat}
            onChange={(e) => setTozihat(e.target.value)}
            placeholder="توضیحات بازی"
            className={`
        w-full
        p-4 
        pr-8
        text-lg 
        bg-white 
        border-[#aaaaaa] border-[1px]
        rounded-[34px]
        outline-none
        text-black
        font-bold
        focus:border-black
        focus:border-[2px]
        transition
        disabled:bg-neutral-900
        disabled:opacity-70
        disabled:cursor-not-allowed
      `}
          />
          <p className="text-[#aaaaaa] text-[17px] pr-8">
            دسته بندی بازی (الزامی)
          </p>
          <div className="w-[338px] h-[64px] flex items-center justify-between rounded-[34px] border-[1px] border-[#aaaaaa] cursor-pointer px-8">
            <p className="font-extrabold text-[17px]">علمی تخیلی</p>
            <div className="w-[31px] h-[24px] bg-[#D7D7D7] rounded-[14px] flex items-center justify-center">
              <Image src="images/VectorDown.svg" alt="vector" />
            </div>
          </div>
          <p className="text-[#aaaaaa] text-[17px] pr-8">آهنگ پس زمینه بازی</p>
          <div className="w-[338px] h-[64px] flex items-center justify-between rounded-[34px] border-[1px] border-[#aaaaaa] cursor-pointer px-8">
            <p className="font-extrabold text-[17px]">فکرونه بازی</p>
            <div className="w-[31px] h-[24px] bg-[#D7D7D7] rounded-[14px] flex items-center justify-center">
              <Image src="images/VectorDown.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
          <p className="text-[#aaaaaa] text-[17px] pr-8">کاور بازی</p>
          <div className="w-[338px] h-[331px] rounded-[34px] border-[1px] border-[#aaaaaa] relative">
            <div className="absolute w-[127px] h-[52px] bg-black rounded-[34px] flex items-center justify-center bottom-[20px] left-[106px]">
              <p className="text-white font-semibold text-[17px] cursor-pointer">
                عوض کردن
              </p>
            </div>
          </div>
          <p className="text-[#aaaaaa] text-[17px] pr-8 pt-[22px]">
            تگ های بازی (اختیاری)
          </p>
          <div className="flex w-full gap-2">
            <div className="w-full">
              <input
                disabled={false}
                value={tag}
                placeholder="میتونی حداکثر سه تگ اضافه کنی ..."
                type="text"
                ref={tagRef}
                className={`
              w-full
              p-4 
              pr-5
              text-lg 
              bg-white 
              border-[#aaaaaa] border-[1px]
              rounded-full
              outline-none
              text-black
              focus:border-black
              focus:border-[2px]
              transition
              disabled:bg-neutral-900
              disabled:opacity-70
              disabled:cursor-not-allowed
            `}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
              />
            </div>
            <div
              className=" flex-none w-[80px] h-[64px] rounded-full bg-black flex items-center justify-center cursor-pointer"
              onClick={handleAddTag}
            >
              <p className="text-white font-semibold text-[17px]">اضافه</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tagList.map((t, i) => (
              <div key={i} className="h-[47px] p-2 px-4 flex items-center justify-start bg-[#D7D7D7] rounded-[25px] gap-1 ">
                <Image
                  className="cursor-pointer"
                  src="images/closecircle.svg"
                  alt="close"
                  onClick={() => {
                    setTagList(tagList.filter((value) => value !== tagList[i]));
                  }}
                />
                <p className="text-[14px] font-bold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex w-full justify-center items-center pt-[30px] gap-4">
        <div className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center bg-black cursor-pointer">
          <p className="text-[20px] font-bold text-white">ذخیره تنظیمات</p>
        </div>
        <div
          className="w-[190px] h-[62px] rounded-[40px] flex items-center justify-center bg-[#D7D7D7] cursor-pointer"
          onClick={settingsModal.onClose}
        >
          <p className="text-[20px] font-bold text-black">انصراف</p>
        </div>
      </div>
    </div>
  );

  return <Modal isOpen={settingsModal.isOpen} body={bodyContent} onClose={settingsModal.onClose}/>;
};

export default SettingsModal;
