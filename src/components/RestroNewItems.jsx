import React,{useState} from 'react'
import RestroMenuItems from './RestroMenuItems'
import {IoIosArrowUp}  from 'react-icons/io';
import {IoIosArrowDown}  from 'react-icons/io';


const RestroNewItems = ({title,itemCards}) => {
    const [openButton, setOpenButton] = useState(1);
    const buttonChange = (val) => setOpenButton(val);
  return (
    <div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <h3> {title} &#40;{itemCards.length}&#41;</h3>
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
                </div> )}
    </div>
   
  )
}

export default RestroNewItems
