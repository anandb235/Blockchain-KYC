const Web3 = require('web3');
fs = require('fs');
solc = require('solc');

// const web3 = new Web3(new Web3.providers.WebsocketProvider('http://127.0.0.1:8545'));
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
 
var solcInput = {
        language: 'Solidity',
        sources: {
            'kycContract.sol': {
                content: fs.readFileSync('kycContract.sol','utf8').toString(),
            },
        },
        settings: {
            outputSelection: { // return everything
                '*': {
                    '*': ['*']
                }
            }
        }
    };



solcInput = JSON.stringify(solcInput);
var contract = solc.compile(solcInput);
contract = JSON.parse(contract);

// console.log(contractObject);

function after2Delay() {
    contractInstance = kycContract.at(deployedContract.address);
    console.log(contractInstance.address);
}

function afterDelay() {
    abiDefinition = JSON.parse(contract.contracts[':kycContract'].interface);
    byteCode = contract.contracts[':kycContract'].bytecode;
    kycContract = web3.eth.contract(abiDefinition);
    deployedContract = kycContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
    setTimeout(after2Delay, 3000);
}

setTimeout(afterDelay, 8000);
