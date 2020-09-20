import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOgW-bCbS7KRC16RVos5cfE6vQ9RTTLsc",
  authDomain: "facebook-clone-57566.firebaseapp.com",
  databaseURL: "https://facebook-clone-57566.firebaseio.com",
  projectId: "facebook-clone-57566",
  storageBucket: "facebook-clone-57566.appspot.com",
  messagingSenderId: "436398273505",
  appId: "1:436398273505:web:ea392a059769893c2b98a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
