// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn4RgfkrNwqS0aBsBM6RVmvCzJtNQl3tM",
  authDomain: "netflixgpt-83d89.firebaseapp.com",
  projectId: "netflixgpt-83d89",
  storageBucket: "netflixgpt-83d89.firebasestorage.app",
  messagingSenderId: "416218925826",
  appId: "1:416218925826:web:15f779f63731d736fb101b",
  measurementId: "G-9MTXGZP2NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()