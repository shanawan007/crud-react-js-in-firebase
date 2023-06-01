import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/database';
import 'firebase/compat/storage';
import {getStorage} from 'firebase/storage'
import { getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey:   "AIzaSyCDIMgTQ8xZwkm46zIHjjDFJUksIpGlIIs",
    authDomain: "school-82b1d.firebaseapp.com",
    databaseURL: "https://school-82b1d-default-rtdb.firebaseio.com",
    projectId: "school-82b1d",
    storageBucket: "school-82b1d.appspot.com",
    messagingSenderId: "358192458048",
    appId: "1:358192458048:web:23dda871e52eb7ae4572a5"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  export default app.database().ref();
  export const storage = getStorage(app);
  export const auth = getAuth();
  export { database };
  const database = getDatabase(app); 