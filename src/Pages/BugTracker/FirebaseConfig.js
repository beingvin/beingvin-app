// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApq1YZVOWVam8b88ja1RuoG3Oxy1e1dIs",
  authDomain: "bugtracker-0101.firebaseapp.com",
  projectId: "bugtracker-0101",
  storageBucket: "bugtracker-0101.appspot.com",
  messagingSenderId: "565738728014",
  appId: "1:565738728014:web:0098d2f61f8c50b3b9f11f",
  measurementId: "G-96XCD0W1QQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
