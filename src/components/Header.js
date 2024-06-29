import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_LOGO } from "../utils/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
  const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return ()=> unSubscribe();
  }, []);
  return (
    <div className=" flex w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img
        className="w-44"
        src={LOGO} alt="logo"
      />
      <div className="flex p-2">
        <img
          src={USER_LOGO }
          alt="user-logo"
          className="w-12 h-12 "
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default Header;
