import starFull from '../../assets/starFull.png'
import starEmpty from '../../assets/starEmpty.png'
import './styles.css'

function Rating({ rating }){
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className='ratingContainer'>
            {stars.map(star => rating >= star ? (
                    <img key={star.toString()} src={starFull} alt='red_star' className='ratingStars'/>
                ) : (<img key={star.toString()} src={starEmpty} alt='grey_star' className='ratingStars'/>),
            )}
        </div>
    );
}

export default Rating