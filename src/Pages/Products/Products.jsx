import React from 'react'
import { ProductsStyle } from './Products.style'
import Header from '../../Components/Header/Header'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Products() {
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.mediehuset.net/bakeonline/products');
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    console.log(data.items);
  return (
    <ProductsStyle>
        <Header />
        <h2>Vores elskede bagværk</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta quidem facere tempora aliquam eius! Repudiandae iste facilis id. Quas totam doloremque, cumque similique laborum voluptate voluptates. Ut, assumenda voluptatibus!</p>
   <div className='containerDiv'>
<div className='navMenu'>
<ul>
    <li>Rundstykker</li>
    <li>Bagettes</li>
    <li>Franskbrød</li>
    <li>Rundstykker</li>
</ul>
</div>
<div className='breadSelection'>
        {data?.items?.map((item,index) => {
            if (index < 6) {
                return <div>
                <img src={require(`../../Images/brød/${index + 1}.png`)} alt={item.title} />
                <span>Kommentare: {item.num_comments}</span>
                <h4>{item.title}</h4>
                <h5>{item.teaser}</h5>
                <button>Se mere</button>
                </div> 
            }
            
        })}
    </div> 
   </div>
    
    </ProductsStyle>
  )
}

export default Products