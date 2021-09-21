const firebaseConfig = {
    apiKey: "AIzaSyBlnFDjU_45nE3ccB-QvfFOaA3Ny59XFLk",
    authDomain: "kwitter-268c8.firebaseapp.com",
    databaseURL: "https://kwitter-268c8-default-rtdb.firebaseio.com",
    projectId: "kwitter-268c8",
    storageBucket: "kwitter-268c8.appspot.com",
    messagingSenderId: "230056941006",
    appId: "1:230056941006:web:98de27eeebf68f141fc79f"
  };


  function AddUser();{
      user_name = document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
          purpose:"AddingUser"
      })
  }