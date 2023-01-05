import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Harry Tactor",
            img: people1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit vero repudiandae incidunt fugit ex architecto sequi et necessitatibus, temporibus possimus non culpa dolor magnam suscipit porro, at quod veritatis.",
            location: "California"
        },
        {
            _id: 2,
            name: "Angelina",
            img: people2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit vero repudiandae incidunt fugit ex architecto sequi et necessitatibus, temporibus possimus non culpa dolor magnam suscipit porro, at quod veritatis.",
            location: "Helsinki"
        },
        {
            _id: 3,
            name: "Jenifer",
            img: people3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit vero repudiandae incidunt fugit ex architecto sequi et necessitatibus, temporibus possimus non culpa dolor magnam suscipit porro, at quod veritatis.",
            location: "Brisbane"
        },
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                <h4 className="text-primary font-bold">Testimonial</h4>
                <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;