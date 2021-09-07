import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBDFzBCcH_jut3S7c2XwObzu6OPdkxArLs',
    authDomain: 'storypointer-2f74a.firebaseapp.com',
    projectId: 'storypointer-2f74a',
    storageBucket: 'storypointer-2f74a.appspot.com',
    messagingSenderId: '1089759199545',
    appId: '1:1089759199545:web:bfa6a9da0555c64bd6e8e8',
    measurementId: 'G-KG9SH7P6QZ'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
