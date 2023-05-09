import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
// import Search from "./Search";
import '../styles/body.css';
import { config } from "./Config";
import RestraurantCard from "./RestraurantCard";
// export const {cards} =config?.data?.data; 
const filterData = (searchText,restroList)=>{
    const filteredData =restroList.filter((restro)=>{
        return (restro.data.name.toLowerCase().includes(searchText.toLowerCase())||
    restro.data.cuisines.some(cuisine =>cuisine.toLowerCase().includes(searchText.toLowerCase())))
    });
    return filteredData;
} 

const Body = ()=>{
    const [searchText,setSearchText] = useState('');
    const [restroList, setRestroList] = useState([]); 
    const [filterRestroList, setFilterRestroList] = useState([]); 
    useEffect(()=>{
        getRestro();

    },[]); 
    const getRestro = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6818877&lng=77.6005911&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        setFilterRestroList(jsonData?.data?.cards[2]?.data?.data?.cards);
        setRestroList(jsonData?.data?.cards[2]?.data?.data?.cards);
    }  
    return restroList.length === 0?<ShimmerUI/>: (
        <>
         <div className="searchRestro">
            <input type="text" 
            placeholder="Search"
            value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button 
            onClick={()=>{
                const data = filterData(searchText,restroList);
                setFilterRestroList(data);  } } >
                Search
            </button>
        </div>
        <div className="restroList">
           
        {filterRestroList.length === 0
        ?<h1>No restaurants found with the name or item of {searchText}</h1> 
        :filterRestroList.map((card)=><RestraurantCard resId ={card?.data?.id} key={card?.data?.id} {...card.data}/>)}
        </div>
        </>

    );  
}
export default Body;