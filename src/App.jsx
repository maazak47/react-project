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
import { Route, Routes } from 'react-router-dom'
import Product1 from './componets/products/product1'

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
        <Navibar/> 
            */}
            
            <Navibar/> 
           

       <Routes>
        <Route path='home' element={ <Landingpage/>}/>
        <Route path='product' element={ <Product1/> }/>
        <Route path='about' element={  <AboutUs/>}/>
        <Route path='contact' element={  <Contactus/>}/>
        <Route path='login' element={ <SignForm/>}/>
        <Route path='register' element={  <RegisterForm/>}/>
        <Route path='cart' element={ ""}/>
        <Route path='*' element={<><h1>Error 404 not found</h1></>} />
      </Routes> 
      
     
    </div>
   
  
  )
}

export default App ;
