import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfw6icSTMdz-RIRa9m63MhVai6c1kBsK0",
  authDomain: "surveyapp-42b73.firebaseapp.com",
  databaseURL: "https://surveyapp-42b73.firebaseio.com",
  projectId: "surveyapp-42b73",
  storageBucket: "surveyapp-42b73.appspot.com",
  messagingSenderId: "283004128658",
  appId: "1:283004128658:web:50d058fe7fcdb64f71c54b",
  measurementId: "G-M3VQQPD23M"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
