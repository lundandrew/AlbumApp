import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDkjBrlf8yzdaiWQcQtV9KHDGP7sVhRIi8",
  authDomain: "albumapp-1ff2b.firebaseapp.com",
  databaseURL: "https://albumapp-1ff2b.firebaseio.com",
  projectId: "albumapp-1ff2b",
  storageBucket: "albumapp-1ff2b.appspot.com",
  messagingSenderId: "335196836462",
  appId: "1:335196836462:web:23ae9f786d8f2beb3a4c7f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
