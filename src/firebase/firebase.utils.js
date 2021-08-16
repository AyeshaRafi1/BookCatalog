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
      const bookIDs= []
      const bookList=[]
      
      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          bookIDs,
          bookList,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef
  };

  export const findInCollection = async (collection, name) => {
    const collectionRef= firestore.collection(collection)
    
    const allFiles = await collectionRef.get()

    const matchIds= allFiles.docs.map(document => {
      const { Name } =  document.data();
      if (Name === name){
        return document.id
      }
      return null
    })
    
    for (const element of matchIds) {
      if (element!= null){
        return element
      }
    }

    return null
  };

  export const createNewAuthor = async author =>{
    const docRef =  firestore.collection("Authors").doc();
    const docId =  docRef.id;

    await docRef.set({Name: author , Books:[]});
    return docId    
  }

  export const createNewBook = async(bookName,genre, author , authorId) => {

    const docRef = firestore.collection("books").doc();
    const docId = docRef.id;
    
    const Data ={
      Name: bookName,
      Author: author,
      AuthorID:authorId,
      Genre:genre
    }

    await docRef.set(Data);

    return docId
  }


  export const addBookToAuthor= async (authorId,bookName) => {
    const AuthorRef = firestore.collection("Authors").doc(authorId);

    const snapShot = await AuthorRef.get()
    
    const author = snapShot.data();

    if (author.Books.length===1){
      await AuthorRef.update({Books: [author.Books[0], bookName] })
    }
    else if (author.Books.length===0){
      await AuthorRef.update({Books: [bookName] })
    }
    else {
      await AuthorRef.update({Books: [...author.Books, bookName]})

    }
  }

  export const createAuthorDocument = async (author) => {
    const docRef = firestore.collection("Author").doc();
    const docId = docRef.id;

    await docRef.set({Name: author});

    return docId
  }


  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;