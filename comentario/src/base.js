import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNthLss8DQC7U1cPsMEJqjOPjLhlstCBw",
    authDomain: "reactjs-de9e5.firebaseapp.com",
    databaseURL: "https://reactjs-de9e5.firebaseio.com",
    projectId: "reactjs-de9e5",
    storageBucket: "reactjs-de9e5.appspot.com",
    messagingSenderId: "675537892179"
})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase
        .auth
        .FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base