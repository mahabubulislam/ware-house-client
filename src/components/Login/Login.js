import React from 'react';
import { useForm } from "react-hook-form";


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-full md:w-1/2 mx-auto my-10'>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" {...register("email", { required: true })} />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password"  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" {...register("password", { required: true })} />
                </label>
                <input />
                <input className='bg-green-300 p-2 rounded-md block mx-auto' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;