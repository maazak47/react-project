import React from 'react';
import styles from './Contact.module.css';

function ContactMsgFrm() {
   return (
    <div className={styles.msgfrmdiv}>
       <form action="">
        <h1>Send Message</h1>
        <input type="text" placeholder='Full Name' /> <br />
        <input type="text" />
        </form>    
    </div>
  );
};

export default ContactMsgFrm;
