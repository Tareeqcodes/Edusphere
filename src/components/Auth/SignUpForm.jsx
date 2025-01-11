import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useAuth } from '../../../app/context/Authcontext';
import Spinner from '../Spinner';
import { account } from '../../../app/config/appwrite';

const ErrorMessages = ({ errors }) => ( 
  <ul className="text-red-500 text-sm space-y-1">
    {errors.map((error, index) => (
      <li key={index}>{error}</li>
    ))}
  </ul>
);

const SignUpForm = ({ onSwitch }) => {
  const userRef = useRef();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState([]);
  const { signUp } = useAuth();
  // const [role, setRole] = useState("");


  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect( () => {
  setErrMsg('');
}, [email, password, confirmPassword]);

    const validateForm = () => {
    const validationErrors = [];
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


    if (!emailPattern.test(email)) {
      validationErrors.push('Please enter a valid email address.');
    }

    if (!passwordPattern.test(password)) {
      validationErrors.push('Password must be 8-24 characters and include uppercase, lowercase, numbers, and a special character (!@#$%).');
    }
    if (password !== confirmPassword) {
      validationErrors.push('Passwords do not match');
    } 
    // if (!role) {
    //   validationErrors.push('Please select a role!');
    // }
   
    setErrMsg(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!validateForm())
      setLoading(true)
    setErrMsg([]);
  
    try {
      await signUp(email, password);
    } catch (error) {
      const errorMessage = error.message || 'Signup failed';
      
      if(errorMessage.includes('invalid `password` Password must be between 8 and 265 characters long, and should not be one of the commonly used password. ')){
        setErrMsg(['invald email or password']);
      } else if(errorMessage.includes(' A user with the same id, email, or phone already exists in this project.')){
        setErrMsg(['This email is already in used']);
      }
       else{
        setErrMsg([errorMessage]);
      }   
    }
    finally {
      setLoading(false);
    }
  };
  
  
  const googleSignUp = () => {
    try {
         account.createOAuth2Session(
            'google',
            'http://localhost:3000',
            'http://localhost:3000/*'
        );
    } catch (error) {
        console.log(error);
    }
  };
 
  return (
    <div className='flex items-center  min-w-96 justify-center'>
      <div className='bg-white shadow-xl font-poppins rounded-lg p-4 w-full mt-1'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-2xl font-bold font-roboto text-center text-black mb-1'>Sign Up</h2>

          
           <div className='mt-5 font-poppins'>
          <button className='bg-slate-50 w-full rounded-lg shadow-md p-3 text-center'>Sign Up with Email</button>
          <p className='text-center py-2'>Or</p>
          <button onClick={googleSignUp} className='flex w-full items-center rounded-lg shadow-md p-4 text-center justify-center gap-3 bg-slate-50'>
                    <span className='text-xl '><FaGoogle /></span>
                    <h3 className=' '> Sign Up with Google</h3>
                    </button>
          </div>
          {errMsg.length > 0 &&  <ErrorMessages errors={errMsg} />}
          <div className='mb-2 mt-5'>
            <label htmlFor='email' className='block text-sm text-black font-bold mb-2'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='border rounded w-full py-2 px-3'
              autoComplete='on'
              ref={userRef} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='relative mb-2'>
            <label htmlFor='password' className='block text-sm text-black font-bold mb-2'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              className='border rounded w-full py-2 px-3'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-11 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className='relative mb-6'>
            <label htmlFor='confirm-password' className='block text-sm text-black font-bold mb-2'>Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirm-password'
              placeholder='Confirm Password'
              className='border rounded w-full py-2 px-3'
              autoComplete='new-password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-11 cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {/* <div className="mb-2">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                    Select your role
              </option>
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
              
            </select>
          </div> */}
          <div className='flex flex-col gap-5'>
        
            {loading ? (
               <div className="flex justify-center">
               <Spinner /> {/* Show the spinner when loading */}
             </div>
            ) : (
              <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-400'>Sign Up</button>
            )
             }
            <p className='text-black'>
              Already have an account?
              <span onClick={onSwitch} className="text-green-600 cursor-pointer ml-3">Login</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
