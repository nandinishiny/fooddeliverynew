import React, { useEffect, useState } from 'react'
import '../styles/restroDetails.css'
import RestroMenu from './RestroMenu';
import {useParams} from 'react-router-dom';
import useRestroMenu from '../utils/useRestroMenu';


const RestroDetails = () => {

  const {resId} = useParams(); 
  // const [restroDetails,setResDetails] = useState([]); 
  const [restroDetails,resMenu] = useRestroMenu(resId);
  
  // const restroDetails = restroData.restroDetails;
  // const resMenu = restroData.resMenu;
  
  
  return (
    <div className='restroDetailsFull'>
      <div className='restroDetailsAdjust'>
        <div className='restroInfo'>
          <div>
            <p>RestroID : {restroDetails?.id}</p>
            <h1>{restroDetails?.name} </h1>
            <p>{[restroDetails?.cuisines].join(',')}. </p>
            <p>{restroDetails?.city} </p>
          </div>
          <div>
            <p> <b>★ {restroDetails.avgRating}</b></p>
             <p>{restroDetails.totalRatingsString}</p>
          </div>
          </div>
        
        <div className='restroMenuFull'>
          <button>VegOnly</button>
          <h1>Menu</h1>
          <div className='restroMenuItems'>{resMenu.map((card,index)=>{
             if(index>0&& index<10){return <RestroMenu key={index} {...card}/>}
          })}
          </div>  
        </div>    
      </div>
    </div>
  )
}

export default RestroDetails
