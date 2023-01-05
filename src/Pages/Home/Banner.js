import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae velit sed vero magnam quo cumque numquam soluta? Aperiam sapiente beatae accusantium </p>
      <button className="btn btn-primary font-bold">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;