function logout(){
    window.location = "index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDYu7BD1lmIDgYNKjf3bCfknQAyRuMpjXE",
    authDomain: "kwitter-pro-a1d8d.firebaseapp.com",
    databaseURL: "https://kwitter-pro-a1d8d-default-rtdb.firebaseio.com",
    projectId: "kwitter-pro-a1d8d",
    storageBucket: "kwitter-pro-a1d8d.appspot.com",
    messagingSenderId: "290731998817",
    appId: "1:290731998817:web:8d5359c2a1999428153420"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
