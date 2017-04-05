import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDyYiJ9KsWJEMcazHM_-8DWLqreWR2fzO4",
  authDomain: "social-animals-3e673.firebaseapp.com",
  databaseURL: "https://social-animals-3e673.firebaseio.com",
  projectId: "social-animals-3e673",
  storageBucket: "social-animals-3e673.appspot.com",
  messagingSenderId: "537461544415"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
