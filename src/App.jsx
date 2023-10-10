import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Landingpage from './componets/landingpage'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './componets/navbar'

function App() {
  

  return (
    <div>
      <Navibar/> 
        
     <Landingpage/>
     
    </div>
   
  
  )
}

export default App ;
