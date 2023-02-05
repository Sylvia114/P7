import { Link } from 'react-router-dom'
import '../../components/Error/styles.css'

function Error() {
    return (
        <div className='errorContainer'>
            <p className='errorNumber'>404</p>
            <p className='errorText'>Oups! La page que vous demandez n'existe pas</p>
            <div className='errorLink'><Link to="/" className='fontLink'>Retourner sur la page d'accueil</Link></div>
        </div>
    )
}
 
export default Error