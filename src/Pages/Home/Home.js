import React from 'react';
import Appointment from './MakeAppointment';
import Banner from './Banner';
import ConnectUs from './ConnectUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import ServiceCard from './ServiceCard';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceCard></ServiceCard>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <ConnectUs></ConnectUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;