// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV79evVNN_nIu6BpYuBZBFhf_gMCSRLeA",
  authDomain: "netflix-gpt-6b563.firebaseapp.com",
  projectId: "netflix-gpt-6b563",
  storageBucket: "netflix-gpt-6b563.appspot.com",
  messagingSenderId: "624654651087",
  appId: "1:624654651087:web:b7574619b93a798aca71ba",
  measurementId: "G-F5W0BD2W0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

