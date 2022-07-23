import './Navbar.scss'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-item'>
                    <img src='img/Dimension_Cubed-Main_Logo.png' className='navbar-logo' alt='' />
                </Link>

                <div className='navbar-links navbar-item'>
                    <HashLink to='/#about'>
                        <p>About Us</p>
                    </HashLink>

                    <HashLink to='/#services'>
                        <p>Services</p>
                    </HashLink>

                    <HashLink to='/#contact'>
                        <p>Contact</p>
                    </HashLink>

                    <Link to='/store'>
                        <p>Store</p>
                    </Link>
                </div>
            </nav>
            <div style={{ height: '100px' }} />
        </>
    )
}

export default Navbar
