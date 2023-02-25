//  Web3 intializer
//  ABI definition, Binary Data and contract Address in contractDetails.js
const signInWithPhoneButton = document.getElementById('signInWithPhone');
const getCodeButton = document.getElementById('getCode');
const codeField=document.getElementById('code');

const auth= firebase.auth();

window.recaptchVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

recaptchVerifier.render().then(widgetId => {
    window.recaptchaWidgetId = widgetId;
});

const sendVerificationCode = () => {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const appVerifier = window.recaptchVerifier;
    auth.signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(confirmationResult => {
            const sendCodeId = confirmationResult.verificationId;
            signInWithPhoneButton.addEventListener('click', () => {signinWithPhone(sendCodeId)});
        }
        ).catch(error => console.log(error));
    
}

const signInWithPhone = (sendCodeId) => {
    const code = codeField.value;
    const credential = firebase.auth.PhoneAuthProvider.credential(sendCodeId, code);
    auth.signInWithCredential(credential)
    .then(()=>{
        window.location.assign('./customerHomePage.html');
    })
    .catch(error => console.log(error));
}


getCodeButton.addEventListener('click', sendVerificationCode);


var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var kycContract = web3.eth.contract(abi);
var deployedContract = kycContract.new({
    data: binaryData,
    from: web3.eth.accounts[0],
    gas: 4700000
});
var contractInstance = kycContract.at(contractAddress);

function onClickLogin() {

    var username_c = document.getElementById("username").value;
    var password_c = document.getElementById("password").value;
    var phone_no = document.getElementById("phoneNumber").value;

    if (contractInstance.checkCustomer.call(username_c, password_c, phone_no) == false) {

        alert("Sorry! Invalid username or password. Sign up first if you haven't!");
        return false;
    }

    localStorage.username_c = username_c;
    localStorage.password_c = password_c;
    localStorage.phone_no = phone_no;
    alert("Welcome " + localStorage.username_c + " !");
    window.location = './customerHomePage.html';
    return false;
}

function onClickSignUp() {
    var username_c = document.getElementById("usernamesignup").value;
    var password_c = document.getElementById("passwordsignup").value;
    var c_password_c = document.getElementById("passwordsignup_confirm").value;
    var phone_no= document.getElementById("phoneNumber").value;
    if (password_c != c_password_c) {
        alert("Confirm your password correctly!");
        return false;
    }
    if (contractInstance.setPassword.call(username_c, password_c) == false) {
        alert("Account already in use or You have to undergo a KYC check at least once!");
        return false;
    }
    if(contractInstance.setPhoneNumber.call(username_c, password_c, phone_no) == false){
        alert("Phone number already in use!");
        return false;
    }
    alert("hi");
    contractInstance.setPassword.sendTransaction(username_c, password_c, { from: web3.eth.accounts[0], gas: 4700000 });
    contractInstance.setPhoneNumber.sendTransaction(username_c, password_c, phone_no, { from: web3.eth.accounts[0], gas: 4700000 });
    alert("Successfully registered account! Go to the login area to proceed!");
    return false;
}