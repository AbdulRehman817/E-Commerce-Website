
import{
    createUserWithEmailAndPassword,
    auth
} from "../../utils/firebase-config.js"


const signup_form=document.querySelector("#signup-form")
signup_form.addEventListener("submit",function(e)   {
    e.preventDefault()
    // console.log(e)
    const email=e.srcElement[0].value
    const password=e.srcElement[1].value
const firstName=e.srcElement[3].value
const lastName=e.srcElement[4].value
const phone=e.srcElement[5].value
const company=e.srcElement[6].value
const userData={
    email,
    password,
    firstName,
    lastName,
    phone,
    company
}
console.log(userData)

createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    window.location.href="../../index.html"
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})