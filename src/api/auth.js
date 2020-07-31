import firebase from './firebase'

const firebaseAuth = firebase.auth()

export const signIn = (email, password) => {
  return firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      return response.user
    })
}

export const signUp = (email, password) => {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      return response.user
    })
}

export const signOut = () => {
  return firebaseAuth.signOut()
}
