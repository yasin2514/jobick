import React from 'react';
import logoFull from '../../public/images/logo-full.png' ;

const LeftSideBar = () => {
    return (
      <div className='bg-white'>
        <div className=' flex items-center justify-center h-[76px]'>
            <img src={logoFull} alt="logo"  className='h-[58px]'/>
        </div>
        <div>leftside bar</div>
      </div>
    );
};

export default LeftSideBar;