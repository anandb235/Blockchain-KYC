const contractFile = require('./init.js');
const Web3 = require('web3');
const { copyFileSync } = require('fs');
const web3 = new Web3("http://localhost:8545");
const bytecode = contractFile.evm.bytecode.object;
const abi = contractFile.abi;
const address = require('./contractDetails.js').contractAddress;


let contract = new web3.eth.Contract(abi);
let accounts = web3.eth.getAccounts().then((accounts) => {
    // console.log(accounts);
    // console.log(account);
    let account = accounts[0];

    contract.deploy({
        data: bytecode
    }).send({
        from: account,
        gas: 4700000,
        gasPrice: '3000'
    }).then((newContractInstance) => {
        console.log("Contract Instance Address = ", newContractInstance.options.address) // instance with the new contract address
        // console.log(newContractInstance.options.data);
        
    });
});
