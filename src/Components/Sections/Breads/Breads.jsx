import React from 'react'
import { BreadsStyle } from './Breads.style'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import bread from "../../../Images/brød/1.png"
import bread_1 from "../../../Images/brød/1.png"
import bread_2 from "../../../Images/brød/2.png"
import bread_3 from "../../../Images/brød/3.png"
import bread_4 from "../../../Images/brød/4.png"
import bread_5 from "../../../Images/brød/5.png"
import bread_6 from "../../../Images/brød/6.png"
import bread_7 from "../../../Images/brød/7.png"
import bread_8 from "../../../Images/brød/8.png"
function Breads() {
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
    <BreadsStyle>
    <h2>Nyeste bagværk</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta quidem facere tempora aliquam eius! Repudiandae iste facilis id. Quas totam doloremque, cumque similique laborum voluptate voluptates. Ut, assumenda voluptatibus!</p>
    <div className='breadSelection'>
        {data?.items?.map((item,index) => {
            if (index < 8) {
                return <div>
                <img src={require(`../../../Images/brød/${index + 1}.png`)} alt={item.title} />
                <span>Kommentare: {item.num_comments}</span>
                <h4>{item.title}</h4>
                <h5>{item.teaser}</h5>
                <button>Se mere</button>
                </div> 
            }
            
        })}
    </div>
    </BreadsStyle>
  )
}

export default Breads