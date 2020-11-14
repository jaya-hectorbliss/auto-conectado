import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCamLzw4qQGgu-_0Mj1-ml8g-hx3XjX5Oc",
  authDomain: "clupp-equinoccial.firebaseapp.com",
  databaseURL: "https://clupp-equinoccial.firebaseio.com",
  projectId: "clupp-equinoccial",
  storageBucket: "clupp-equinoccial.appspot.com",
  messagingSenderId: "670345066362",
  appId: "1:670345066362:web:8fa59182f894d252c508c3",
  measurementId: "G-RST6783FBK"
});

export const auth = FirebaseApp.auth();
export const db = FirebaseApp.firestore();
export default FirebaseApp;