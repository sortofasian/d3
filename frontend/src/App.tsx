import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page from './pages/Page'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Page />} />
            <Route element={/* 404 */ undefined} />
        </Routes>
    )
}

export default App
