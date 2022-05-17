import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (

        <div>
            <div className='flex justify-center items-center'>
                <div className="bg-green-700 w-28 h-px mx-3"></div>
                <p>or</p>
                <div className="bg-green-700 w-28 h-px mx-3"></div>
            </div>
            <div className='flex justify-evenly items-center w-1/2 mx-auto bg-green-100 p-1 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-7 h-7 block" style={{ color: '#ea4335' }}> <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                <button  onClick={() => signInWithGoogle()}>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Social;