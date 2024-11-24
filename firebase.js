// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAzoMXOhudoVll-G4d8DxEN0Sp8bcw8cs",
  authDomain: "manaus-conecta-b9aea.firebaseapp.com",
  projectId: "manaus-conecta-b9aea",
  storageBucket: "manaus-conecta-b9aea.firebasestorage.app",
  messagingSenderId: "690129362134",
  appId: "1:690129362134:web:8c7cace8b2389a4652bd77"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };