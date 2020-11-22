var firebaseConfig = {
    apiKey: "AIzaSyAHrEBTEPZ5e3ekhyTysj7r6JCojz-fEN0",
    authDomain: "endagme-7e4b7.firebaseapp.com",
    databaseURL: "https://endagme-7e4b7.firebaseio.com",
    projectId: "endagme-7e4b7",
    storageBucket: "endagme-7e4b7.appspot.com",
    messagingSenderId: "1090398134296",
    appId: "1:1090398134296:web:ce6da93f018fb5d71f636d"
  };
  firebase.initializeApp(firebaseConfig);
  
       showpastcomments();
        //Rootref is the whole database.
        const rootRef = firebase.database().ref();
        //commentsRef is just the pageCountsNode
        const commentsRef = rootRef.child('comments');
        //Listen for click on Submit Comment button, and post comment.
        document.getElementById("btnSubmitComment").addEventListener("click", function () {
              
              var newcomment = document.getElementById('txComment').value.replace(/\n/g, "<br>");
            //Define a new, keyed post.
            var newPostRef = commentsRef.push();
            //Fill tne new keyed post with data
            newPostRef.set({
                // name: document.getElementById('tbName').value.trim(),
                name: localStorage.getItem('username'),
                comment: newcomment.trim(),
                frompage: location.pathname,
                when: firebase.database.ServerValue.TIMESTAMP
            });
            alert("Comment Successful");
              });

            //Replace line breaks in comment with br tags.

        function showpastcomments() {
            var showat = document.getElementById('pastcomments');
            //Get comments whose from page equals this page's pathname.
            var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
            commentsRef.once('value', function (snapshot) {
                snapshot.forEach(function (itemSnapshot) {
                    //Get the object for one snapshot
                    var itemData = itemSnapshot.val();
                    var comment = itemData.comment;
                    var name = itemData.name;
                    var when = new Date(itemData.when).toLocaleDateString("en-us");
                    showat.innerHTML += "<li>" + comment + "<span> -- " + name + " (" + when +
                        ")</span></li>";
                })
            })
        }
        //Called when page first opens and also after Submit button click to show all comments for this page.
        
