import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAkmXTBTteBLLDdMidlYmeDfaCf6WzuMuY",
  authDomain: "crwn-db-f07de.firebaseapp.com",
  databaseURL: "https://crwn-db-f07de.firebaseio.com",
  projectId: "crwn-db-f07de",
  storageBucket: "crwn-db-f07de.appspot.com",
  messagingSenderId: "967720814854",
  appId: "1:967720814854:web:3e84877c23b6f50c207687",
  measurementId: "G-2LWRGCQ86L"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase