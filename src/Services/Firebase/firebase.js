import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB-K8Jat2VuRJDbEkxmowrEk7A7MGyQ180',
  authDomain: 'finances-aca97.firebaseapp.com',
  databaseURL: 'https://finances-aca97.firebaseio.com',
  projectId: 'finances-aca97',
  storageBucket: 'finances-aca97.appspot.com',
  messagingSenderId: '190644548458',
  appId: '1:190644548458:web:b5193a96235f276b'
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();

    // firestore collections
    this.firestore = app.firestore();
    this.usersCollection = this.firestore.collection('users');
  }

  // *** OPERATIONS FUNCTIONS ***

  doCreateOperation = (
    authUserUid,
    description,
    value,
    type,
    date,
    isVerified
  ) => {
    return new Promise((resolve, reject) => {
      this.usersCollection
        .doc(authUserUid)
        .collection('operations')
        .add({
          description,
          value,
          type,
          date,
          isVerified
        })
        .then(resolve())
        .catch(erro => reject(erro));
    });
  };

  doGetOperations = authUserUid => {
    return new Promise((resolve, reject) => {
      this.usersCollection
        .doc(authUserUid)
        .collection('operations')
        .get()
        .then(snapshot => {
          resolve(snapshot);
        })
        .catch(erro => reject(erro));
    });
  };

  // *** AUTH FUNCTIONS ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  // password reset

  // password update

  // *** MERGE AUTH AND FIRESTORE USER API ***

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.usersCollection.doc(authUser.uid).onSnapshot(snapshot => {
          const firestoreUser = snapshot.data();

          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            ...firestoreUser
          };

          next(authUser);
        });
      } else {
        fallback();
      }
    });
}

export default Firebase;
