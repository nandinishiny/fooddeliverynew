import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import '../styles/body.css';
import RestraurantCard from "./RestraurantCard";
import useRestro from "../utils/useRestro";
import Search from "./Search";
import useOnline from "../utils/useOnline";




const Body = ()=>{
    const [restroList,filterRestroList,searchText] = useRestro();
    const isOnline = useOnline();
    if(!isOnline){
        return <h1> Offline, Please check your Internet Connection</h1>
    }

    if(!restroList) return null;
    return restroList.length === 0?<ShimmerUI/>: (
        <>
            <Search/>
            <div className="restroList">
            {filterRestroList.length === 0
            ?<h1>No restaurants found with the name or item with name {searchText}</h1> 
            :filterRestroList.map((card)=><RestraurantCard resId ={card?.data?.id} key={card?.data?.id} {...card.data}/>)}
            </div>
        </>

);  
}
export default Body;