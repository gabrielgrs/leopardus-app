import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const configs = {
  apiKey: `AIzaSyB1sS9jfXJA229u1mndhxWWCkmu0fogKuQ`,
  authDomain: `leopardus-dev.firebaseapp.com`,
  databaseURL: `https://leopardus-dev.firebaseio.com`,
  projectId: `leopardus-dev`,
  storageBucket: `leopardus-dev.appspot.com`,
  messagingSenderId: `87359292200`,
  appId: `1:87359292200:web:9b02d0c3581f42bc99c61d`
}

if (!firebase.apps.length) firebase.initializeApp(configs)

export const getAll = (collection) =>
  firebase
    .firestore()
    .collection(collection)
    .get()
    .then((snapshot) => snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))

export const getByIdentifier = (collection, identifier) =>
  firebase
    .firestore()
    .collection(collection)
    .doc(identifier)
    .get()
    .then((snapshot) => ({ data: { id: snapshot.id, ...snapshot.data() } }))

export const create = (collection, fields) =>
  firebase.firestore().collection(collection).add(fields)

export const update = (collection, identifier, fields) =>
  firebase.firestore().collection(collection).doc(identifier).update(fields)

export const remove = (collection, identifier) =>
  firebase.firestore().collection(collection).doc(identifier).delete()

export default firebase
