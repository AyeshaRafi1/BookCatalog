import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDXbMv0kH_jlBlcMSwJ1bruXddD4A4_DKs",
  authDomain: "book-catalog-683e4.firebaseapp.com",
  projectId: "book-catalog-683e4",
  storageBucket: "book-catalog-683e4.appspot.com",
  messagingSenderId: "995905785098",
  appId: "1:995905785098:web:925aa06d5128d47e78fef3",
  measurementId: "G-FQVRK2P83V"
};

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if (!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);

    const snapShot =await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } =userAuth;
      const createdAt = new Date();

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef
  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach (obj =>{
      const newDocRef =collectionRef.doc();
      batch.set(newDocRef,obj)
    });

    return await batch.commit()

  };

  export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map( doc => {
      const { title, items } = doc.data();

      return {
        routName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    console.log(transformedCollection)
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;