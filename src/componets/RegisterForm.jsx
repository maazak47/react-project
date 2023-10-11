import React from 'react'
import styles from './Register.module.css'
import { Button, Card, ListGroup } from 'react-bootstrap';
 
function RegisterForm() {
  return (
    <>
    <div className={styles.boddy}>
        
   <div className={styles.crddiv}>
   <Card className={styles.hh} style={{ width: '23rem', height:"450px",  backgroundimage: 'linear-gradient(#f67a36,#ed008c)'}}>
     <h1></h1>
      <Card.Body>
        <Card.Title style={{marginTop:"35px"}} > <h1 style={{color:"whitesmoke"}} >Sign up</h1></Card.Title>
        <form action="" className={styles.frm}>
        <Card.Text className={styles.t1}>
        <input type="text" placeholder='User name' style={{padding:"6px 0px", borderRadius:"4px"}} /> 
          </Card.Text>
          <Card.Text style={{}}>
        <input type="email" placeholder='Email' style={{padding:"6px 0px", borderRadius:"4px"}} /> 
          </Card.Text>
          <Card.Text>
        <input type="password" placeholder='password' style={{padding:"6px 0px", borderRadius:"4px"}}/> 
          </Card.Text>
         
          <Card.Text>
             <button style={{padding:"9px 90px", backgroundColor:"#5C6BC0", borderColor:"#5C6BC0", borderRadius:"4px",}}><h6 style={{color:"whitesmoke"}}>Sign up</h6></button> <br />
          </Card.Text>
        </form>

       
        
      </Card.Body>
      
      <div 
    style={{backgroundColor:"white",
    marginTop:"10px",
     border:"2px solid white", 
     width:"23rem",
      height:"50px",
      borderTopLeftRadius:"95px",
      borderTopRightRadius:"95px"}}>
    <p style={{textAlign:"center", marginTop:"10px", color:" #4a69bd"}}>Login</p>
   </div>
    
    </Card>
  
   </div>
   
    </div>

   
    </>
  )
};

export default RegisterForm ; 
