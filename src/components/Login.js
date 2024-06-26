import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignUpForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignUpForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgound-logo"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black  mx-auto my-36 right-0 left-0 bg-opacity-80 rounded-md">
        <h1 className="font-bold text-3xl text-white py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text "
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg text-gray-600 bg-gray-950"
          />
        )}
        <input
          type="text "
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg text-gray-600 bg-gray-950"
        />

        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full  rounded-lg text-grayy-600  bg-gray-950"
        />
        <button className="p-4 my-6 bg-red-700 text-white w-full rounded-md ">
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
