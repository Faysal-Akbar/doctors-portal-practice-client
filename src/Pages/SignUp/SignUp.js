import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useState } from 'react';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [ signUpError, setSignUpError ] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Created Successfully');
            const userInfo = {
                displayName: data.name,
            }
            updateUser(userInfo)
            .then(()=> {})
            .catch(error => console.log(error))
        })
        .catch(error => {
            const errorMessage = error.message;
            setSignUpError(errorMessage);
        })
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
                <input type="text" {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" {...register("email", { required: "Email is required" })}
                className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { 
                    required: "Password is required",
                    minLength: { value: 6, message:"Password must be 6 characters or longer"},
                    // pattern: {value: /(?=.*[A-Z](?=.*[!@#$&*])(?=.*[0-9])/,  message: 'Password must be strong'}
                })}
                className="input input-bordered w-full max-w-xs" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <label className="label">
                    <span className="label-text">Forgot Password?</span>
                </label>
                </div>
                {signUpError && <p className='text-red-600'>{signUpError}</p>}
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