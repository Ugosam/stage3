import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7Ci4VCpc1yXBz2lB6cJHnCF56Yye6sdI",
    authDomain: "login-auth-2ccb7.firebaseapp.com",
    projectId: "login-auth-2ccb7",
    storageBucket: "login-auth-2ccb7.appspot.com",
    messagingSenderId: "915423235684",
    appId: "1:915423235684:web:aa55b71baa1ab053d61971"
};

firebase.initializeApp(firebaseConfig);

 export const auth = firebase.auth();

 export default firebase