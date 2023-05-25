import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontpage from '../Pages/Frontpage/Frontpage'
import Newsletter from '../Components/Sections/Newsletter/Newsletter'
import Contact from '../Pages/Contact/Contact'

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Frontpage />}></Route>
        <Route path='/kontakt' element={<Contact />}></Route>
    </Routes>
  )
}

export default AppRouter