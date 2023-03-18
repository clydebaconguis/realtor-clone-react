// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBinjISzA8q6HLf6Iqc3UFIOibiL80KzfQ",
  authDomain: "realtor-clone-react-57f85.firebaseapp.com",
  projectId: "realtor-clone-react-57f85",
  storageBucket: "realtor-clone-react-57f85.appspot.com",
  messagingSenderId: "474003019239",
  appId: "1:474003019239:web:0c124aafa53c0d768b5942"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();