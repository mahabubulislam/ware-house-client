import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"
import { useNavigate } from 'react-router-dom';
import Social from '../SocialLogin/Social';

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const onSubmit = data => {
        const { email, password } = data
        createUserWithEmailAndPassword(email, password)
    };
    const navigate = useNavigate()
    if (user)
        (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        )
    return (
        <div className='w-full md:w-1/2 mx-auto my-10'>
            <h2 className='text-3xl text-center text-green-400 my-10 underline underline-offset-4'>Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" {...register("email", { required: true })} />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" {...register("password", { required: true })} />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Confirm Password
                    </span>
                    <input type="password" className="my-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="confirm password" {...register("password", { required: true })} />
                </label>
                <p>Already have an account? <span className='text-blue-700 cursor-pointer' onClick={() => navigate('/login')}>Login</span></p>
                <input className='bg-green-300 p-2 rounded-md block mx-auto my-1 ' type="submit" value="Sign up" />
            </form>
            <Social></Social>

        </div>
    );
};

export default SignUp;