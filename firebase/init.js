import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJblTKLYyjKE1gdqCEBkfV_nHSrewnE-A",
  authDomain: "smoothies-de5d9.firebaseapp.com",
  databaseURL: "https://smoothies-de5d9.firebaseio.com",
  projectId: "smoothies-de5d9",
  storageBucket: "smoothies-de5d9.appspot.com",
  messagingSenderId: "586568734190",
  appId: "1:586568734190:web:61db2bef0276555d"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({timestampsInSnapshots:true});
export default firebaseApp.firestore();
