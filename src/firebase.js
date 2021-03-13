import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyARWRtF6vjBXLttoiIqfGjLtpnZf46eY0o",
  authDomain: "auth-development-1a9e4.firebaseapp.com",
  projectId: "auth-development-1a9e4",
  storageBucket: "auth-development-1a9e4.appspot.com",
  messagingSenderId: "722208942207",
  appId: "1:722208942207:web:5bb0c39a116ba1da25b74a",
});

export const auth = app.auth();
export default app;
