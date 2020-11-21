
//<script>
  // Your web app's Firebase configuration
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
  const auth=firebase.auth();
  function signUp(){


      var email=document.getElementById("email").value;
      var password=document.getElementById("password").value;
      var username = document.getElementById("username").value;
      var phone = document.getElementById("phone number").value;
      if(email=="")alert('Please fill up the email');
      else if(password=="")alert('Please fill up the password');
      else if(username=="")alert('Please fill up the username');
      else if(phone=="")alert('Please fill up the phone');
      else{
      auth.createUserWithEmailAndPassword(email,password)
       .then(cred => {alert('Sign up successful');
      var ref = firebase.database().ref("users/"+cred.uid);
       
          ref.set({
            username: username,
            email: email,
            password: password,
            phone:phone
          }).then(x => {
            //document.getElementById('').reset();
             auth.signOut()
             location.reload("register.html");
            });
            cred.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
            
          })
         .catch(e=>alert(e.message));
    }
    }

  
  


//</script>