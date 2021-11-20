import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDgMADxZAPgvYTDC2Ee70N75lWeUW6sRco',
  authDomain: 'attend-da883.firebaseapp.com',
  databaseURL: 'https://attend-da883-default-rtdb.firebaseio.com',
  projectId: 'attend-da883',
  storageBucket: 'attend-da883.appspot.com',
  messagingSenderId: '996763863109',
  appId: '1:996763863109:web:6b64a899c55646163dbb2c',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
