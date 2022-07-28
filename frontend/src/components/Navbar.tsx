import './Navbar.scss'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

type Page = { route: string; label: string }
type Props = {
    pages: Array<Page>
}

function Navbar({ pages }: Props) {
    let i = 0
    const links = pages.map((page) => {
        return (
            <HashLink to={page.route} key={i++}>
                <p>{page.label}</p>
            </HashLink>
        )
    })

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-item'>
                    <img src='img/Dimension_Cubed-Main_Logo.png' className='navbar-logo' alt='' />
                </Link>

                <div className='navbar-links navbar-item'>{links}</div>
            </nav>
            <div style={{ height: '100px' }} />
        </>
    )
}

export default Navbar
