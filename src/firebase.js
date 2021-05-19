import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMkVFqjPR6pPJjc_xcDrcQb8frbmzYJRc",
  authDomain: "disneyplus-clone-4e41a.firebaseapp.com",
  projectId: "disneyplus-clone-4e41a",
  storageBucket: "disneyplus-clone-4e41a.appspot.com",
  messagingSenderId: "25134512898",
  appId: "1:25134512898:web:00f6b067105fd14275e01b",
  measurementId: "G-CP1YYVGGP8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
