//ipfs function
import { create } from 'ipfs'
function ipfsTest(){
    const ipfs = create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https'
    })
    return ipfs
}

