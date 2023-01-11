import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 p-7'>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name")}
                className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" {...register("email")}
                className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")}
                className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Forgot Password?</span>
                </label>
                </div>
                <input className='btn btn-primary w-full uppercase' value="Sign Up" type="submit" />
                <p>Already have an account? <Link to='/login' className="text-accent">Please Login</Link></p>
                <div className="divider">OR</div>
            </form>
            <button className='btn btn-outline w-full'>continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;