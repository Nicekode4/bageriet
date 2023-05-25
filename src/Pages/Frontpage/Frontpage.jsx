import React from 'react'
import { FrontpageStyle } from './Frontpage.style'
import Values from '../../Components/Sections/Values/Values'
import Newsletter from '../../Components/Sections/Newsletter/Newsletter'
import img from "../../Images/slide1.jpg"
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Sections/Slider/Slider'
import NewsletterTwo from '../../Components/Sections/Newsletter/NewsletterTwo'
import ValuesTwo from '../../Components/Sections/Values/ValuesTwo'
import Breads from '../../Components/Sections/Breads/Breads'


function Frontpage() {
  return (
<>
            <Slider />
            <ValuesTwo />
            <NewsletterTwo />
            <Breads />
</>


  )
}

export default Frontpage