import React, { use, useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

    const [isSignInForm , setIsSignInForm] = useState(true)
    const [errorMesssage , setErrorMessage] = useState(null)

    //useNavigate
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //useRef
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick  = () => {
        // Validate the form data
        const message  = validateData(email.current.value , password.current.value)
        setErrorMessage(message)
        if(message){
          return
        }
           //Sign Up Logic
  if(!isSignInForm) 
    {
            createUserWithEmailAndPassword(
              auth, 
              email.current.value, 
              password.current.value )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // Update user Logic
updateProfile(
  user, {
  displayName: name.current.value, 
  photoURL: "https://yt3.ggpht.com/nkX0oHJM2akb-KEhYP3HfBT1wuZFyYJsK_cij33TBeEYv0Nys4T7oBm1rXd_V7JV0_AkuPw6Kg=s88-c-k-c0x00ffffff-no-rj"
}).then(() => {
  // Profile updated!
 const {uid ,email , displayName, photoURL} = auth.currentUser;
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }))
        
  navigate('/browse')
 
}).catch((error) => {
  // An error occurred
  setErrorMessage(error.message)
});

    console.log(user)
    navigate("/browse")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "_" +errorMessage)
  });
          }
          else {
//Sign In
signInWithEmailAndPassword(auth, email.current.value, 
  password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "_" +errorMessage)
  });

          }
        
    }
  return ( 
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg' alt='backgound-logo'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input 
            type='text' 
            ref={name}
            placeholder='Full Name' 
            className='p-4 my-2 w-full bg-gray-700'>
            </input>}
            <input 
            ref={email}
            type='text' 
            placeholder='Email Address' 
            className='p-4 my-2 w-full bg-gray-700'>
            </input>
            <input 
            type='password' 
            ref={password}
            placeholder='Password' 
            className='p-4 my-2 w-full bg-gray-700'>
            </input>
           <p className='text-red-500 font-bold text-lg py-2'>{errorMesssage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{ isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}</p>
        </form>

    </div>
  )
}

export default Login