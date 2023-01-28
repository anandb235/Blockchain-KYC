# Blockchain-KYC



# Requirements
1. Nodejs - v10.15.3
2. npm - v6.9.0
3. solc - v0.4.26 `npm install solc@0.4.26`
4. web3 - v0.20.1 `npm install web3@0.20.1`
5. ganache-cli - v6.4.3

# Instructions to run
1. Open a terminal window and execute the command line `ganache-cli`.
2. Open another terminal and go to the `root` directory.
3. Execute the `init.js` file using the command line `node init.js`.
4. After about 10-15 seconds, we obtain a 20 byte address. This is the address of the compiled smart contract.
5. Go to the file `root\js\contractDetails.js` and open it using a text editor.
6. Edit the first line denoting the contract instance address given by the variable `contractAddress` to the 20 byte address obtained in step `4`.
7. Now the application is ready for use. Make sure the terminal with `ganache-cli` is up and running. It acts as the local ethereum test network.  
