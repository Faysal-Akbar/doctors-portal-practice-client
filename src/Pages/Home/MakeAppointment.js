import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center my-20">
        <div className='flex-1 hidden lg:block'>
            <img className='mt-[-150px]' src={doctor} alt="" />
        </div>
        <div className='flex-1 p-2'>
            <h1 className='text-primary font-bold mb-2'>Appointment</h1>
            <h1 className='text-4xl text-white mb-2'>Make an Appointment Today</h1>
            <p className='text-white mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minus a numquam, corporis officiis, consectetur ea odit, fugiat quam adipisci perspiciatis eos non ipsa officia architecto fuga. Aspernatur, sint impedit perspiciatis quis doloribus mollitia, at expedita natus aliquam nostrum quo? Doloribus obcaecati optio tempore culpa nam, exercitationem fugit laboriosam sapiente.</p>
            <button className='btn btn-primary'>Get Started</button>
        </div>
        

        </section>
    );
};

export default Appointment;