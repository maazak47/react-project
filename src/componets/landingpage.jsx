import React from 'react'
import styles from "./Landingpage.module.css"

function Landingpage() {
  return (
   <div style={{
    backgroundImage:"url(./imgs/hd_bg.jpg)",
    
    display:"flex",
     height:"100vh",
     width:"100vw",
     backgroundSize:"100% 100%",
     position:"fixed",
     backgroundRepeat:"no-repeat"
   }}> 
      <div style={{marginTop:'350px',marginLeft:"140px",}}>
      <h1 style={{color:"white", fontSize:"70px", textShadow:" 1px 1px  #000000" }}>NEW SESSION ARRIVALS</h1>
      <p style={{color:"white", fontSize:"45px"}} >CHECK OUT ALL TRENDS <span style={{color:"red" ,fontWeight:"bold"}}>MENS_</span></p>
      </div>
      
     
     
    </div>
  )
}

export default Landingpage;
