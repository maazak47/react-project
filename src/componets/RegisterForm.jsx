import React from 'react'
import styles from './Register.module.css'
import { Button, Card, ListGroup } from 'react-bootstrap';
 
function RegisterForm() {
  return (
    <>
    <div className={styles.boddy}>
        
   <div>
   <Card style={{ width: '18rem', height:"350px"}}>
     <h1></h1>
      <Card.Body>
        <Card.Title> <h1>Sign up</h1></Card.Title>
        <form action="">
        <Card.Text>
        <input type="text" placeholder='User name' /> 
          </Card.Text>
          <Card.Text>
        <input type="email" placeholder='Email' /> 
          </Card.Text>
          <Card.Text>
        <input type="password" placeholder='password'/> 
          </Card.Text>
          <Card.Text>
             <button style={{padding:"4px 55px", backgroundColor:"#5C6BC0", borderRadius:"4px"}}>Sign up</button> <br />
          </Card.Text>
        </form>
        
      </Card.Body>
      
    
    </Card>

   </div>
    </div>

   
    </>
  )
};

export default RegisterForm ; 
