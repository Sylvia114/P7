import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { list } from '../../datas/list'
import '../../components/Card/styles.css'

function Card({ title, cover, id }) {

    return (
        <div className='galleryHome'>
        {list.map((accomodation) => (
            <Link to={`/accomodation/${accomodation.id}`} className='cardLink'
            key={accomodation.id}>
                <div className='cardElement'>
                    <img src={accomodation.cover} alt="photo du logement" className='cardImage'/>
                    <div className='cardShadow'></div>
                    <p className='cardTitle'>{accomodation.title}</p>
                </div>
            </Link>
        ))}
        </div>
    )
}

Card.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string,
}
 
export default Card