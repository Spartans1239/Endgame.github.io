

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
  var database = firebase.database();
  var username;
  var email;
  
  // sign in section
  function signIn(){
		
        var email =  document.getElementById('email').value;    
        var password = document.getElementById('password').value;
		
		auth.signInWithEmailAndPassword(email, password).then(cred=>{
              alert('Sign in Successful');
              
              var userId = firebase.auth().currentUser.uid;
              return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
              username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
              email = (snapshot.val() && snapshot.val().email) || 'Anonymous';
              localStorage.setItem('email',email);
              localStorage.setItem('username',username);
              window.location.replace("index.html");
            // ...
         }
         );
            
          }
            
            
            
        )
        .catch(e => alert(e.message));
     }
     firebase.auth().onAuthStateChanged(user => {
  if (user) {
    
    console.log('signed in')
    //location.reload("login.html");
  }
  else {
    console.log('signed out')
  }
})

function signout(){

 auth.signOut();
 alert('Sin Out Successful');
 location.reload("login.html");
}
    
         
             
   
    // end of sign in section
              
