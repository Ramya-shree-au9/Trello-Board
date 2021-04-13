import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBifjzPheoHSbuDt9fyizVEUjuweE6Tsao",
    authDomain: "images-4d40c.firebaseapp.com",
    projectId: "images-4d40c",
    storageBucket: "images-4d40c.appspot.com",
    messagingSenderId: "120290448913",
    appId: "1:120290448913:web:71526ac0ed9476dc9e43b0"
  };


  firebase.initializeApp(firebaseConfig);

  const storage= firebase.storage()

  export {storage ,firebase as default}