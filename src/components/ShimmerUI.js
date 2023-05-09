import React from 'react';
import '../styles/shimmerUI.css';

const ShimmerUI = () => {
  return (
    <>
   
    <div className='shimmerUI'>
      {/* { new Array(20).fill("").map((index)=>(<div className='shimmerCard'key={index}></div>))} */}
      {Array(20).fill("").map((card,index)=><div className='shimmerCard'key={index}></div>)}
      <div className='shimmerUIRight'></div>
    </div>
    </>
  )
}

export default ShimmerUI