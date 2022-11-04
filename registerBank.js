const contractFile = require('./init.js');
const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");
const bytecode = contractFile.evm.bytecode.object;
const abi = contractFile.abi;
const address = require('./contractDetails.js').contractAddress;

let contract = new web3.eth.Contract(abi);

console.log(contract.methods);

//  check if web storage is supported

if (typeof(Storage) == "undefined") {
    // window.alert("Sorry, your browser does not support web storage. Upgrade to IE9 or contemporary platforms. Thank You for showing interest in us!");
    // globalThis.window.alert("Sorry, your browser does not support web storage. Upgrade to IE9 or contemporary platforms. Thank You for showing interest in us!");
    console.log("Sorry, your browser does not support web storage. Upgrade to IE9 or contemporary platforms. Thank You for showing interest in us!");
}

//  function to execute on Sign up

function onSignUp() {
    let bank_name1 = document.getElementById("username").value;

    //  validate input

    if (bank_name1 == "") {
        // alert("Enter a valid username!");
        console.log("Enter a valid username!");
        return;
    }

    let pass = document.getElementById("password").value;
    if (pass == "") {
        // alert("Enter a valid password!");
        console.log("Enter a valid password!");
        return;
    }

    let reg = document.getElementById("address").value;
    if (reg == "") {
        // alert("Enter a valid address!");
        console.log("Enter a valid address!");
        return;
    }
    if (confirm("I accept that the details provided are correct.") == false) {
        // alert("Please enter correct details!");
        console.log("Please enter correct details!");
        window.location.href = "./registerBank.html";
    }

    //  add Bank to the network

    // contractInstance.addBank.sendTransaction(bank_name1, pass, reg, {
    //     from: web3.eth.accounts[0],
    //     gas: 4700000
    // });




    // alert(bank_name1 + " has been successfully added to the network!");
    console.log(bank_name1 + " has been successfully added to the network!");
    // alert("Login from the \"Login\" Tab on the top-right side of the webpage. \n Thank you for choosing KYC chain!");
    console.log("Login from the \"Login\" Tab on the top-right side of the webpage. \n Thank you for choosing KYC chain!");
    window.location.href = "./bankHome.html";
}

// this function is called on clicking log in button in the pop up that appears while logging in 

function onLogin() {
    var bank_name_l = document.getElementById("username_l").value;
    var pass_l = document.getElementById("password_l").value;

    //  validate input

    if (bank_name_l == "") {
        // alert("Enter a valid bank name!");
        console.log("Enter a valid bank name!");
        return;
    }
    if (pass_l == "") {
        // alert("Enter a valid password!");
        console.log("Enter a valid password!");
        return;
    }
    if (contractInstance.checkBank.call(bank_name_l, pass_l, {
            from: pass_l,
            gas: 4700000
        }) == "null") {
        // alert("Bank not in network. Sign up before proceeding further. Thank You!");
        console.log("Bank not in network. Sign up before proceeding further. Thank You!");
        return;
    }

    //  open bank page if login successful

    // alert("Welcome " + bank_name_l + " !");
    console.log("Welcome " + bank_name_l + " !");
    localStorage.bank_eth_account = pass_l;
    // window.location = './resources/registerBank.html';
}
