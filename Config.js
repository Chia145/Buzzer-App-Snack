 import firebase from 'firebase';
 
 
 
 const firebaseConfig = {
    apiKey: "AIzaSyA_hWZ0PhlvJWt24jaHG_LYZfTWZIX2-9Q",
    authDomain: "buzzer-app-48cdf.firebaseapp.com",
    databaseURL: "https://buzzer-app-48cdf.firebaseio.com",
    projectId: "buzzer-app-48cdf",
    storageBucket: "buzzer-app-48cdf.appspot.com",
    messagingSenderId: "364187573431",
    appId: "1:364187573431:web:4bbe7104b5fafaa0338132"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 

export default firebase.database();
