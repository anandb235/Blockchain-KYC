const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");

const source = fs.readFileSync('kycContract.sol', 'utf8');

const input = {
    language: 'Solidity',
    sources: {
       'kycContract.sol': {
          content: source,
       },
    },
    settings: {
       outputSelection: {
          '*': {
             '*': ['*'],
          },
       },
    },
};

const contract = JSON.parse(solc.compile(JSON.stringify(input)));
const contractFile = contract.contracts['kycContract.sol']['KYC_Contract'];

module.exports = contractFile;