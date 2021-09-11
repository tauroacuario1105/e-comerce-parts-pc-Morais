import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBff_o99saSzqpDFkvCTx0gYAMD1b15EQw",
    authDomain: "react-armatupcapp.firebaseapp.com",
    projectId: "react-armatupcapp",
    storageBucket: "react-armatupcapp.appspot.com",
    messagingSenderId: "165315541351",
    appId: "1:165315541351:web:1d9dd1a9b0b6f3b559d7c2"
}

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase =()=> {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore (app);
}