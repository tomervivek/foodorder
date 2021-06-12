import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAYpqVUNckqMWGRJlBYPo127XxkxKR7w7M",
  authDomain: "react-http-52341.firebaseapp.com",
  databaseURL: "https://react-http-52341-default-rtdb.firebaseio.com",
  projectId: "react-http-52341",
  storageBucket: "react-http-52341.appspot.com",
  messagingSenderId: "120266037405",
  appId: "1:120266037405:web:5e5075df3904ed7e4e5c74",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
