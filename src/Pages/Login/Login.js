import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // if(user){
    //     console.log(user);
    // }
    return (
        <>
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { 
                        required: "Email Address is required" }
                    )} 
                    type="text" 
                    className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div>
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", { 
                        required: "Password is required",
                        minLength: {value: 6, message: 'Password must be 6 characters or longer'} 
                        }
                        )}
                        type="password" 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <label className="label">
                        <span className="label-text">Forgot Password?</span>
                    </label>
                    </div>
                    <input className='btn btn-primary w-full' value="LOGIN" type="submit" />
                </form>
                <p>New to Doctors Portal? <Link to="/signup" className='text-accent'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline uppercase w-full">continue with google</button>
            </div>
        </div>
        </>
    );
};

export default Login;