// Initialize Firebase (ADD YOUR OWN DATA)

var config = {
  apiKey: "AIzaSyB_gFRXpBOJEXsdbXRmKJ55PZRj7Vbh-4k",
  authDomain: "cleaning-6ad19.firebaseapp.com",
  databaseURL: "https://cleaning-6ad19.firebaseio.com",
  projectId: "cleaning-6ad19",
  storageBucket: "cleaning-6ad19.appspot.com",
  messagingSenderId: "1098856097177",
  appId: "1:1098856097177:web:7787e3402e762dd7"
};
// Initialize Firebase
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}
