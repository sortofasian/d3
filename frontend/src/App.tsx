import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Store from './pages/Store'

function App() {
    return (
        <>
            <Navbar
                pages={[
                    { route: '/#about', label: 'About' },
                    { route: '/#contact', label: 'Contact' },
                    { route: '/store', label: 'Store' }
                ]}
            />

            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/store' element={<Store />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
