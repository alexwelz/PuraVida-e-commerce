import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI2gXU10mvNBRGWV1CKOf42TFMdrb6iMo",
  authDomain: "puravida-e-commerce.firebaseapp.com",
  projectId: "puravida-e-commerce",
  storageBucket: "puravida-e-commerce.firebasestorage.app",
  messagingSenderId: "1006371425421",
  appId: "1:1006371425421:web:9c2cad23f66d8b175a66c4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
