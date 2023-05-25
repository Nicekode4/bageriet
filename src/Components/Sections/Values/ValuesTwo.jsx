import React from 'react'
import { ValuesTwoStyle } from './ValuesTwo.style'
import bread from "../../../Images/brød/article.jpg"
import girlWithCoffee from "../../../Images/brød/article2.jpg"
import girlLookingAtBread from "../../../Images/brød/article3.jpg"

function ValuesTwo() {
  return (
    <ValuesTwoStyle>
        <h2>Vi skaber lækkert brød</h2>
        <p>Der er mange</p>
        <div className='cardContainer'>
            <div>
                <img src={bread} alt="Brød" />
                <h5>Kreativitet dyrkes</h5>
                <p>der er mnage</p>
            </div>
            <div>
                <img src={girlWithCoffee} alt="Brød" />
                <h5>Kreativitet dyrkes</h5>
                <p>der er mnage</p>
            </div>
            <div>
                <img src={girlLookingAtBread} alt="Brød" />
                <h5>Kreativitet dyrkes</h5>
                <p>der er mnage</p>
            </div>
        </div>
    </ValuesTwoStyle>
  )
}

export default ValuesTwo