var firebase = require("firebase");

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC6I9fG6kCLGyQZGuN5d568b26o3KNscw0",
    authDomain: "websocket-slide.firebaseapp.com",
    databaseURL: "https://websocket-slide.firebaseio.com",
    storageBucket: "websocket-slide.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
    console.log('data berhasil di write');
}

writeUserData('if313045', 'Butet Batak', 'butetbatak26@gmail.com', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTPaIytfk4FUyyOWg1vCCORWK9C982vasC5PYZPPy82iMflg_gb')

// listener dipindah biar kelihatan perubahannya
// let userId = 'if313045'
// var starCountRef = firebase.database().ref('users/' + userId);
// starCountRef.on('value', function(data) {
//     console.log(data.val());
//     console.log('data berhasil di read');
// });