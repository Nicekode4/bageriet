import React from 'react'
import { FrontpageStyle } from './Frontpage.style'
import Values from '../../Components/Sections/Values/Values'
import Newsletter from '../../Components/Sections/Newsletter/Newsletter'

function Frontpage() {
  return (
    <FrontpageStyle>
            <Values />
            <Newsletter />
    </FrontpageStyle>
  )
}

export default Frontpage