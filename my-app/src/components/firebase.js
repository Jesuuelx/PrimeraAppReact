// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { getFirestore } from  'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcpLKppSTNe2ek6royqhTQzfAFay7C3GI",
  authDomain: "react-2c716.firebaseapp.com",
  projectId: "react-2c716",
  storageBucket: "react-2c716.appspot.com",
  messagingSenderId: "932523367499",
  appId: "1:932523367499:web:a2737f72d88d10ddd901ce",
  measurementId: "G-D87MD6RZQC"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);