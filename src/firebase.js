import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAakglugr_1ENuuxU2YfGnOT0s0a5VVWLo",
  authDomain: "taskrabbit-f38a4.firebaseapp.com",
  projectId: "taskrabbit-f38a4",
  storageBucket: "taskrabbit-f38a4.appspot.com",
  messagingSenderId: "194284164180",
  appId: "1:194284164180:web:6c1d7a69a36f9c638749c1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth}