import React from 'react';
import styles from './Contact.module.css';
import ContactMsgFrm from './ContactMsgFrm';

function Contactus() {
  return (
    <div className={styles.boddy}>
      <div className={styles.headerdiv} style={{color:"white",}}>
        <h1 style={{}}>Contact Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam officia corporis, fugiat amet asperiores, id dolorem autem illo sint cumque praesentium? <br /> Ad fugit eius aliquid culpa sint officiis, rerum possimus minima deserunt iste quod neque!</p>
      </div>
     <ContactMsgFrm/>

    </div>
  );
};

export default Contactus;
