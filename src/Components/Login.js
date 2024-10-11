import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validation } from "../utils/images/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { userImage } from "../utils/const";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const Test = () => {
    setHaveAnAccount(!haveAnAccount);
  };

  const HandleForm = (e) => {
    e.preventDefault();
    let message = Validation(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (haveAnAccount) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: userName.current.value,
            photoURL: userImage,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  displayName: displayName,
                  email: email,
                  uid: uid,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} ${errorMessage}`);
        });
    } else {
      // UserSignIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => HandleForm(e)}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-4">
          {haveAnAccount ? "Sign In" : "Sign Up"}
        </h1>
        {haveAnAccount && (
          <input
            ref={userName}
            placeholder="Full Name"
            type="text"
            className=" p-4 my-4 w-full rounded-lg bg-transparent border border-inherit "
          />
        )}

        <input
          ref={email}
          placeholder="Email"
          type="text"
          className=" p-4 my-4 w-full rounded-lg bg-transparent border border-inherit "
        />
        <input
          ref={password}
          placeholder="password"
          type="password"
          className="p-4 my-4 w-full rounded-lg bg-transparent border border-inherit"
        />
        <h1 className="text-red-800 font-bold text-xl">{errorMessage}</h1>
        <button className="  p-4 my-6 w-full bg-red-600 rounded-lg ">
          {haveAnAccount ? "Sign In" : "Sign Up"}
        </button>
        <h1 className="text-xl font-bold mb-4 text-gray-400 text-center">OR</h1>
        <button className="p-4  w-full bg-opacity-40 bg-gray-600 rounded-lg font-bold  ">
          Use a sign-in-code
        </button>
        <h3 className="text-center my-4 cursor-pointer font-bold">
          Forgot password?
        </h3>
        {haveAnAccount ? (
          <p className="my-5">
            alredy have an account?
            <span className="font-bold cursor-pointer" onClick={() => Test()}>
              Sign Up
            </span>{" "}
          </p>
        ) : (
          <p className="my-5">
            {" "}
            New to Netflix?{" "}
            <span className="font-bold cursor-pointer" onClick={() => Test()}>
              Sign up now.
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
