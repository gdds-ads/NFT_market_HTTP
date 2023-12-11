import { ethers, JsonRpcProvider } from "ethers";
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config("./.env");

export async function mint(address, uri) {
    const provider = new JsonRpcProvider('http://127.0.0.1:8545');
    const signer = await provider.getSigner()
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const MyNFTAbi = JSON.parse(fs.readFileSync('./abis/NFT.json'));
    const MyNFTContract = new ethers.Contract(contractAddress, MyNFTAbi, signer);

    const result = await MyNFTContract.safeMint(address, uri);
    console.log(result.hash);
}

