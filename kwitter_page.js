//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDJ4QdHjUtQLFLM3SH4-x6Ud4TxEv7cygY",
       authDomain: "riyaproject-6b53a.firebaseapp.com",
        databaseURL: "https://riyaproject-6b53a-default-rtdb.firebaseio.com",
         projectId: "riyaproject-6b53a",
          storageBucket: "riyaproject-6b53a.appspot.com",
           messagingSenderId: "716933276765",
            appId: "1:716933276765:web:42c7f7b6161a41dbb859b4"
           }; 
           // Initialize Firebase 
          firebase.initializeApp(firebaseConfig);

          user_name = localStorage.getItem("user_name");
          room_name = localStorage.getItem("room_name");

          function send() {
                msg = document.getElementById("msg").value;
                firebase.database().ref(room_name).push({
                      name: user_name,
                      message: msg,
                      like: 0

                });

                document.getElementById("msg").value = "";
          }

function getData() {
       firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorgae.removeItem("room_name");
      window.location = "index.html";
}
