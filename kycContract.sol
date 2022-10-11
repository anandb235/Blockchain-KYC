// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract KYC_Contract{

    address admin; 


    struct Customer {
        string e_mail;
        string password;
        string data;
        address bank;
    }

    struct Bank {
        string name;
        address wallet_address;
        uint kyc_count;
        string password;
    }

    struct KYC_Request {
        string e_mail;
        string data;
        address bank_address;
    }

    Customer[] customers;

    Bank[] banks;

    KYC_Request[] requests;


    constructor() {
        admin = msg.sender;
    }

    function isEqual(string memory str1, string memory str2) internal pure returns(bool){
        return keccak256(bytes(str1)) == keccak256(bytes(str2));
    }

    function addBank(string memory bankName, address bankAddress, string memory bankPassword) public payable returns(bool){        
        if (msg.sender == admin){

            for (uint i=0; i<banks.length;i++){
                if (isEqual(bankName, banks[i].name) || bankAddress == banks[i].wallet_address){
                    return false; //already exists
                }
            }
            banks.push(Bank(bankName, bankAddress, 0, bankPassword));
            return true; //successful
        }

        return false; //general unsuccessful
    }

    function removeBank(string memory bankName) public payable returns(bool){
        if (msg.sender == admin){
            for(uint i = 0; i < banks.length; i++) {
                if(isEqual(banks[i].name,bankName)) {
                    for(uint j = i;j < banks.length-1; j++) {
                        banks[i] = banks[i+1];
                    }
                    banks.pop();
                    return true;
                }
            }
        }
        return false;
    }

    function addCustomer(string memory customerEmail, string memory customerPassword, string memory customerData, address bankAddress) public payable returns(bool){        
        if (msg.sender == admin){
            for (uint i=0;i<customers.length; i++){
                if(isEqual(customers[i].e_mail, customerEmail)){
                    return false; //already exists
                }
            }
            
            customers.push(Customer(customerEmail, customerPassword, customerData, bankAddress));
            return true; //successful
        }

        return false; //general unsuccessful
    }

    function removeCustomer(string memory customerEmail) public payable returns(bool){
        if (msg.sender == admin){
            for(uint i = 0; i < customers.length; i++) {
                if(keccak256(bytes(customers[i].e_mail)) == keccak256(bytes(customerEmail))) {
                    for(uint j = i;j < customers.length-1; j++) {
                        customers[i] = customers[i+1];
                    }
                    customers.pop();
                    return true;
                }
            }
        }
        return false;
    }

    function makeRequest(string memory customerEmail, string memory customerData, address bankAddress) public payable returns(bool){
        for (uint i=0;i<requests.length;i++){
            if (isEqual(customerEmail, requests[i].e_mail)){
                return false; //request exists
            }
        }

        requests.push(KYC_Request(customerEmail, customerData, bankAddress));
        return true;
    }
}