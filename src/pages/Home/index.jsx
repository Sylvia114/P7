import '../../pages/Home/styles.css'
import { list } from '../../datas/list';
import homeBackground from '../../assets/homeBackground.png';
import Card from '../../components/Card/index';

function Home() {
  return <body className='homeBody'>

  <div className='homeContainer'>   
  <h2 className='homeText'>Chez vous, partout et ailleurs</h2>
  <div className='homeShadow'></div>
  <img src={homeBackground} alt="Paysage" className='homeImage'/>
  </div>

  <Card />

</body>
}

export default Home
