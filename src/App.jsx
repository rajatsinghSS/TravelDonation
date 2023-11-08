import { useState,useEffect } from 'react'
import './App.css'
import abi from "./artifacts/contracts/AyodhyaYatra.sol/AyodhyaYatra.json";
import {ethers} from "ethers";
import Memos from './components/Memos';
import Buy from './components/Buy';

function App() {
  const [state,setState]=useState({provider:null,signer:null,contract:null});
  const [accounts,setAccounts]=useState("please connect to metamask account");
  

  const contractAddress="0x17Eb06657760dAa97FD0574FE3EAD6C7a76788eB";
  useEffect(()=>{
    const instance=async()=>{  
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = await provider.getSigner();
      const contract=new ethers.Contract(contractAddress ,abi.abi,signer);
      setState({provider,signer,contract});
      setAccounts(accounts);
      
      
    }
    instance();
    
  },[]);
  
    


  return (
    <> 
    <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>  
    <p>connected account : {accounts}</p>
    <Buy state={state}></Buy>
    <Memos state={state}></Memos>
    </div>
    </>
  )
}

export default App
