 import{
    signInWithEmailAndPassword,auth
 } from "../../utils/firebase-config.js"

 const form=document.querySelector("#signin-form")
 form.addEventListener("submit",(e)=>{
e.preventDefault()
console.log(e)
const email=e.srcElement[0].value
const password=e.srcElement[1].value
const userData={
    email,
    password
}
console.log(userData)
signInWithEmailAndPassword(auth, email,password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.replace("../../index.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
});
})