// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCepRPRzZZ_Yald5L6Sq9P_WycIBahhpB8",
  authDomain: "brand-shop-681da.firebaseapp.com",
  projectId: "brand-shop-681da",
  storageBucket: "brand-shop-681da.appspot.com",
  messagingSenderId: "408817706481",
  appId: "1:408817706481:web:a5a3fabb4540f16db89050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;