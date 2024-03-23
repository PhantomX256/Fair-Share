import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYuyesD_L6DoWutT26BBMv_mMxx_0thoM",
    authDomain: "fair-share-f606f.firebaseapp.com",
    projectId: "fair-share-f606f",
    storageBucket: "fair-share-f606f.appspot.com",
    messagingSenderId: "1059063621636",
    appId: "1:1059063621636:web:35527657b595b81aeced51",
    measurementId: "G-73D00P3497",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app);
export const db = getFirestore(app);