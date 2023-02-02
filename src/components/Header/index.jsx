import { Link } from 'react-router-dom'
import '../../components/Header/styles.css'
import Banner from '../Banner'
import logo from '../../assets/logo.png'
 
function Header() {
    return (
        <header>
        <Banner>            
			<Link to="/">
                <img src={logo} alt="logo Kasa" className='logo'/>
            </Link>
        </Banner>
        <nav>
            <Link to="/" className='navbar-home'>Accueil</Link>
            <Link to="/aboutUs" className='navbar-aboutUs'>A propos</Link>
        </nav>
        </header>
    )
}

export default Header