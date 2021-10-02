import { seedDatabase } from "../seed";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBsbMde9c26mgNX1CBxKDNt6khmSVEGfy0",
  authDomain: "bijay-instagram.firebaseapp.com",
  projectId: "bijay-instagram",
  storageBucket: "bijay-instagram.appspot.com",
  messagingSenderId: "190607031568",
  appId: "1:190607031568:web:7bc51daf2133de87b5f995",
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

//seedDatabase(firebase);
export { firebase, FieldValue };
