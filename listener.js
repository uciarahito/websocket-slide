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

let userId = 'if313045'
var starCountRef = database.ref('users/' + userId);
starCountRef.on('value', function(data) {
    console.log(data.val());
    console.log('data berhasil di read');
});