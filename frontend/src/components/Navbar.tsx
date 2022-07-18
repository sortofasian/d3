import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav
                className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top'
                id='mainNav'
            >
                <div className='container-md'>
                    <h1 className='sr-only'>
                        <img src='img/Dimension_Cubed-Main_Logo.png' alt='' />
                    </h1>
                    <div className='container-fluid'>
                        <a className='navbar-brand js-scroll-trigger' href='/'>
                            &nbsp;
                            <img src='img/Dimension_Cubed-Main_Logo.png' alt='' />
                        </a>
                        <button
                            className='navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-secondary rounded'
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarResponsive'
                            aria-controls='navbarResponsive'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span>Menu</span> <i className='fas fa-bars'></i>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarResponsive'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item mx-0 mx-lg-1'>
                                    <a
                                        className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                                        href='/#about'
                                    >
                                        <span>About us</span>
                                    </a>
                                </li>
                                <li className='nav-item mx-0 mx-lg-1'>
                                    <a
                                        className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                                        href='/#Services'
                                    >
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className='nav-item mx-0 mx-lg-1'>
                                    <Link
                                        to='/store'
                                        className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                                    >
                                        Store
                                    </Link>
                                </li>
                                <li className='nav-item mx-0 mx-lg-1'>
                                    <a
                                        className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                                        href='/#contact'
                                    >
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ height: '115.8px' }}></div>
        </>
    )
}

export default Navbar
