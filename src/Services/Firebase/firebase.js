import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { config } from './firebase.config';

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

  doUpdateOperation = (userUid, { uid, description, value, type, date, isVerified }) => {
    date = new Date(date);
    date.setHours(date.getHours() + 3);

    return new Promise((resolve, reject) => {
      this.usersCollection
        .doc(userUid)
        .collection('operations')
        .doc(uid)
        .update({
          description,
          value,
          type,
          date: app.firestore.Timestamp.fromDate(date),
          isVerified
        })
        .then(resolve())
        .catch(erro => {
          console.log(erro);
          reject(erro);
        });
    });
  };

  doAddOperation = (authUserUid, description, value, type, date, isVerified) => {
    date = new Date(date);
    date.setHours(date.getHours() + 3);

    return new Promise((resolve, reject) => {
      this.usersCollection
        .doc(authUserUid)
        .collection('operations')
        .add({
          description,
          value: parseFloat(value.replace(',', '.')),
          type,
          date: app.firestore.Timestamp.fromDate(date),
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
        .orderBy('date', 'desc')
        .limit(20)
        .get()
        .then(snapshot => {
          let operations = [];

          snapshot.forEach(operation => {
            let newOperation = {
              ...operation.data(),
              uid: operation.id
            };

            newOperation.date = newOperation.date.toDate();

            operations = [...operations, newOperation];
          });

          resolve(operations);
        })
        .catch(erro => reject(erro));
    });
  };

  doGetOperationsByDate = (authUserUid, finalDate, initialDate = '30/08/2018') => {
    return new Promise((resolve, reject) => {
      initialDate = initialDate.split('/');
      finalDate = finalDate.split('/');

      initialDate = new Date(initialDate[2], initialDate[1] - 1, initialDate[0]);

      finalDate = new Date(finalDate[2], finalDate[1] - 1, finalDate[0]);

      this.usersCollection
        .doc(authUserUid)
        .collection('operations')
        .where('date', '>=', initialDate)
        .where('date', '<=', finalDate)
        .orderBy('date', 'desc')
        .get()
        .then(snapshot => {
          let operations = [];

          snapshot.forEach(operation => {
            let newOperation = {
              ...operation.data(),
              uid: operation.id
            };

            newOperation.date = newOperation.date.toDate().toLocaleDateString();

            operations = [...operations, newOperation];
          });

          resolve(operations);
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
              "You've been registered with success"
            )
          );
        })
        .catch(erro => {
          console.log(erro.message);

          reject(
            createReturnMessage(
              MESSAGE_TYPES.error,
              'Something went wrong while trying to register you :('
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
              'Your information was updated with success'
            )
          );
        })
        .catch(erro => {
          console.log(erro);

          reject(
            createReturnMessage(
              MESSAGE_TYPES.error,
              'Something went wrong while updating your info'
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
