import { useEffect, useState } from "react";
import { FETCH_URL } from "../components/Config";


const useRestroMenu = (resId)=>{
  const [restroDetails,setResDetails] = useState([]); 
  const [resMenu,setResMenu] = useState([]);
      
  useEffect(()=>{
    getRestroInfo();

  },[]);
  async function getRestroInfo(){
    // const resId = 102792;
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.6818877&lng=77.6005911&restaurantId=${resId}&submitAction=ENTER`);
    const data = await fetch(FETCH_URL+"&restaurantId="+resId+"&submitAction=ENTER");

    const jsonData = await data.json();
    setResDetails( jsonData?.data?.cards[0]?.card?.card?.info);
    let cards = jsonData?.data?.cards;
    for(let a in cards){
    if((cards[a].groupedCard)){
   
      setResMenu(jsonData?.data?.cards[a]?.groupedCard?.cardGroupMap.REGULAR.cards);
      break;
    }
  }
};
return [restroDetails,resMenu] ;
}
export default useRestroMenu;
