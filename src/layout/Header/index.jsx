import { Link } from 'react-router-dom'
import './header.scss'

import LOGO from '../../assets/LOGO.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={LOGO} alt="kasa logo" className="header__logo"/>
            <nav className="header__nav">
                <Link to="/" className="nav__link nav__link--active">Accueil</Link>
                <Link to="/about" className="nav__link">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
