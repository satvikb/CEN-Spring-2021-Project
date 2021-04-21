import firebase from 'firebase'
var dateFormat = require("dateformat");

var firebaseConfig = {
  apiKey: "AIzaSyB6SL5jk3sm7tEuMsJW3Pvw0w2pIQMfw_M",
  authDomain: "tamidwebsite.firebaseapp.com",
  projectId: "tamidwebsite",
  storageBucket: "tamidwebsite.appspot.com",
  messagingSenderId: "354485171233",
  appId: "1:354485171233:web:28c041c2af4a1748bf1f60"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.Timestamp;
const timestampToString = function(timestamp){
  return dateFormat(timestamp.toDate(), 'dddd, mmmm dS, yyyy "at" h:MM TT');
  // return timestamp.toDate().toISOString();
}
export {
  db,
  auth,
  timestamp,
  timestampToString
}
// export db;
// export auth;
// export default db;
