import { Outlet } from "react-router-dom";
import LeftSideBar from "../Components/LeftSideBar";
import Header from "../Components/Header";

const Main = () => {
  return (
    <div className="flex  h-screen">
      <div className="w-[300px]">
        <LeftSideBar></LeftSideBar>
      </div>
      <div className=" flex flex-col h-screen  w-full">
        <Header></Header>
        <div className="p-3 bg-gray-200 flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
