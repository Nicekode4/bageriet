import React from 'react'
import { FrontpageStyle } from './Frontpage.style'
import Values from '../../Components/Sections/Values/Values'
import Newsletter from '../../Components/Sections/Newsletter/Newsletter'
import img from "../../Images/slide1.jpg"
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Sections/Slider/Slider'


function Frontpage() {
  return (
<>
            <Slider />
            <Values />
            <Newsletter />
</>


  )
}

export default Frontpage