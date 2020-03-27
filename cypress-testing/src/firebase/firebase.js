import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBWsAY6s_X0i5wQqshy_P3X2ZRbqCXI8VY',
  authDomain: 'user-onboarding-e7a82.firebaseapp.com',
  databaseURL: 'https://user-onboarding-e7a82.firebaseio.com',
  projectId: 'user-onboarding-e7a82',
  storageBucket: 'user-onboarding-e7a82.appspot.com',
  messagingSenderId: '266366918650',
  appId: '1:266366918650:web:69256e042286334e644e43'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
