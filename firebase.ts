import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVnJeLZGHn-qrDuyGLXtbjs47kWlQm03o",
  authDomain: "chatgpt-messenger-5483d.firebaseapp.com",
  projectId: "chatgpt-messenger-5483d",
  storageBucket: "chatgpt-messenger-5483d.appspot.com",
  messagingSenderId: "787376178994",
  appId: "1:787376178994:web:c6ebfaf63e49abaccab92b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
