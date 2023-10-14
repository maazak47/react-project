import React from 'react';
import styles from './Contact.module.css';

function ContactMsgFrm() {
   return (
    <div className={styles.msgfrmdiv}>
       <form action="">
        <h1 style={{marginLeft:'50px', marginTop:"70px"}}>Send Message</h1>
        <input className={styles.input} type="text" placeholder='Full Name' /> <br />

        <input className={styles.input} type="email" placeholder='Email' /> <br />
         <textarea className={styles.textarea} name="" id="" cols="56" rows="2" placeholder='Type your Message'></textarea> <br />
         <button className={styles.msgbtn}>Send</button>
        </form>    
    </div>
  );
};

export default ContactMsgFrm;
