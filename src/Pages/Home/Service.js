import React from 'react';

const Service = ({img, cardTitle, details}) => {
    return (
        <>
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={img} alt="Album" /></figure>
  <div className="card-body">
    <h2 className="text-center text-xl">{cardTitle}</h2>
    <p className='text-center'>{details}</p>
  </div>
</div>
</>
    );
};

export default Service;