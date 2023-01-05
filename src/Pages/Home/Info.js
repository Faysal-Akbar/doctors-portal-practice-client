import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import contact from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCard img={clock} cardTitle="Opening Hours" details="Everyday at 8:00:00 AM" bgClass="bg-primary"></InfoCard>
            <InfoCard img={marker} cardTitle="Our Locations" details="Hospital Road, Chattogram" bgClass="bg-accent"></InfoCard>
            <InfoCard img={contact} cardTitle="Contact Us" details="+8801876391114" bgClass="bg-primary"></InfoCard>
        </div>
    );
};

export default Info;