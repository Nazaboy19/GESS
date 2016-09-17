
  var config = {
    apiKey: "AIzaSyAy6LZ_TxVjauVHjNsJiMMwR2e4NK3mlU4",
    authDomain: "gess-501e9.firebaseapp.com",
    databaseURL: "https://gess-501e9.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "1090042223916"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var usersDB = database.ref('user')
console.log("loaded ");
var that = this;
var userId = null;

function createUser(userInfo) {
	usersDB.on('value', function(snapshot){
		snapshot.forEach(function(data){
			if (userInfo.username == data.val().username) {
				if (userInfo.password == data.val().password) {
					userId = data.key;
					window.location = 'main.html';
				} else {
					alert('Wrong Password!')
				}
			} else {
				database.ref('user').set(userInfo).then(function(){
					userId = data.key
					window.location = 'main.html';
				});
			}
		});
	});
	// database.ref('user').set(userInfo).then(function(){

	// });
}

function writeUserData(console, game, gamerTag, gameRank,gameKills, gameDeaths,inGameMonie) {
  database.ref('users/' + userId).set({
    console: name,
    game: game,
    gamerTag : gamerTag,
    gameRank : gameRank,
    gameKills : gameKills,
    gameDeaths : gameDeaths,
    inGameMonie : inGameMonie

  });
}
console.log(writeUserData)
function writeNewPost(console, game, gamerTag, gameRank,gameKills, gameDeaths,inGameMonie) {
  // A post entry.
  var postData = {
    console: console,
    game: game,
    gamerTag : gamerTag,
    gameRank : gameRank,
    gameKills : gameKills,
    gameDeaths : gameDeaths,
    inGameMonie : inGameMonie
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

function toggleStar(postRef, uid) {
  postRef.transaction(function(post) {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = true;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}

//Event Click Listeners

$('#LoginSubmit').on('click', function(){
	var username = $('#username').val();
	var password = $('#password').val();

	createUser({
		username: username,
		password: password
	});
});



