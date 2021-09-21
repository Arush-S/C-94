const firebaseConfig = {
      apiKey: "AIzaSyBlnFDjU_45nE3ccB-QvfFOaA3Ny59XFLk",
      authDomain: "kwitter-268c8.firebaseapp.com",
      databaseURL: "https://kwitter-268c8-default-rtdb.firebaseio.com",
      projectId: "kwitter-268c8",
      storageBucket: "kwitter-268c8.appspot.com",
      messagingSenderId: "230056941006",
      appId: "1:230056941006:web:98de27eeebf68f141fc79f"
    };


user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name - " + Room_names)
row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row;
      });});}
getData();
