import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl font-bold text-center">Please Login</h2>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-primary uppercase">login...</button>
                <div className="divider">OR</div>
                <button 
                className="btn btn-outline uppercase"
                onClick={() => signInWithGoogle()}
                >Continue with google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;