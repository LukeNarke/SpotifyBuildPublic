import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDk72WlXsabI3sCI77xBE13BbWnbLYjMeo",
  authDomain: "spotify-clone-cc3f3.firebaseapp.com",
  projectId: "spotify-clone-cc3f3",
  storageBucket: "spotify-clone-cc3f3.appspot.com",
  messagingSenderId: "883881002570",
  appId: "1:883881002570:web:46ee694095b2ff0ebd88b3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
