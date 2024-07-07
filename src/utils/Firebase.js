// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATN1zwbW1I-lv66F4v7KPJERRT2AeHyBo",
  authDomain: "netflixgpt-8a0e2.firebaseapp.com",
  projectId: "netflixgpt-8a0e2",
  storageBucket: "netflixgpt-8a0e2.appspot.com",
  messagingSenderId: "88012368370",
  appId: "1:88012368370:web:3e7bff832818effc02a36b",
  measurementId: "G-E03GKV2RMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();