import React, { useEffect } from "react";
import Logo from "../utils/images/logo.png";
import { userIcon } from "../utils/const";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()

  const handleRemove = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/errorpage");
      });
  };

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user
        dispatch(addUser({
          uid : uid, email : email, displayName : displayName
        }))
      navigate("/Browser")
      } else {
        
        dispatch(removeUser())
       navigate("/")
      }
    });
    return () => unsubscribe()
  },[])


  return (
    <div className=" absolute w-screen px-48 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img src={Logo} alt="logo" className=" w-44" />
      {user && (
        <>
        <div>
        <img
          src={userIcon}
          alt="user icon"
          className="w-20 h-20 p-2"
          onClick={() => handleRemove()} />
          <h1>{user?.displayName}</h1>
          </div>
          </>
      )}
    </div>
  );
};

export default Header;
