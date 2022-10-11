import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAg0aRi1RyssbUdXLRY6_V12ohxJeozNg",
  authDomain: "storenails-31022.firebaseapp.com",
  databaseURL: "https://storenails-31022-default-rtdb.firebaseio.com",
  projectId: "storenails-31022",
  storageBucket: "storenails-31022.appspot.com",
  messagingSenderId: "939924265531",
  appId: "1:939924265531:web:9929e7cac910a8b4749a1e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const storage =  getFirestore(app);
export const auth = getAuth(app);