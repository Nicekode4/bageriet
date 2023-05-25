import React from 'react'
import { ContactStyle } from './Contact.style'
import Header from '../../Components/Header/Header'

function Contact() {
  return (
    <ContactStyle>
        <Header />
           <h2>Kontakt os</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo incidunt dolorem iste quas labore odio sit obcaecati libero excepturi sed, mollitia ipsa facere nam doloribus, consequuntur vel dolor sequi.</p>
           <div className='containerDiv'>
            <form action="">
            <input type="text" name="" id="" placeholder='Dit navn..' />
            <input type="email" name="" id="" placeholder='Din email..' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Din besked..'></textarea>
            <button type="submit">Send</button>
            </form>
            <div className='mapDiv'>
            <h4>adresse: <span>Øster utterup vej 1</span></h4>
            <h4>telefon: <span>55555555</span></h4>
            <div ><iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=57.0519336,9.9599929+(Tech%20college)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe></div>
            </div>
            </div> 
    </ContactStyle>

  )
}

export default Contact