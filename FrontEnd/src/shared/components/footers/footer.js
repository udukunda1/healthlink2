import './Footer.css';
import tel from '../../../image/tel.svg';
import email from '../../../image/email.svg';
import fb from '../../../image/facebook.svg';
import ig from '../../../image/ig.svg';
import yt from '../../../image/youtube.svg';


function Footer() {

    return(
        <div className='footer'>
            <div className='inner'>
                <div className='inner__one'>
                    <div className='inner__one--one'>
                        <p className='header'>Contact</p>
                        <p className='tel'><img src={tel} alt='tel' />+250790417504</p>
                        <p className='tel'><img src={email} alt='tel' />rumpatr048@gmail.com</p>
                    </div>
                    <div className='inner__one--two'>
                    <p className='header'>Quick Links</p>
                        <p>Home</p>
                        <p>Directory</p>
                        <p>Search</p>
                        <p>Get Started</p>
                    </div>
                    <div className='inner__one--three'>
                    <p className='header'>Specialities</p>
                        <p>Anesthesiology</p>
                        <p>General surgery</p>
                        <p>Psychiatry</p>
                        <p>Family medicine</p>
                    </div>
                    <div className='inner__one--four'>
                    <p className='header'>Social Media</p>
                    <p className='icons'><img src={fb} alt='our facebook' /><img src={ig} alt='our instagram' /><img src={yt} alt='our youtube' /></p>
                    </div>
                </div>
                <div className='inner__two'>
                    <p>© 2024 HealthLink. All rights reserved.</p>
                    <p className='right-one'>
                        <p>terms and conditions</p>
                        <p>privacy policy</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;