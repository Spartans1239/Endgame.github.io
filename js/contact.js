var firebaseConfig = {
    apiKey: "AIzaSyAHrEBTEPZ5e3ekhyTysj7r6JCojz-fEN0",
    authDomain: "endagme-7e4b7.firebaseapp.com",
    databaseURL: "https://endagme-7e4b7.firebaseio.com",
    projectId: "endagme-7e4b7",
    storageBucket: "endagme-7e4b7.appspot.com",
    messagingSenderId: "1090398134296",
    appId: "1:1090398134296:web:ce6da93f018fb5d71f636d"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

//   var cname = document.getElementById('cname').value;
//   var cemail = document.getElementById('cemail').value;
//   var csub = document.getElementById('csub').value;
//   var ctext = document.getElementById('ctext').value;
  var messagesRef = firebase.database().ref('messages');
 // console.log(cname);

  document.getElementById('contact').addEventListener('submit',submitform)
    
  function submitform(e){
    e.preventDefault();
  
  var message =document.getElementById('message').value; 
    saveMessage( message);
  }

  function saveMessage(message){
  //create a new reference in "push" mode for writitng to DB
  var newMessageRef = messagesRef.push();
  //use the set function to write values to firebase DB
  newMessageRef.set({
    //notice the brackets 
    //and the data format "field name (in firebase): variable name"
    name: localStorage.getItem('username'),
    email:localStorage.getItem('email'),
    message:message
  });
  alert('Message Sent Successfully');
  location.reload("contact.html");

}