import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCTieJfiHJbiJDC9oGajbss2u12tmK1N90",
    authDomain: "crowdverse-3b14e.firebaseapp.com",
    databaseURL: "https://crowdverse-3b14e.firebaseio.com",
    projectId: "crowdverse-3b14e",
    storageBucket: "crowdverse-3b14e.appspot.com",
    messagingSenderId: "471517006525"
  };
  var fire = firebase.initializeApp(config);
  export default fire;