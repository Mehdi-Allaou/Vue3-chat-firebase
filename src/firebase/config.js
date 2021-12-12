import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDx0t2c59RkkCMXA7fXCOIzPgKDfjqlfwI",
  authDomain: "vue-chat-5507a.firebaseapp.com",
  projectId: "vue-chat-5507a",
  storageBucket: "vue-chat-5507a.appspot.com",
  messagingSenderId: "1096312299067",
  appId: "1:1096312299067:web:987446f8d781fe88cd061e"
};

initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth()

export { db, auth }