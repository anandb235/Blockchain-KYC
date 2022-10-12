// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract KYC_Contract{

    address admin; 


    struct Customer {
        string e_mail;
        string password;
        string data;
        string[] banks;
    }

    struct Bank {
        string name;
        address wallet_address;
        uint kyc_count;
        string password;
    }

    struct KYC_Request {
        string e_mail;
        string password;
        string data;
        address bank_address;
    }

    Customer[] customers;

    Bank[] banks;

    KYC_Request[] requests;


    constructor() {
        admin = msg.sender;
    }

    function isEqual(string memory str1, string memory str2) private pure returns(bool){
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

    function getBankList() public view returns(Bank[] memory){
        return banks;
    }

    function getCustomerList() public view returns(Customer[] memory){
        return customers;
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

    function addCustomer(string memory customerEmail, string memory customerPassword) public payable returns(bool){        
        if (msg.sender == admin){
            for (uint i=0;i<customers.length; i++){
                if(isEqual(customers[i].e_mail, customerEmail)){
                    return false; //already exists
                }
            }

            customers.push();
            uint _newIndex = customers.length - 1;
            customers[_newIndex].e_mail = customerEmail;
            customers[_newIndex].password = customerPassword;

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

    function makeRequest(string memory customerEmail, string memory customerPassword, string memory customerData, string memory bankName) public payable returns(bool){
        for (uint i=0;i<requests.length;i++){
            if (isEqual(customerEmail, requests[i].e_mail)){
                return false; //request exists
            }
        }
        Bank[] memory currentList = getBankList();
        address _bankAddress;
        for(uint i=0;i<currentList.length;i++){
            if (isEqual(currentList[i].name, bankName)){
                _bankAddress = currentList[i].wallet_address;
            }
        }
        requests.push(KYC_Request(customerEmail, customerPassword, customerData, _bankAddress));
        return true;
    }

    function removeRequest(string memory customerEmail) public payable returns(bool){
        for (uint i=0;i<requests.length;i++){
            if (isEqual(customerEmail, requests[i].e_mail)){
                for(uint j = i;j < requests.length-1; j++) {
                        requests[i] = requests[i+1];
                    }

                requests.pop();
                return true;
            }
        }

        return false;
    }

    function getRequestList() public view returns(KYC_Request[] memory){
        return requests;
    }

    
    function setCustomerData(string memory customerEmail, string memory customerPassword, string memory customerData) public payable returns(bool){
        for (uint i = 0;i<customers.length;i++){
            if (isEqual(customers[i].e_mail, customerEmail) && isEqual(customers[i].password, customerPassword)){
                customers[i].data = customerData;
                return true;
            }
        }

        return false; //user non-existent
    }
    function getBankDetails(string memory bankName) public view returns(Bank memory){
        Bank memory temp;

        for(uint i=0;i<banks.length;i++){
            if(isEqual(banks[i].name, bankName)){
                temp = banks[i];
            }

        }

        return temp;
    }
    function getCustomerDetails(string memory customerEmail, string memory bankName) public view returns(Customer memory){

        Customer memory temp;
        for(uint i=0;i<customers.length;i++){
            if (isEqual(customers[i].e_mail, customerEmail)){
                for (uint j=0; j<customers[i].banks.length;j++){
                    if (isEqual(customers[i].banks[j], bankName)){
                        temp = customers[i];
                    }
                }                
            }
        }

        return temp;
    }

    function authorizeBank(string memory customerEmail, string memory bankName) public payable returns(bool){
        for(uint i=0;i<customers.length;i++){
            if (isEqual(customers[i].e_mail, customerEmail)){
                for(uint j=0;i<customers[i].banks.length;j++){
                    if (isEqual(customers[i].banks[j], bankName)){
                        return false; //already authorized
                    }
                }
                customers[i].banks.push(bankName);
                return true;
            }
        }

        return false;
    }

    function unauthorizeBank(string memory customerEmail, string memory bankName) public payable returns(bool){
        for(uint i=0;i<customers.length;i++){
            if (isEqual(customers[i].e_mail, customerEmail)){
                for(uint j=0;i<customers[i].banks.length;j++){
                    if (isEqual(customers[i].banks[j], bankName)){
                        for(uint k = j;k < customers[i].banks.length-1; k++) {
                            customers[i].banks[j] = customers[i].banks[j+1];
                        }

                        customers[i].banks.pop();
                        return true;
                    }                
                }

                return false;
            }
        }

        return false;
    }    
}