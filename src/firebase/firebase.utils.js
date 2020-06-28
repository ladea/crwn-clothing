import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDjVb-GoLG4LuxAFsjG33KmfnzV5tXY-xk",
  authDomain: "crwn-db-de7e3.firebaseapp.com",
  databaseURL: "https://crwn-db-de7e3.firebaseio.com",
  projectId: "crwn-db-de7e3",
  storageBucket: "crwn-db-de7e3.appspot.com",
  messagingSenderId: "985043964722",
  appId: "1:985043964722:web:49a3ed3e8de2fa0e68fd2b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
