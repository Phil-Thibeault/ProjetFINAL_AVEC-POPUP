import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBTj3H5MnW26TNF4YCR-ajEHrhZmfVMzw",
  authDomain: "booklist-b9be5.firebaseapp.com",
  databaseURL: "https://booklist-b9be5.firebaseio.com",
  projectId: "booklist-b9be5",
  storageBucket: "booklist-b9be5.appspot.com",
  messagingSenderId: "350903647207"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // ***  AUTH API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
