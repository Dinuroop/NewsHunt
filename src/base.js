// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi-a86q-5g05ToS8jgOQuLtL-eZwS4D4U",
  authDomain: "newshunt-3b645.firebaseapp.com",
  projectId: "newshunt-3b645",
  storageBucket: "newshunt-3b645.appspot.com",
  messagingSenderId: "297481911839",
  appId: "1:297481911839:web:ab9706d3143aa07b009f2a",
  measurementId: "G-5LZP8YSL0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;