import React from 'react'
import { useState } from 'react'
import SignInForm from '../components/Auth/SignInForm'
import SignUpForm from '../components/Auth/SignUpForm'

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className='flex h-screen my-5 lg:my-20 justify-center text-justify'>
         {isSignIn ? (
        <SignInForm onSwitch={() => setIsSignIn(false)} />
      ) : (
        <SignUpForm onSwitch={() => setIsSignIn(true)} />
      )}
    </div>
  )
}

export default Auth