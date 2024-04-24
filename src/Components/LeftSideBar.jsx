import logoFull from "../../public/images/logo-full.png";
import logoHalf from "../../public/images/logo.png";
import Navbar from "./Navbar";

const LeftSideBar = ({ showFull }) => {
  return (
    <div className={`bg-white ${showFull ? "px-0" : "px-4"}`}>
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
      {showFull && (
        <div className="bg-[#145650] rounded-lg p-5 text-white mx-5 space-y-1 bg-image">
          <p className="font-semibold text-[17px]">
            Let Jobick Managed Your Resume Easily
          </p>
          <p className="text-gray-300">Lorem ipsum dolor sit amet</p>
        </div>
      )}
    </div>
  );
};

export default LeftSideBar;
