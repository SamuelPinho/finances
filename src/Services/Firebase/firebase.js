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

const MESSAGE_TYPES = {
  error: 'danger',
  success: 'success'
};

const createReturnMessage = (type, message) => {
  return {
    type: type,
    message: message
  };
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

  doAddOperation = (
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
          value: parseFloat(value.replace(',', '.')),
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
        .orderBy('date')
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

  // *** USER FUNCTIONS ***

  doCreateUser = (email, password, firstName) => {
    return new Promise((resolve, reject) => {
      this.doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.usersCollection.doc(authUser.user.uid).set({
            profileInformation: {
              firstName,
              email
            }
          });
        })
        .then(() => {
          resolve(
            createReturnMessage(
              MESSAGE_TYPES.success,
              'Você foi cadastrado com sucesso'
            )
          );
        })
        .catch(erro => {
          console.log(erro.message);

          reject(
            createReturnMessage(
              MESSAGE_TYPES.error,
              'Algo deu errado ao tentar cadastrar o usuário'
            )
          );
        });
    });
  };

  doAddFinancialInformation = (authUserUid, startingMoney) => {
    return new Promise((resolve, reject) => {
      this.usersCollection
        .doc(authUserUid)
        .set(
          {
            financialInformation: {
              startingMoney: parseFloat(startingMoney.replace(',', '.'))
            }
          },
          { merge: true }
        )
        .then(() => {
          resolve(
            createReturnMessage(
              MESSAGE_TYPES.success,
              'Seu usuário foi atualizado com sucesso'
            )
          );
        })
        .catch(erro => {
          console.log(erro);

          reject(
            createReturnMessage(
              MESSAGE_TYPES.error,
              'Algo deu errado ao tentar atualizar seus dados'
            )
          );
        });
    });
  };

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
