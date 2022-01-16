
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

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


   function addRoom() {
           room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                    purpose : "adding room name" 
              });
               localStorage.setItem("room_name", room_name);
                window.location = "kwitter_page.html";
               }

   function getData() {
           firebase.database().ref("/").on('value',
            function(snapshot) { 
                   document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
               console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                 document.getElementById("output").innerHTML += row; });
               });
               }

   getData();
    function redirectToRoomName(name) {
            console.log(name);
        localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html"; 
       }
       
       function logout() {
               localStorage.removeItem("user_name");
               localStorage.removeItem("room_name");
               window.location = "index.html";
       }