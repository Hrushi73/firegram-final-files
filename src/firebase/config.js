import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQIaonXW0jhHUCc-2cv1qb-YDKqHc9dOk",
  authDomain: "my-cloud-e9478.firebaseapp.com",
  projectId: "my-cloud-e9478",
  storageBucket: "my-cloud-e9478.appspot.com",
  messagingSenderId: "191954330558",
  appId: "1:191954330558:web:ebf747fc3948b666b78fef",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
