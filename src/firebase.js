import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCArnI4sVU57BEojylAcAuhHJLBArZQAr0",
  authDomain: "linkedin-clone-f072e.firebaseapp.com",
  projectId: "linkedin-clone-f072e",
  storageBucket: "linkedin-clone-f072e.appspot.com",
  messagingSenderId: "491131482548",
  appId: "1:491131482548:web:07d94707148405311f82e1"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};