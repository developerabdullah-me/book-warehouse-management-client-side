// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxQ0QV_Va7PIkcqi_QrxKgtQKPsURlpcM",
  authDomain: "book-warehouse-43b5c.firebaseapp.com",
  projectId: "book-warehouse-43b5c",
  storageBucket: "book-warehouse-43b5c.appspot.com",
  messagingSenderId: "200613254424",
  appId: "1:200613254424:web:903a6d5c6227170ec7fa6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth