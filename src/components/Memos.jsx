import { useEffect,useState } from "react";
const Memos=({state})=>{
    const {contract}=state;
    const [memos,setMemos]=useState([]);

    useEffect(()=>{
        const memosMessage=async()=>{
          const memos=await contract.getMemos();
          setMemos(memos);
        } 
        contract && memosMessage();
      },[contract])

    return(
        <>
        <p style={{ textAlign: "center", marginTop: "20px" }}>Message</p> 
    {memos.map((memo)=>{
      return(
        <div className="container-fluid" style={{ width: "100%" }} key={Math.random()} >
        
        <table style={{  marginBottom: "10px", }}>
          <tbody> 
            <tr>
              <td style={{backgroundColor: "#96D4D4", border: "1px solid white", borderCollapse: "collapse", padding: "7px", width: "100px",}}>
                {memo.name}
              </td>
              <td style={{backgroundColor: "#96D4D4", border: "1px solid white", borderCollapse: "collapse", padding: "7px", width: "100px",}}>
                {memo.message}
              </td>
              <td style={{backgroundColor: "#96D4D4", border: "1px solid white", borderCollapse: "collapse", padding: "7px", width: "100px",}}>
              {new Date(memo.timestamp.toString()*1000).toLocaleDateString()}
              </td>
              <td style={{backgroundColor: "#96D4D4", border: "1px solid white", borderCollapse: "collapse", padding: "7px", width: "100px",}}>
                {memo.from}
              </td>
            </tr>
            </tbody>
        </table> 
        </div>
      );
    })}
    
    
        </>
    )
}
export default Memos;