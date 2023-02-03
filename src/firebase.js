// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkzmnpdUYr2DqfYUlvFkE2PzNoAYp5NW0",
  authDomain: "myroute-ed639.firebaseapp.com",
  databaseURL: "https://myroute-ed639-default-rtdb.firebaseio.com",
  projectId: "myroute-ed639",
  storageBucket: "myroute-ed639.appspot.com",
  messagingSenderId: "777311169107",
  appId: "1:777311169107:web:480d83b5b097bcdab0f4a6",
  measurementId: "G-MC5CV5TNG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);