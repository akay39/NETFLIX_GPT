import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

 
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign in sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
          
           
              const { uid, email, displayName } = auth.currentUser;
      
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            
        
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
          //console.log(user);
         
          //
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    // sign In/ sign up
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={BG_LOGO}
          alt="backgound-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black  mx-auto my-36 right-0 left-0 bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl text-white py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text "
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg text-gray-600 bg-gray-950"
          />
        )}
        <input
          ref={email}
          type="text "
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg text-gray-400 bg-gray-950"
        />

        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full  rounded-lg   text-gray-400  bg-gray-950"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 text-white w-full rounded-md "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-4 my-6  text-md text-gray-600 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
