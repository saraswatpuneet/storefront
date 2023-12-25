import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMDretkimMaVDywt6kDZSWfakMrw09boQ",
  authDomain: "querent-emails.firebaseapp.com",
  projectId: "querent-emails",
  storageBucket: "querent-emails.appspot.com",
  messagingSenderId: "153818766847",
  appId: "1:153818766847:web:57127857d44544ab4bdbca",
  measurementId: "G-CSGMMDSSHR",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const emailsCollection = collection(db, "LandingPageEmails");
