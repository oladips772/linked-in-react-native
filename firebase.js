/** @format */
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjTDawDhMWP5FhSkP_nSX2xd9vLmc6qzg",
  authDomain: "linked-in-clone-react-native.firebaseapp.com",
  projectId: "linked-in-clone-react-native",
  storageBucket: "linked-in-clone-react-native.appspot.com",
  messagingSenderId: "40380376858",
  appId: "1:40380376858:web:85303abb8e616996a7eea3",
  measurementId: "G-KLKHHHPTSZ",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { app, auth, storage, db };
