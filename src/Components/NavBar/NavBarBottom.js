import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faHome } from '@fortawesome/free-solid-svg-icons'
import './NavBarBottom.css'

const NavBarBottom = memo(() => {
    return (
        <nav className='bottom-nav'>
            <ul>
                <li>
                    <NavLink to='/portfolio-22/'>
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
                <li>
                    <NavLink to='/portfolio-22/portfolio'>Portafolio</NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
                <li>
                    <NavLink to='/portfolio-22/skills'>Habilidades</NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
                <li>
                    <NavLink to='/portfolio-22/about'>Sobre mí</NavLink>
                    <div className="pointer-container">
                        <FontAwesomeIcon className='pointer' icon={faCaretUp} />
                    </div>
                </li>
            </ul>
        </nav>
    )
})

export default NavBarBottom