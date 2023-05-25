import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontpage from '../Pages/Frontpage/Frontpage'
import Newsletter from '../Components/Sections/Newsletter/Newsletter'

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Frontpage />}></Route>
        <Route path='/news' element={<Newsletter />}></Route>
    </Routes>
  )
}

export default AppRouter