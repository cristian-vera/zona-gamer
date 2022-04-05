import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7yq7l60qSrt1Qo2WsIC-7oT8zuoFECw",
  authDomain: "zona-gamer-app.firebaseapp.com",
  projectId: "zona-gamer-app",
  storageBucket: "zona-gamer-app.appspot.com",
  messagingSenderId: "1002501760653",
  appId: "1:1002501760653:web:88f50177b5f15b88c3a4c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);

export default dataBase;