import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Inventory from './pages/Inventory'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
