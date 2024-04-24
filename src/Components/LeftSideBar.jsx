import logoFull from '../../public/images/logo-full.png' ;

const LeftSideBar = () => {
    return (
      <div className="bg-white">
        <div className=" flex items-center justify-center py-4">
          <img src={logoFull} alt="logo" className="h-[56px]" />
        </div>
        <div>leftside bar</div>
      </div>
    );
};

export default LeftSideBar;