import { ethers } from "ethers";
const Buy=({state})=>{

    const contribute=async(e)=>{
        e.preventDefault();
        const {contract}=state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;
        const amount={value: ethers.parseEther("0.01")};
        const transection=await contract.Contribute(name,message,amount);
        await transection.wait();
        console.log("transaction is done");
        }

    return(
        <>
        <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={contribute}>
            <label>Name</label>
            <input type="text" id="name" placeholder="Enter your name"></input>
            <br></br>
            <label>Message</label>
            <input type="text" id="message" placeholder="Enter your message"></input>
            <br></br>
            <button type="submit">Pay</button>
        </form>
        </div>
        </>
    );
}
export default Buy;