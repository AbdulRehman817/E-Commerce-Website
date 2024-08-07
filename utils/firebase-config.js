import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
    import{
        getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged 
    }from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"
  const firebaseConfig = {
    apiKey: "AIzaSyCIs8--FYtIAMLuCik5AHkgwu4aA_7yrHo",
    authDomain: "e-commerce-website-b051a.firebaseapp.com",
    projectId: "e-commerce-website-b051a",
    storageBucket: "e-commerce-website-b051a.appspot.com",
    messagingSenderId: "1063212368736",
    appId: "1:1063212368736:web:98251e556ad6129bc51405",
    measurementId: "G-TXNEKESQSQ"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth(app)

  export{
    auth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
  }