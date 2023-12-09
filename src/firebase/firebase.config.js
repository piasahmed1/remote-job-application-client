// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2_5BFMR5R1Ti5J5TbySMpIC51t7jNsjo",
  authDomain: "assignment-11-31b97.firebaseapp.com",
  projectId: "assignment-11-31b97",
  storageBucket: "assignment-11-31b97.appspot.com",
  messagingSenderId: "602581537196",
  appId: "1:602581537196:web:bb6613ccffd8089fc1ea09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;