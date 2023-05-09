import React, { useState } from "react";
import RestroMenuItems from "./RestroMenuItems";
import RestroNewItems from "./RestroNewItems";
import {IoIosArrowUp}  from 'react-icons/io';
import {IoIosArrowDown}  from 'react-icons/io';




const RestroMenu = (props) => {
    const { title, itemCards } = props?.card?.card || {};
    const categoryCards = props?.card?.card?.categories ||{};
    console.log(categoryCards);

    const [openButton, setOpenButton] = useState(1);
    const buttonChange = (val) => setOpenButton(val);
  
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
            {Array.isArray(itemCards) && (
                <h2>
                {title} &#40;{itemCards.length}&#41;
                </h2>
            )} 
            {Array.isArray(itemCards)  && (
                openButton === 1 ? (
                <button onClick={() => buttonChange(-1)} className="MenuArrowButton">
                    <IoIosArrowUp />
                </button>
                ) : (
                <button onClick={() => buttonChange(1)} className="MenuArrowButton">
                    <IoIosArrowDown />
                </button>
                )
            )}
            </div>
            {openButton === 1 && (
                <div className="MenuItemsCategory">
                    {Array.isArray(itemCards) && (
                    <div>
                        {itemCards.map((card, index) => {
                        return <RestroMenuItems key={index} {...card} />;
                        })}
                    </div>
                    )}
                </div> 
              
            )}
            {Array.isArray(categoryCards)&&(
                <div style={{margin:"0 1rem"}}>
                    <h2>{title}</h2>    
                    <div className="restroNewItemsList">
                        {
                            categoryCards.map((card,index)=>{
                                return <RestroNewItems key={index} {...card}/>
                            })

                        }
                    </div>
                </div>)}
           
        </div>
    );
  };
  
  export default RestroMenu;