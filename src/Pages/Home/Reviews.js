import React from 'react';

const Reviews = ({review}) => {
    return (
    <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <div className="card-body">
    <p>{review.review}</p>
    <div className="flex items-center">
    <div className="avatar">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
    <img src={review.img} alt=""/>
  </div>
</div>
<div className=''>
    <h2 className='text-xl'>{review.name}</h2>
    <h2>{review.location}</h2>
</div>
    </div>
  </div>
</div>
    </div>
    
    );
};

export default Reviews;