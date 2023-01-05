import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null)
        console.log(slot, name);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-primary">Booking for: {name}</h3>
            <form onSubmit={handleBooking} className='mt-5 grid grid-cols-1 gap-2'>
                <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                <select name='slot' class="select select-bordered w-full max-w-xs">
                    {
                        slots?.map(slot => <option value={slot}>{slot}</option>)
                    }
                </select>
                <input type="text" name="name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                <input type="number" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
            </form>
                <div className="modal-action">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;