import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB6ot2mh6NmZ2k-sq71gyIxOLYl_5lrDhI",
    authDomain: "restaurantapp-d97e4.firebaseapp.com",
    databaseURL: "https://restaurantapp-d97e4-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-d97e4",
    storageBucket: "restaurantapp-d97e4.appspot.com",
    messagingSenderId: "403603214751",
    appId: "1:403603214751:web:b5b251cd69b5686f6eadaa"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };