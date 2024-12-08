import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signInWithEmailAndPassword } from 'firebase/auth';
// import {AppConstants} from "./server/constants";

export const AppConstants = {
  authDomain: "jelvintour.firebaseapp.com",
  projectId: "jelvintour",
  storageBucket: "jelvintour.appspot.com",
  messagingSenderId: "1006155413516",
  appId: "1:1006155413516:web:0d56dbce52e6764d7c1629",
  measurementId: "G-8S7NDFPD1J",
};


export const getUser = 
`query getUser($email: String!) {
  getUser(email:$email) {
    uuid
    name
    created_at
    email
  }
}`

export const creatUser  = `mutation( $email: String) {
  insert_profiles(objects: [{
   email: $email, last_seen: "now()"
  }], on_conflict: {constraint: profiles_pkey, update_columns: [last_seen, email]}
  ) {
    affected_rows
  }
 }`

// Replace with your Firebase project configuration
// const GOOGLE_API_KEY="AIzaSyCo77r8f2-cPQUAKU-lZcAgUte7EfMV-3Y"
const GOOGLE_API_KEY = process.env["GOOGLE_API_KEY"];

const config = {
  apiKey: GOOGLE_API_KEY,
  authDomain: AppConstants.authDomain,
  projectId: AppConstants.projectId,
  storageBucket: AppConstants.storageBucket,
  messagingSenderId: AppConstants.messagingSenderId,
  appId: AppConstants.appId,
  measurementId: AppConstants.measurementId,
};

// Initialize Firebase app
const app = initializeApp(config);

// Initialize Firebase Authentication and Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { 
  auth, 
  provider, 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult,
  getAuth,
  signInWithEmailAndPassword
};