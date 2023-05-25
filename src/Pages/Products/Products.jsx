import React from 'react'
import { ProductsStyle } from './Products.style'
import Header from '../../Components/Header/Header'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import rundstykke from "../../Images/brød/1.png"


function Products() {
    const [data,setData] = useState([])
    const [selection,setSelection] = useState(null)
    const [selectIndex,setSelectIndex] = useState(1)

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

 function onBtnClick(){

    }
  return (
    <ProductsStyle>
        <Header />
       {!selection ? <>
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
                <button onClick={() => {
                        setSelection(`${item.title}`) 
                        setSelectIndex(`${item.index}`)
                }}>Se mere</button>
                </div> 
            }
            
        })}
    </div> 
   </div>
    </> : <div className='item'>
    <h2>{selection}</h2>
    <h4>Rundstykker</h4>
    <div className='info'>
        <div className='text'>

<p><img src={rundstykke} alt={selection} />{data.items[selectIndex]?.teaser}</p>
        </div>
    
    <div className='recipie'>
        <h4>Indgridienser</h4>
        <p>50 gr gær</p>
    </div>
    </div>
    <div className='comment'>

    </div>
    </div>}
    </ProductsStyle>
  )
}

export default Products