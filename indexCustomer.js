// document.getElementById("verify-otp").style.display = "none";
//  Web3 intializer
//  ABI definition, Binary Data and contract Address in contractDetails.js

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
    var phoneNumber = document.getElementById("phone-Number").value;
    if (contractInstance.checkCustomer.call(username_c, password_c, phoneNumber) == false) {
        alert("Sorry! Invalid username, password or phone number. Sign up first if you haven't!");
        return false;
    }
    
    //  alert("Welcome "+username_c+" !");
    localStorage.username_c = username_c;
    localStorage.password_c = password_c;
    localStorage.phoneNumber = phoneNumber;
    alert("Welcome " + localStorage.username_c + " !");
    window.location = './customerHomePage.html';
    return false;
}


function onClickSignUp() {
    var username_c = document.getElementById("usernamesignup").value;
    var password_c = document.getElementById("passwordsignup").value;
    var c_password_c = document.getElementById("passwordsignup_confirm").value;
    var phone_no = document.getElementById("phoneNumber").value;

    if (username_c == "") {
        alert("Please enter a username!");
        return false;
    }

    if (password_c == "") {
        alert("Please enter a password!");
        return false;
    }

    if (c_password_c == "") {
        alert("Please confirm your password!");
        return false;
    }

    if(phone_no == ""){
        alert("Please enter your phone number!");
        return false;
    }
    
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


