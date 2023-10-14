import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Landingpage from './componets/landingpage'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './componets/navbar'
import RegisterForm from './componets/RegisterForm'
import SignForm from './componets/SignForm'
import Contactus from './componets/Contactus'
import AboutUs from './componets/Aboutus'

function App() {

  // 

  return (
    <div>
      {/* 
           
             <Landingpage/>
              <SignForm/>
           <RegisterForm/> 
              <Contactus/>
            <AboutUs/>
            
      */}
      <Navibar/> 
      
      
     
    </div>
   
  
  )
}

export default App ;
