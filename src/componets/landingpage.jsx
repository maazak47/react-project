import React from 'react'
import styles from "./Landingpage.module.css"

function Landingpage() {
  return (
   <div style={{
    backgroundImage:"url(./imgs/hd_bg.jpg)",
    height : "100vh",
    width: "100vw",
    backgroundSize: "cover"
   }}> 
     <h1 style={{color:"white",textAlign: "center"}}>NEW SESSION ARRIVALS</h1>
     
    </div>
  )
}

export default Landingpage;
