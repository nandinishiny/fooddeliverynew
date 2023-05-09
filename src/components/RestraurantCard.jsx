import React from "react"
import { Link } from "react-router-dom"
const RestraurantCard = ({cloudinaryImageId,name,cuisines,avgRating,resId})=>{
    return(
        
       
        <Link to={`/restaurant/${resId}`}><div className="card">
                <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} alt="" />
                <h2>{name}</h2>
                <h4>{cuisines.join(',')}</h4>
                <h5>{avgRating} stars</h5>
                </div>
                </Link>
    )}
export default RestraurantCard