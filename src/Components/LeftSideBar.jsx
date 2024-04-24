import logoFull from "../../public/images/logo-full.png";
import logoHalf from "../../public/images/logo.png";
import Navbar from "./Navbar";

const LeftSideBar = ({ showFull }) => {
  return (
    <div className={`bg-white ${showFull ? "px-5" : "px-4"}`}>
      {/* logo section */}
      <div className=" flex items-center justify-center py-4">
        {showFull ? (
          <img src={logoFull} alt="logo" className="h-[56px]" />
        ) : (
          <img src={logoHalf} alt="logo" className="h-[50px]" />
        )}
      </div>

      {/* navbar section */}
      <Navbar showFull={showFull}></Navbar>
      {/* bottom section */}
      {showFull && <div>bottom part</div>}
    </div>
  );
};

export default LeftSideBar;
