import React from 'react';
import styles from "./SignForm.module.css";
function SignForm() {
  return (
    <div className={styles.bdydiv}>
    <div style={{
              width:"310px", position:"absolute",
              top: "50%",
              left: "50%",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              }}>
        <form action="">
            <h1 style={{textAlign:"center",marginRight:"20px" ,color:"white"}}>Log&del</h1>
            <input type="text" placeholder='Userame'  style={{padding:"8px 20px",width:"290px" ,marginTop:"7px",color:'white',
             backgroundColor:"#3F51B5",filter:"brightness(60%)",
          borderColor:"#3F51B5", borderRadius:"4px", }} /> <br />
            <input type="password" placeholder='Password' style={{padding:"8px 20px", width:"290px" ,color:"white", marginTop:"10px",backgroundColor:"#3F51B5",filter:"brightness(60%)",
          borderColor:"#3F51B5", borderRadius:"4px"}} /> <br />
            <button style={{backgroundColor:"#0abde3",
                    color:"white", padding:"8px 110px",marginTop:"10px",borderColor:"#0abde3", borderRadius:"4px"}}>Let me in</button>
        </form>

    </div>
    </div>
  );
}

export default SignForm;
