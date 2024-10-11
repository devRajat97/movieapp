// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADgjJYQ7jBKjO9TgLT88etr_SLl-sRgDY",
  authDomain: "movieapp-fce51.firebaseapp.com",
  projectId: "movieapp-fce51",
  storageBucket: "movieapp-fce51.appspot.com",
  messagingSenderId: "901924484416",
  appId: "1:901924484416:web:a99b02fefa7639169d76a5",
  measurementId: "G-HRFMWVBKQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
