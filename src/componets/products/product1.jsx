import React, { useEffect, useState } from 'react'
import styles from './styles/product1.module.css'
import { Button, Card,  } from 'react-bootstrap';

 export let Addf = function AddtoCart() {
  const [Cart, SetCart] = useState(0)
return (
  
  SetCart(Cart+1)
     
  
);
};


function Product1() {


  
   const  [productdata, setProductdata] = useState([]);

    useEffect(()=>{
      
    fetch('https://fakestoreapi.com/products')
   .then( res => {return res.json()})
   .then(res => {return setProductdata(res);})
  //  console.log(productdata)
    },[]);
    
   
    
    
  return (
  
    <div className={styles.bodydiv}>

     <div>
    <h1 style={{textAlign:"center"}}>Latest Products</h1>
    <hr  style={{width:"50%", marginLeft:"400px"}}/>
    </div>

     <div className={styles.buttons}>
      <button style={{borderRadius:"5px"}}>All</button> 
      <button style={{borderRadius:"5px"}}>Men's Clothing</button>
      <button style={{borderRadius:"5px"}}>women's Clothing</button>
      <button style={{borderRadius:"5px"}}>jewelery</button>
      <button style={{borderRadius:"5px"}}>Electronics</button>
      </div> 
        <div className={styles.allproductsdiv} >
          
          {productdata.map((value,index)=>{
            return (
             <>
             <div className={styles.carddiv}>
          <Card className={styles.cardd} style={{ width: '18rem',  }} key={index}>
               <Card.Img variant="top" src={value.image} style={{height:"170px"}} />
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Text>
        <h1 style={{textAlign:"center"}}>${value.price}</h1>
        </Card.Text>
        <Button variant="primary" onClick={Addf} style={{marginLeft:"30%" ,backgroundColor:"green"}}>Add to Cart</Button>
        <br />
        <br />
        <Button  variant="primary" style={{marginLeft:"30%"}}>Buy Now</Button>
        

      </Card.Body>
      </Card> <br />
      <br />
      </div>
      </>
    )})}
    </div>
     </div>
  );
};

export default Product1;


