import React, { useEffect, useState } from 'react'
import '../styles/restroDetails.css'
import RestroMenu from './RestroMenu';
import {useParams} from 'react-router-dom';


const RestroDetails = () => {
    const [restroDetails,setResDetails] = useState([]);
    const [resMenu,setResMenu] = useState([]);
    const {resId} = useParams();   
  useEffect(()=>{
    getRestroInfo();

  },[]);
  const getRestroInfo = async()=>{
    // const resId = 102792;
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.6818877&lng=77.6005911&restaurantId=${resId}&submitAction=ENTER`);
    const jsonData = await data.json();
    setResDetails( jsonData?.data?.cards[0]?.card?.card?.info);
    let cards = jsonData?.data?.cards;
    for(let a in cards){
    if((cards[a].groupedCard)){
   
      setResMenu(jsonData?.data?.cards[a]?.groupedCard?.cardGroupMap.REGULAR.cards);
      break;
    }
  }
  /*for (let card of cards) {
    if (card.groupedCard) {
      setResMenu(card.groupedCard.cardGroupMap.REGULAR.cards);
      break;
    }
  }*/
    // setResMenu(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards)
      

  }
  
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