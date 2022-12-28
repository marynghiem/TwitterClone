import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAwZTOj6WukyiOa5lVRV7f-aLH0KS4l3ZU",
  authDomain: "twitter-clone-9c754.firebaseapp.com",
  projectId: "twitter-clone-9c754",
  storageBucket: "twitter-clone-9c754.appspot.com",
  messagingSenderId: "615471113048",
  appId: "1:615471113048:web:bb5aa9d3619c6eb15ebb2d",
  measurementId: "G-38ZJLJV1BP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
