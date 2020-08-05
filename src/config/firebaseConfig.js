import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDBGa0hwAVGrUCwIfF3CmUunwQEPZ1hEkY',
  authDomain: 'dhencio-marioplan.firebaseapp.com',
  databaseURL: 'https://dhencio-marioplan.firebaseio.com',
  projectId: 'dhencio-marioplan',
  storageBucket: 'dhencio-marioplan.appspot.com',
  messagingSenderId: '1095095980140',
  appId: '1:1095095980140:web:617aabde647805bff30849',
  measurementId: 'G-BXE17N6Y3Q',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
