import React from 'react';



import { FcEditImage } from "react-icons/fc";

function FeedbackItem({ item }) {
  return (
    <div className='card'>
      <div className='card-wrapper'>
        <h2 style={{color:"black"}}>{item.text}</h2>

        <div className='edit'>
        <FcEditImage />


        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;
