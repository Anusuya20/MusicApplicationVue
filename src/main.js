import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD4sP3ghPyRNJfo4Q09o7V7nAFCFutOBj4",
    authDomain: "musicapp-7d16d.firebaseapp.com",
    projectId: "musicapp-7d16d",
    storageBucket: "musicapp-7d16d.appspot.com",
    messagingSenderId: "172441280187",
    appId: "1:172441280187:web:41d86921bd4237a105939e"
  };
firebase.initializeApp(firebaseConfig);  
createApp(App).use(router).mount('#app')

