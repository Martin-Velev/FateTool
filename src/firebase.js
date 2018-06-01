
let Rebase = require('re-base');
let firebase = require('firebase/app');
let database = require('firebase/database');
let app = firebase.initializeApp({
  apiKey: "AIzaSyB8N-NtLa6IRJFkDod0_OOTlFXwmhZVncM",
  authDomain: "fate-tool-42ef7.firebaseapp.com",
  databaseURL: "https://fate-tool-42ef7.firebaseio.com",
  projectId: "fate-tool-42ef7",
  storageBucket: "fate-tool-42ef7.appspot.com",
  messagingSenderId: "809019023244"
});
export const db = firebase.database(app);
export const base = Rebase.createClass(db);
