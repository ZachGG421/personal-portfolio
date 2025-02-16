import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoZG from '../../assets/images/zg_logo_noBG.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoZG} alt="logo" />
            {/*<img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}

        </Link>
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        
        <ul>
            <li>
                
                
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/zachary-garcia421/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a target="_blank" rel='noreferrer' href="https://www.github.com/ZachGG421">
                    <FontAwesomeIcon icon={faGithub} />
                </a>

            </li>
        </ul>
    </div>

)
export default Sidebar