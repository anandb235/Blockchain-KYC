const { create } = require('ipfs-http-client');

async function ipfsTest() {
    
    console.log(create);
    const client = create('https://ipfs.infura.io/5001/api/v0');
    var bankTest = document.getElementById("username").value;

    const data = JSON.stringify({
        name: "JSON Statehem",
        link0: "stackexchange.com",
        link1: "github.com",
        link2: "myfacebook.com"
    })

    const ipfsHash = await client.add(data);
    const ipfsUrl = `https://ipfs.infura.io/ipfs/${ipfsHash.path}`;

    console.log(ipfsUrl);
}