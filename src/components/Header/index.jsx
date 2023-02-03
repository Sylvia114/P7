import { Link } from 'react-router-dom'
import '../../components/Header/styles.css'
import logo from '../../assets/logo.png'
 
function Header() {
    return (
        <header>
        <div>            
			<Link to="/">
                <img src={logo} alt="logo Kasa" className='logo'/>
            </Link>
        </div>
        <nav>
            <Link to="/" className='navbar-home'>Accueil</Link>
            <Link to="/aboutUs" className='navbar-aboutUs'>A propos</Link>
        </nav>
        </header>
    )
}

export default Header