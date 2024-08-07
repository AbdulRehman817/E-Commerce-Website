import{
    auth,
    onAuthStateChanged,signOut
} from "./utils/firebase-config.js"




onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
        // User is signed out
        // ...
      window.location.href="./auth/signin/index.html"
    }
    const logOut=document.querySelector("#logout")
    logOut.addEventListener("click",()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

  
    })
});