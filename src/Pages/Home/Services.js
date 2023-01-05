import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    return (
        <>
        <div className='text-center my-20'>
            <h1 className='text-primary font-bold'>OUR SERVICES</h1>
            <h1 className='text-3xl'>Services We Provide</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Service img={fluoride} cardTitle="Flouride Treatment" details="Dentists are very productive for you, they will treat your dental treatment. Dent is important for you."></Service>
            <Service img={cavity} cardTitle="Cavity Filling" details="Dentists are very productive for you, they will treat your dental treatment. Dent is important for you."></Service>
            <Service img={whitening} cardTitle="Theeth Whitening" details="Dentists are very productive for you, they will treat your dental treatment. Dent is important for you."></Service>
        </div>
        </>
    );
};

export default Services;