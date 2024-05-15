// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByK4RDkjKf18WEUQ4GGb_Z5R1jpqaY2kY",
  authDomain: "course-management-a4659.firebaseapp.com",
  projectId: "course-management-a4659",
  storageBucket: "course-management-a4659.appspot.com",
  messagingSenderId: "791845098522",
  appId: "1:791845098522:web:c63bdb3ead0a211ec82da3",
  measurementId: "G-MJQRFS6MDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage= getStorage(app);
export {storage};