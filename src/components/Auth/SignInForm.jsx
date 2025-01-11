import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import { toast } from 'react-toastify';
import { account } from '../../../app/config/appwrite';
import Spinner from '../Spinner';


const SignInForm = ({onSwitch}) => {
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [ loading, setLoading] = useState(false);
  const { signIn } = useAuth();


  
  useEffect(() => {
    userRef.current.focus();
}, []) 


  const handleSignIn = async (e)=>{
   e.preventDefault();
 
   try {
     await signIn(email, password);
     setLoading(true)
    toast.success('Logged in successfully');
    console.log('signIn succefully')
   } catch (error) {
    console.log('error');
   } finally {
     setLoading(false)
   }
}

  
const googleSignIn = () => {
  try {
       account.createOAuth2Session(
          'google',
          'http://localhost:3000',
           ' http://localhost:3000/error'
      );
      toast.success('Logged in successfully');
      setLoading(true)
  } catch (error) {
    toast.error('Failed to sign in');
      console.log(error);
  }
};

if (loading) {
  return (
    <div className="flex items-center justify-center">
      <Spinner />
    </div>
  );
}

  return (
    <div className='flex items-center justify-center text-justify'>
    <div className='bg-white font-poppins text-black shadow-xl rounded-lg p-6 w-full min-w-96 mt-20'>
      <form onSubmit={handleSignIn}>
        <h2 className='text-2xl font-bold text-center font-roboto text-gray-800 mb-6'>
          Login
        </h2>
 
        <div className='mt-5 mb-3 font-poppins'>
          <button className='bg-slate-50 w-full rounded-lg shadow-md p-3 text-center'>Sign In with Email</button>
          <p className='text-center py-2'>Or</p>

          <button onClick={googleSignIn} className='flex items-center rounded-lg w-full shadow-md p-4 text-center justify-center gap-3 bg-slate-50'>
          <span className='text-xl '><FaGoogle /></span>
          <h2 className=' ' > Sign In with Google</h2>
          </button>
            
          </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-bold mb-2'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            name='email'
            className='border rounded w-full py-2 px-3'
            autoComplete='email'
            required
            ref={userRef}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='relative mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='password'
            name='password'
            className='border rounded w-full py-2 px-3'
            autoComplete='password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
        </div>

        <div className='flex flex-col gap-5'>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
          >
            Login
          </button>
          <h3 className='text-center'>Forget password</h3>
          <div className='border border-b-2 border-orange-500'></div>
          <p>
            Don't have an account?{''}
            <span onClick={onSwitch} className="text-blue-500 cursor-pointer p-3">
                Sign up.
              </span>
          </p>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignInForm