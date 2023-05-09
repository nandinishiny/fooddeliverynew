import React from 'react'

const RestroMenuItems = (props) => {
    const {id,name,category,description,imageId,price,itemAttribute} =props.card.info;
    // console.log(props.card.info);
  return (
    <div className='restroMenuItemsList'>
      <div className='restroMenuItemsListInfo'>
        <h3>{name}</h3>
        <p>₹{price/100}</p>
        <p>{description}</p>
        <p>{itemAttribute.vegClassifier}</p>
      </div>
      <div className='restroMenuItemsListImg'>
        {imageId ?<img
         src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} alt="" />:null}
        <button>ADD</button>
      </div>
        

    </div>
  )
}

export default RestroMenuItems