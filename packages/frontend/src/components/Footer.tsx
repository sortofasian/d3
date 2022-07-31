import './Footer.scss'

import {
    faFacebookF,
    faInstagram,
    faTiktok,
    faTwitter,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-logo'>
                    <img src='img/Dimension_Cubed-Roundal_Logo.png' alt='d3 logo' />
                </div>

                <div className='footer-connect'>
                    <h3>Connect</h3>
                    <a href='https://facebook.com/dimensioncub3d'>
                        <FontAwesomeIcon className='footer-icon' icon={faFacebookF} />
                    </a>
                    <a href='https://twitter.com/DimensionCub3d'>
                        <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
                    </a>
                    <a href='https://www.instagram.com/dimensioncub3d/'>
                        <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
                    </a>
                    <a href='https://www.tiktok.com/@dimensioncub3d'>
                        <FontAwesomeIcon className='footer-icon' icon={faTiktok} />
                    </a>
                    <a href='https://www.youtube.com/channel/UCAnz3XVXXbfTXRo9gmgmiyg'>
                        <FontAwesomeIcon className='footer-icon' icon={faYoutube} />
                    </a>
                </div>
            </div>

            <div className='footer-copyright'>©Dimension Cubed 2022. All Rights Reserved</div>
        </footer>
    )
}

export default Footer
