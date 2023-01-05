import React from 'react';
import bg from '../../assets/images/bg.png';

const ConnectUs = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className="mt-20">
        <div className="hero">
  <div className="hero-content">
    <div className="card shadow-2xl">
    <div>
                <h4 className="text-primary text-center">Contact Us</h4>
                <h4 className="text-3xl text-center">Stay Connected with Us</h4>
            </div>
      <div className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Email Address" className="input input-bordered bg-white" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" className="input input-bordered bg-white" />
        </div>
        <textarea className='rounded' placeholder='Message' name="Message" id="" cols="50" rows="6"></textarea>
        <div className="mt-6 text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
    );
};

export default ConnectUs;