import './Footer.scss'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
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
                    <FontAwesomeIcon className='icon' icon={faFacebookF} />
                    <FontAwesomeIcon className='icon' icon={faTwitter} />
                    <FontAwesomeIcon className='icon' icon={faDiscord} />
                    <FontAwesomeIcon className='icon' icon={faTiktok} />
                    <FontAwesomeIcon className='icon' icon={faYoutube} />
                </div>
            </div>

            <div className='footer-copyright'>©Dimension Cubed 2022. All Rights Reserved</div>
        </footer>
    )
}

export default Footer
