import Image from "next/image";
import React from "react";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] bg-navbar justify-between  flex flex-row items-center px-10">
      <div className="  h-[95px]  flex flex-row items-center justify-end">
        <div className="flex flex-row items-center gap-5">
        <Image src='images/logo.svg' alt="logo"  width={63}/>
          <div className="h-[29px] w-[1px] mx-3 bg-[#000000] opacity-25"></div>
          <div
            className="w-[42px] h-[42px] rounded-full bg-[#F0F1F5] border-[#1A1A1A] border-[1px] flex items-center justify-center relative"
            style={{ boxShadow: "2px 2px black" }}
          >
            <div className="w-[39px] h-[39px] bg-[#FFB72A] rounded-full">
              <Image className="rounded-full" src='images/avatar.svg' alt="avatar" />
            </div>
            <div className="absolute w-[22px] h-[22px] bg-[#6B00E2] rounded-full -bottom-[3px] -right-[12px] flex justify-center items-center">
              <Image src='images/diamond.svg' alt="diamond" width={12}/>
            </div>
          </div>
          <div
            className="w-[123px] h-[38px] hidden md:flex justify-center items-center bg-[#1A1A1A] rounded-[37.05px]"
            style={{ boxShadow: "4px 4px #FFB72A" }}
          >
            <div className="flex flex-row pt-1 items-center justify-center gap-1">
              <Image src='images/coin.svg' alt="coin" width={23} />
              <p className="text-white text-[14px]"> 345 سکه</p>
            </div>
          </div>
          <div
            className="hidden md:flex justify-center items-center w-[32px] h-[32px] bg-[#F0F1F5] rounded-full border-[1px] border-[#1a1a1a] "
            style={{ boxShadow: "2px 2px black" }}
          >
            <Image src='images/plus.svg' alt="plus" />
          </div>
        </div>
      </div>
      
      <div className=" hidden h-[95px] lg:flex justify-center items-center">
        <ul className="flex gap-5 text-[14px]">
          <li>خانه</li>
          <li>پنل کاربزی</li>
          <li>کتاب ساز</li>
          <li className="font-extrabold">بازی ساز</li>
        </ul>
      </div>
      <div className=" flex items-center justify-start gap-2">

      <div
          className="flex items-center justify-center px-[17px] h-[41px] bg-[#FFB72A] rounded-[100px] gap-2  border-[1px] border-black"
          style={{ boxShadow: "4px 4px black" }}
        >
          <p className="text-[14px] text-white font-extrabold">راهنما</p>
         <Image src='images/rahnamaIcon.svg' alt="more"  width={17}/>
        </div>
      <div
          className="flex items-center justify-center px-[17px] h-[41px] bg-[#28DE7C] rounded-[100px]  border-[1px] border-black"
          style={{ boxShadow: "4px 4px black" }}
        >
          <p className="text-[14px] font-extrabold">ذخیره پیشنویس</p>
        </div>
        <div className="flex items-center justify-center px-[17px] h-[41px] rounded-[100px] bg-white border-[1px] border-black">
          <Image src='images/more.svg' alt="more"  width={17}/>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
