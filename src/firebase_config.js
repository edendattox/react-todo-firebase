import firebase from "firebase";
// import

var firebaseConfig = {
    apiKey: "AIzaSyAJpXPFZRWMVzrc6cz_eB3xVNxOvgHV-8w",
    authDomain: "react-todo-494c6.firebaseapp.com",
    projectId: "react-todo-494c6",
    storageBucket: "react-todo-494c6.appspot.com",
    messagingSenderId: "726677511108",
    appId: "1:726677511108:web:1bc97f49d22eb861056291",
    measurementId: "G-4NNH8LGLB2"
  };


  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db};