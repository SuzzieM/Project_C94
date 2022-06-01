
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAcbt0SFegsL_dLCDzleE8qSTUlRaymeXc",
      authDomain: "gwitter-1710.firebaseapp.com",
      projectId: "gwitter-1710",
      storageBucket: "gwitter-1710.appspot.com",
      messagingSenderId: "312963458785",
      appId: "1:312963458785:web:a0f191c6458d9cd3a7f9a0",
      measurementId: "G-D4QTP043QC"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout()
{
      window.location = "index.html";
}