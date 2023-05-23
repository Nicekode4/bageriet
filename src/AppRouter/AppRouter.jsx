import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontpage from '../Pages/Frontpage/Frontpage'

function AppRouter() {
  return (
    <Routes>
        <Route index element={<Frontpage />}></Route>
    </Routes>
  )
}

export default AppRouter