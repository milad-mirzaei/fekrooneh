import React from "react";
import LeftSideBar from "./layout/LeftSideBar";
import RigtSideBar from "./layout/RightSideBar";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div dir="rtl" className="h-screen w-screen">
      <Navbar />
      <Header />
      <div className="w-full md:h-[597px]  grid grid-cols-12">
        <RigtSideBar />
        <div
          className="
            col-span-8
            "
        >
          {children}
        </div>
        <LeftSideBar />
      </div>
    </div>
  );
};

export default Layout;
