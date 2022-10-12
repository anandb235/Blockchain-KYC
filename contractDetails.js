//  the address of the smart contract

//var contractAddress = 'ReplaceContractAddressHere';

//   Abstract Binary Interface of the contract code

var abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "bankName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "bankAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "bankPassword",
				"type": "string"
			}
		],
		"name": "addBank",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "customerEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "customerPassword",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "customerData",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "bankAddress",
				"type": "address"
			}
		],
		"name": "addCustomer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "customerEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "customerData",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "bankAddress",
				"type": "address"
			}
		],
		"name": "makeRequest",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "bankName",
				"type": "string"
			}
		],
		"name": "removeBank",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "customerEmail",
				"type": "string"
			}
		],
		"name": "removeCustomer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];


//  binary information of the code

var binaryData = '608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061161f806100606000396000f3fe60806040526004361061004a5760003560e01c8063b9c730381461004f578063ccfa8e711461007f578063d32ce4ab146100af578063dee7fe8b146100df578063fc55ea9d1461010f575b600080fd5b61006960048036038101906100649190611144565b61013f565b60405161007691906112a4565b60405180910390f35b6100996004803603810190610094919061102e565b610398565b6040516100a691906112a4565b60405180910390f35b6100c960048036038101906100c49190610fe5565b610659565b6040516100d691906112a4565b60405180910390f35b6100f960048036038101906100f491906110b9565b610956565b60405161010691906112a4565b60405180910390f35b61012960048036038101906101249190610fe5565b610b30565b60405161013691906112a4565b60405180910390f35b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561038b5760005b60018054905081101561027f5761025d600182815481106101bd576101bc61154f565b5b906000526020600020906004020160000180546101d990611416565b80601f016020809104026020016040519081016040528092919081815260200182805461020590611416565b80156102525780601f1061022757610100808354040283529160200191610252565b820191906000526020600020905b81548152906001019060200180831161023557829003601f168201915b505050505087610dd5565b1561026c576000915050610390565b808061027790611479565b915050610199565b50600160405180608001604052808781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff16815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000190805190602001906102fe929190610df0565b50602082015181600101908051906020019061031b929190610df0565b506040820151816002019080519060200190610338929190610df0565b5060608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505060019050610390565b600090505b949350505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561064d5760005b600280549050811015610553576104b685600283815481106104175761041661154f565b5b9060005260206000209060040201600001805461043390611416565b80601f016020809104026020016040519081016040528092919081815260200182805461045f90611416565b80156104ac5780601f10610481576101008083540402835291602001916104ac565b820191906000526020600020905b81548152906001019060200180831161048f57829003601f168201915b5050505050610dd5565b806105315750600281815481106104d0576104cf61154f565b5b906000526020600020906004020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b15610540576000915050610652565b808061054b90611479565b9150506103f2565b50600260405180608001604052808681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200184815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000190805190602001906105d3929190610df0565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003019080519060200190610641929190610df0565b50505060019050610652565b600090505b9392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561094c5760005b60028054905081101561094a57610777600282815481106106d7576106d661154f565b5b906000526020600020906004020160000180546106f390611416565b80601f016020809104026020016040519081016040528092919081815260200182805461071f90611416565b801561076c5780601f106107415761010080835404028352916020019161076c565b820191906000526020600020905b81548152906001019060200180831161074f57829003601f168201915b505050505084610dd5565b156109375760008190505b6001600280549050610794919061138b565b8110156108b25760026001836107aa9190611335565b815481106107bb576107ba61154f565b5b9060005260206000209060040201600283815481106107dd576107dc61154f565b5b906000526020600020906004020160008201816000019080546107ff90611416565b61080a929190610e76565b506001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028201548160020155600382018160030190805461089090611416565b61089b929190610e76565b5090505080806108aa90611479565b915050610782565b5060028054806108c5576108c4611520565b5b6001900381819060005260206000209060040201600080820160006108ea9190610f03565b6001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090556003820160006109299190610f03565b505090556001915050610951565b808061094290611479565b9150506106b3565b505b600090505b919050565b600080600090505b600380549050811015610a4457610a2285600383815481106109835761098261154f565b5b9060005260206000209060030201600001805461099f90611416565b80601f01602080910402602001604051908101604052809291908181526020018280546109cb90611416565b8015610a185780601f106109ed57610100808354040283529160200191610a18565b820191906000526020600020905b8154815290600101906020018083116109fb57829003601f168201915b5050505050610dd5565b15610a31576000915050610b29565b8080610a3c90611479565b91505061095e565b50600360405180606001604052808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000019080519060200190610abd929190610df0565b506020820151816001019080519060200190610ada929190610df0565b5060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050600190505b9392505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610dcb5760005b600180549050811015610dc957828051906020012060018281548110610bb357610bb261154f565b5b9060005260206000209060040201600001604051610bd1919061128d565b60405180910390201415610db65760008190505b60018080549050610bf6919061138b565b811015610d295760018083610c0b9190611335565b81548110610c1c57610c1b61154f565b5b906000526020600020906004020160018381548110610c3e57610c3d61154f565b5b90600052602060002090600402016000820181600001908054610c6090611416565b610c6b929190610e76565b506001820181600101908054610c8090611416565b610c8b929190610e76565b506002820181600201908054610ca090611416565b610cab929190610e76565b506003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050508080610d2190611479565b915050610be5565b506001805480610d3c57610d3b611520565b5b600190038181906000526020600020906004020160008082016000610d619190610f03565b600182016000610d719190610f03565b600282016000610d819190610f03565b6003820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055505090556001915050610dd0565b8080610dc190611479565b915050610b8a565b505b600090505b919050565b60008180519060200120838051906020012014905092915050565b828054610dfc90611416565b90600052602060002090601f016020900481019282610e1e5760008555610e65565b82601f10610e3757805160ff1916838001178555610e65565b82800160010185558215610e65579182015b82811115610e64578251825591602001919060010190610e49565b5b509050610e729190610f43565b5090565b828054610e8290611416565b90600052602060002090601f016020900481019282610ea45760008555610ef2565b82601f10610eb55780548555610ef2565b82800160010185558215610ef257600052602060002091601f016020900482015b82811115610ef1578254825591600101919060010190610ed6565b5b509050610eff9190610f43565b5090565b508054610f0f90611416565b6000825580601f10610f215750610f40565b601f016020900490600052602060002090810190610f3f9190610f43565b5b50565b5b80821115610f5c576000816000905550600101610f44565b5090565b6000610f73610f6e846112e4565b6112bf565b905082815260208101848484011115610f8f57610f8e6115b2565b5b610f9a848285611407565b509392505050565b600081359050610fb1816115d2565b92915050565b600082601f830112610fcc57610fcb6115ad565b5b8135610fdc848260208601610f60565b91505092915050565b600060208284031215610ffb57610ffa6115bc565b5b600082013567ffffffffffffffff811115611019576110186115b7565b5b61102584828501610fb7565b91505092915050565b600080600060608486031215611047576110466115bc565b5b600084013567ffffffffffffffff811115611065576110646115b7565b5b61107186828701610fb7565b935050602061108286828701610fa2565b925050604084013567ffffffffffffffff8111156110a3576110a26115b7565b5b6110af86828701610fb7565b9150509250925092565b6000806000606084860312156110d2576110d16115bc565b5b600084013567ffffffffffffffff8111156110f0576110ef6115b7565b5b6110fc86828701610fb7565b935050602084013567ffffffffffffffff81111561111d5761111c6115b7565b5b61112986828701610fb7565b925050604061113a86828701610fa2565b9150509250925092565b6000806000806080858703121561115e5761115d6115bc565b5b600085013567ffffffffffffffff81111561117c5761117b6115b7565b5b61118887828801610fb7565b945050602085013567ffffffffffffffff8111156111a9576111a86115b7565b5b6111b587828801610fb7565b935050604085013567ffffffffffffffff8111156111d6576111d56115b7565b5b6111e287828801610fb7565b92505060606111f387828801610fa2565b91505092959194509250565b611208816113d1565b82525050565b6000815461121b81611416565b611225818661132a565b94506001821660008114611240576001811461125157611284565b60ff19831686528186019350611284565b61125a85611315565b60005b8381101561127c5781548189015260018201915060208101905061125d565b838801955050505b50505092915050565b6000611299828461120e565b915081905092915050565b60006020820190506112b960008301846111ff565b92915050565b60006112c96112da565b90506112d58282611448565b919050565b6000604051905090565b600067ffffffffffffffff8211156112ff576112fe61157e565b5b611308826115c1565b9050602081019050919050565b60008190508160005260206000209050919050565b600081905092915050565b6000611340826113fd565b915061134b836113fd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113805761137f6114c2565b5b828201905092915050565b6000611396826113fd565b91506113a1836113fd565b9250828210156113b4576113b36114c2565b5b828203905092915050565b60006113ca826113dd565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b6000600282049050600182168061142e57607f821691505b60208210811415611442576114416114f1565b5b50919050565b611451826115c1565b810181811067ffffffffffffffff821117156114705761146f61157e565b5b80604052505050565b6000611484826113fd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156114b7576114b66114c2565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6115db816113bf565b81146115e657600080fd5b5056fea26469706673582212202b1867c9684237a852c4f68808a1916b5add767d6c5cda5a7de34eb05f48645f64736f6c63430008070033';

//  IDs of all elements of the KYC form

var allIds = [
    "username",
    "first_name",
    "middle_name",
    "last_name",
    "occupation",
    "income_range",
    "DOB",
    "gender",
    "address",
    "phone_1",
    "phone_2",
    "email",
    "country_res"
];