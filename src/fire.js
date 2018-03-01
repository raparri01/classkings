import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDcRaU_MBlNmUGB--9Y4-6msrVACkVtCIs",
    authDomain: "classkings-5771d.firebaseapp.com",
    databaseURL: "https://classkings-5771d.firebaseio.com",
    projectId: "classkings-5771d",
    storageBucket: "classkings-5771d.appspot.com",
    messagingSenderId: "867765935662"
  };

var fire = firebase.initializeApp(config);

export default fire;
