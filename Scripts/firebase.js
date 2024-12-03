import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  // authenticaion
  createUserWithEmailAndPassword,
  // sigin
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  // Change Detection
  onAuthStateChanged,
  // Email Verification
  sendEmailVerification,
  // google
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // manage users
  signOut,
  updateProfile,
  deleteUser,

} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  // database
  where,
  limit,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc
}
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyO3Av6Y1PqXzeQZ_B_bHhqEQpngllpuk",
  authDomain: "authentiction-895d2.firebaseapp.com",
  projectId: "authentiction-895d2",
  storageBucket: "authentiction-895d2.appspot.com",
  messagingSenderId: "443175673530",
  appId: "1:443175673530:web:8051667fbb90bb2365ec83",
  measurementId: "G-5N4XR2TKHN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  // authenticaion
  createUserWithEmailAndPassword,
  // sigin
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  // Change Detection
  onAuthStateChanged,
  // Email Verification
  sendEmailVerification,
  // google
  auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // manage users
  signOut,
  updateProfile,
  deleteUser,

  // Database
  where,
  limit,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getFirestore,
  setDoc,
  doc,
  collection,
  addDoc,
  db
}
