import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p>
                    {slots.length > 0
                    ? <span>{slots[0]}</span> 
                    : <span>Try Another Date</span>

                    }
                </p>
                <div className="card-actions justify-center"> 
                <label 
                htmlFor="booking-modal" 
                className="btn btn-primary"
                onClick={()=> setTreatment(service)}
                disabled={slots.length === 0}
                >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;