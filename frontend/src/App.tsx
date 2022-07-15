import { Route, Routes } from 'react-router-dom'

import About from './pages/About'
import NotFound from './pages/NotFound'
import Store from './pages/Store'

function App() {
    return (
        <Routes>
            <Route path='/' element={<About />} />
            <Route path='/store' element={<Store />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
