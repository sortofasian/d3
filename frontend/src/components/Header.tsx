import './Header.scss'

function Header() {
    return (
        <header className='header'>
            <video autoPlay muted loop src='/header.mp4' className='header-video' />
            <div className='header-title-container'>
                <h2 className='header-title'>DIMENSION CUB3D</h2>
            </div>
        </header>
    )
}

export default Header
