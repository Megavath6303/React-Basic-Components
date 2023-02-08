import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB0gNXBjIxO3Soyo-hK02alEzDePXPwHEU",
  authDomain: "fir-project-demo-aae31.firebaseapp.com",
  projectId: "fir-project-demo-aae31",
  storageBucket: "fir-project-demo-aae31.appspot.com",
  messagingSenderId: "355846007804",
  appId: "1:355846007804:web:b8c9cbcbc25c6e50ea6079"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db