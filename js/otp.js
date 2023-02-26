// const firebaseConfig = {
//     apiKey: "AIzaSyAcRDglHuIRVo0ULcdsLXfxrvOYPw7G-6g",
//     authDomain: "otp-login-6d49d.firebaseapp.com",
//     projectId: "otp-login-6d49d",
//     storageBucket: "otp-login-6d49d.appspot.com",
//     messagingSenderId: "689932750354",
//     appId: "1:689932750354:web:ed700f335b4889e35752cb"
// };

// document.getElementById("verify-otp").style.display = "none";


// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const database = firebase.database();

// function render() {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
//     recaptchaVerifier.render();
// }

// function send(){

//     var number = document.getElementById("phone-no").value
//     var finalNumber = "+91" + number;
//     console.log(finalNumber);

//     if(document.getElementById("phone-no").value == ""){
//         alert("Please enter your phone number!");
//         return false;
//     }

//     document.getElementById("send-otp").style.display = "none";
//     document.getElementById("verify-otp").style.display = "block";

// }

// function verify(){
//     document.getElementById("verify-otp").style.display = "none";
//     if(document.getElementById("verifyphone").value == ""){
//         alert("Please enter the OTP sent to your phone number!");
//         return false;
//     }
//     // alert("Phone number successfully verified!");
// }
