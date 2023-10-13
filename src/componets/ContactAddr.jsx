import React from 'react';
import styles from './Contact.module.css';

function ContactAddr() {
  return (
    <div className={styles.cntadrdiv}>
        <div>
          <img src="location.png" alt="" className={styles.locimg}/>  <h1 style={{fontSize:"20px", marginLeft:"7px", display:"inline-block",color:"#00cec9"}}>Address</h1>
          <p style={{fontSize:"12px",marginLeft:"-77px",marginTop:"28px",position:"absolute",display:"inline-block",color:"white"}}>4671 Sugar camp road, Owatanna,minnesota, 55060</p>
         </div>
         <div style={{marginTop:"60px"}}>
          <img src="phone.webp" alt="" className={styles.locimg}/>  <h1 style={{fontSize:"20px", marginLeft:"7px", display:"inline-block",color:"#00cec9"}}>Phone</h1>
          <p style={{fontSize:"12px",marginLeft:"-57px",marginTop:"28px",position:"absolute",display:"inline-block",color:"white"}}>507-475-60945-6094</p>
         </div>
         <div style={{marginTop:"40px"}} >
          <img src="mail.png" alt="" className={styles.locimg}/>  <h1 style={{fontSize:"20px", marginLeft:"7px", display:"inline-block",color:"#00cec9"}}>Email</h1>
          <p style={{fontSize:"12px",marginLeft:"-57px",marginTop:"28px",position:"absolute",display:"inline-block",color:"white"}}>wrub7d78ie@temporay-mail.net</p>
         </div>
        
      
    </div>
  );
}

export default ContactAddr;
