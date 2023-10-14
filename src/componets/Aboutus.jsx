import React from 'react';
import styles from './aboutus.module.css'


function AboutUs() {
return (
<div className={styles.abtdiv}>
<div className={styles.aboutus}>
<h1 className={styles.h1}>About Us</h1>
<p className={styles.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse deleniti sapiente eius inventore est necessitatibus <br /> corrupti ipsa ducimus illo in quam maiores facilis, iste aliquid, molestias hic consequuntur. Illum optio blanditiis possimus quidem at, <br /> pariatur id enim necessitatibus voluptates quodrerum ut laborum ex molestiae? Reprehenderit itaque iusto nisi similique.</p>
<div className={styles.h2div}>
<h2 className={styles.h2} style={{textAlign:"start"}}>Web Design</h2>
<h2 className={styles.h2} style={{}}>PhotoShop & Editor</h2>
<h2 className={styles.h2} style={{textAlign:"end"}}>Config</h2>
</div>
</div>
</div>
);
}


export default AboutUs;