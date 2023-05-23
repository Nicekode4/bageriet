import React from 'react'
import { NewsletterStyle } from './Newsletter.style'

function Newsletter() {
  return (
    <NewsletterStyle>
        <h2>Tilmeld dig vores nyhedsbrev</h2>
        <p>Der ertilgængelige</p>
        <div>
            <img src="" alt="letter" />
            <input type="email" placeholder='Indtast din email...' name="" id="" />
            <button>Tilmeld</button>
        </div>
    </NewsletterStyle>
  )
}

export default Newsletter