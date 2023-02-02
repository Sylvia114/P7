import '../../components/Footer/styles.css'
import logoFooter from '../../assets/logoFooter.png'

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="Logo Kasa" className='logoFooter' />
            <p className='copyrightFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer