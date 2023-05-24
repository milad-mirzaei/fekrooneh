import React from "react";


const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-navbar justify-between  flex flex-row items-center px-10">
      <div className="  h-[95px]  flex flex-row items-center justify-end">
        <div className="flex flex-row gap-5">
        <img src='images/logo.svg' alt="logo" />
          <div className="h-[39px] w-[1px] mx-3 bg-[#000000] opacity-25"></div>
          <div
            className="w-[49px] h-[49px] rounded-full bg-[#F0F1F5] border-[#1A1A1A] border-[1px] flex items-center justify-center relative"
            style={{ boxShadow: "2px 2px black" }}
          >
            <div className="w-[39px] h-[39px] bg-[#FFB72A] rounded-full">
              <img className="rounded-full" src='images/avatar.svg' alt="avatar" />
            </div>
            <div className="absolute w-[24px] h-[24px] bg-[#6B00E2] rounded-full -bottom-[3px] -right-[12px] flex justify-center items-center">
              <img src='images/diamond.svg' alt="diamond" />
            </div>
          </div>
          <div
            className="w-[133px] h-[42px] hidden md:flex justify-center items-center bg-[#1A1A1A] rounded-[37.05px]"
            style={{ boxShadow: "4px 4px #FFB72A" }}
          >
            <div className="flex flex-row pt-1 items-center justify-center gap-1">
              <img src='images/coin.svg' alt="coin" />
              <p className="text-white"> 345 سکه</p>
            </div>
          </div>
          <div
            className="hidden md:flex justify-center items-center w-[42px] h-[42px] bg-[#F0F1F5] rounded-full border-[1px] border-[#1a1a1a] shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]"
            style={{ boxShadow: "2px 2px black" }}
          >
            <img src='images/plus.svg' alt="plus" />
          </div>
        </div>
      </div>
      
      <div className=" hidden h-[95px] lg:flex justify-center items-center">
        <ul className="flex gap-5">
          <li>خانه</li>
          <li>پنل کاربزی</li>
          <li>کتاب ساز</li>
          <li className="font-extrabold">بازی ساز</li>
        </ul>
      </div>
      <div className="  h-[95px] flex items-center justify-start gap-2">
      <div
          className="flex items-center justify-center w-[158px] h-[51px] bg-[#28DE7C] rounded-[100px]  border-[1px] border-black"
          style={{ boxShadow: "4px 4px black" }}
        >
          <p className="text-md font-extrabold">ذخیره پیشنویس</p>
        </div>
        <div className="flex items-center justify-center w-[75px] h-[50px] rounded-[100px] bg-white border-[1px] border-black">
          <img src='images/more.svg' alt="more" />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
