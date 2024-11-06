// Import the necessary functions from the Firebase SDKs
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Main Firebase configuration for the primary app
const firebaseConfig = {
    apiKey: "AIzaSyCozLq_nILEQfdYsdXSjNA245xkvOO3jO4",
    authDomain: "note-list-4ffb6.firebaseapp.com",
    projectId: "note-list-4ffb6",
    storageBucket: "note-list-4ffb6.appspot.com",
    messagingSenderId: "1039387620560",
    appId: "1:1039387620560:web:8dc86d92f09266ae7f5ad5"
};

// Initialize the primary Firebase app and Firestore
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance for the primary app

// Secondary Firebase configuration for a different Firestore project
const firebaseConfig2 = {
    apiKey: "AIzaSyCF-2-VMY7D49OA90PXgEy7dPTH24DQF0I",
    authDomain: "job-listing-82f25.firebaseapp.com",
    projectId: "job-listing-82f25",
    storageBucket: "job-listing-82f25.firebasestorage.app",
    messagingSenderId: "778606824596",
    appId: "1:778606824596:web:c63bd710339e423e06f881"
};

// Initialize the secondary Firebase app and Firestore
const app2 = getApps().some(app => app.name === "SecondaryApp")
    ? getApp("SecondaryApp")
    : initializeApp(firebaseConfig2, "SecondaryApp");

const db2 = getFirestore(app2); // Firestore instance for the secondary app

// Third Firebase configuration for the "note-data-50dc0" project
const firebaseConfig3 = {
    apiKey: "AIzaSyAxjR4pgY-f4B0dwb_5xKfgwuZyeLremQE",
    authDomain: "note-data-50dc0.firebaseapp.com",
    projectId: "note-data-50dc0",
    storageBucket: "note-data-50dc0.firebasestorage.app",
    messagingSenderId: "502181455745",
    appId: "1:502181455745:web:5fbd48a863c3d39664ea80"
};

// Initialize the third Firebase app and Firestore
const app3 = getApps().some(app => app.name === "ThirdApp")
    ? getApp("ThirdApp")
    : initializeApp(firebaseConfig3, "ThirdApp");

const db3 = getFirestore(app3); // Firestore instance for the third app

// Export the app instances, Firestore databases, and authentication
export { app, auth, db, app2, db2, app3, db3 };
