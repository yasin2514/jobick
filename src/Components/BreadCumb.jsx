import React from 'react';

const BreadCumb = ({text1,text2}) => {
    return (
        <div className='bg-white w-full px-4 py-3 text-xl rounded-md'>
            <span  className='text-orange-600'>{text1}/</span ><span className='text-gray-600'>{text2}</span>
        </div>
    );
};

export default BreadCumb;