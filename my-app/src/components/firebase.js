// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { getFirestore } from  'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhEjiVQY4U5SNcvpTtzVZODhdv6GJ26AY",
  authDomain: "reactproyect-36e6f.firebaseapp.com",
  projectId: "reactproyect-36e6f",
  storageBucket: "reactproyect-36e6f.appspot.com",
  messagingSenderId: "65484958467",
  appId: "1:65484958467:web:97274695a4bbb10561d736",
  measurementId: "G-W3DK8TXNSH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);