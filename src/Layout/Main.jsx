import { Outlet } from "react-router-dom";
import LeftSideBar from "../Components/LeftSideBar";
import Header from "../Components/Header";
import { useState } from "react";

const Main = () => {
  const [showFull, setShowFull] = useState(true);

  return (
    <div className="flex  h-screen">
      <div className={`${showFull ? "w-[290px]" : "w-[90px]"} duration-300`}>
        <LeftSideBar showFull={showFull}></LeftSideBar>
      </div>
      <div className=" flex flex-col h-screen  w-full">
        <Header showFull={showFull} setShowFull={setShowFull}></Header>
        <div className="p-3 bg-gray-200 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
