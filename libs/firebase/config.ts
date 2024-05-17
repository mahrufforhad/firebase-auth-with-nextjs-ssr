import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBdFeuOwBpB7sVdtKjb83Pe70VYW5PNHZ0",
  authDomain: "redsouls-org.firebaseapp.com",
  projectId: "redsouls-org",
  storageBucket: "redsouls-org.appspot.com",
  messagingSenderId: "784523304036",
  appId: "1:784523304036:web:f7ca254e236af1aee21371",
};

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
