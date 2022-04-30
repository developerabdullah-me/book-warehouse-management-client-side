// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKzmz7qzc_OPwlh_MabHHGI-c4X7MwIXY",
  authDomain: "book-warehouse-f76e8.firebaseapp.com",
  projectId: "book-warehouse-f76e8",
  storageBucket: "book-warehouse-f76e8.appspot.com",
  messagingSenderId: "343994578352",
  appId: "1:343994578352:web:96d17956ae89a83a205275",
  measurementId: "G-6D42JEJH38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);