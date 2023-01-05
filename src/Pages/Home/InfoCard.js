import React from 'react';

const InfoCard = ({img, cardTitle, details, bgClass}) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl p-2 ${bgClass}`}>
    <figure>
        <img src={img} alt="album" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>{details}</p>
  </div>
</div>
        </div>
    );
};

export default InfoCard;