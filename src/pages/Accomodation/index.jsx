import Collapse from "../../components/Collapse"
import { list } from '../../datas/list';
import '../../pages/Accomodation/styles.css'
import Carousel from "../../components/Carousel";
import Tags from "../../components/Tags"
import Rating from "../../components/Rating";
import { useParams, Navigate } from "react-router-dom";


function Accomodation(){

    const { id } = useParams();
    const info = list.find((accomodation) => accomodation.id === id)
    if(!info) {
        return <Navigate to="/404" />
    }

    return (
        <body className="accomodationBody">
            <Carousel
                key={info.id}
                pictures={info.pictures} 
            />

            <div className="accomodationInfos">

            <div className="accomodationDetails">
                <div className="text">
                <h2 className="accomodationTitle">{info.title}</h2>
                <h3 className="accomodationLocation"> {info.location}</h3>
                </div>

                <div className="accomodationTags">
                    {info.tags.map((tag, index) => (
                    <Tags key={index} tag={tag} />
                    ))}
                </div>
            </div>          

            <div className="hostRating">
            
            <div className="host">                              
                <p className="profilName">{info.host && info.host.name}</p>
                <div className="pictureBackground"><img src={info.host && info.host.picture} alt="photo de profil" className="profilPic"/></div>
            </div>
            <Rating rating={info.rating} />
            
            </div>

            </div>

            <div className="accomodationCollapse">
            <div className="accomodationDescription">
                <Collapse
                    title="Description"
                    description={info.description}
                />
            </div>
            

            <div className="facilities">
                <Collapse
                    title="Equipements"
                    description={info.equipments.map((house) => (
                        <div key={house}>{house}</div>
                    ))}
                />
            </div>
            </div>
            
         </body>
    )
    }

         


export default Accomodation