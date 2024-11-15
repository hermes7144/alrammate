import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  vapidKey: import.meta.env.VITE_APP_VAPID_KEY,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const messaging = getMessaging(app);

export { messaging, db };
export default app;