import { Link } from 'react-router-dom'
import './header.scss'

import LOGO from '../../assets/LOGO.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={LOGO} alt="kasa logo" className="header__logo"/>
            <nav className="header__link">
                <Link to="/" className="header__link__child header__link__child--active">Accueil</Link>
                <Link to="/about" className="header__link__child">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
