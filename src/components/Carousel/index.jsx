import { useState } from "react";
import nextArrow from "../../assets/arrowLeft.png"
import prevArrow from "../../assets/arrowRight.png"
import '../../components/Carousel/styles.css'

function Carousel({ pictures }) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }; 

    const prev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }; 

    return (
        <div className="carousel"> 
            <div className="carouselImageContainer">           
            <img key={pictures.id} src={pictures[current]} alt={pictures.title} className="carouselImage"/>            
            </div>

            <div className="carouselIcon">
            <img className="carouselIconNext" src={nextArrow} onClick={next} alt="Photo suivante"/>
            <img className="carouselIconPrev" src={prevArrow} onClick={prev} alt="Photo précedente"/>
            </div>                                 
                                  
        </div>
    )
}

export default Carousel; 

