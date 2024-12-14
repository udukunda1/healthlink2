import './Footer.css';
import tel from '../../../image/tel.svg';
import email from '../../../image/email.svg';
import fb from '../../../image/facebook.svg';
import ig from '../../../image/ig.svg';
import yt from '../../../image/youtube.svg';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import { Link } from 'react-router-dom';


function Footer() {
    const { translations } = useContext(LanguageContext);

    return(
        <div className='footer'>
            <div className='inner'>
                <div className='inner__one'>
                    <div className='inner__one--one'>
                        <p className='header'>{translations.footer.contact}</p>
                        <p className='tel'><img src={tel} alt='tel' />+250790417504</p>
                        <p className='tel'><img src={email} alt='tel' />rumpatr048@gmail.com</p>
                    </div>
                    <div className='inner__one--two'>
                    <p className='header'>{translations.footer.quickLinks.header}</p>
                        <Link to='/'>{translations.footer.quickLinks.home}</Link>
                        <Link to='/directory'>{translations.footer.quickLinks.directory}</Link>
                        <Link to='/search'>{translations.footer.quickLinks.search}</Link>
                        <Link to='/authenticate/student/signup'>{translations.footer.quickLinks.getStarted}</Link>
                    </div>
                    <div className='inner__one--three'>
                    <p className='header'>{translations.footer.specialities.header}</p>
                        <Link to='/directory'>{translations.footer.specialities.anesthesiology}</Link>
                        <Link to='/directory'>{translations.footer.specialities.generalSurgery}</Link>
                        <Link to='/directory'>{translations.footer.specialities.psychiatry}</Link>
                        <Link to='/directory'>{translations.footer.specialities.familyMedicine}</Link>
                    </div>
                    <div className='inner__one--four'>
                    <p className='header'>{translations.footer.socialMedia}</p>
                    <p className='icons'><img src={fb} alt='our facebook' /><img src={ig} alt='our instagram' /><img src={yt} alt='our youtube' /></p>
                    </div>
                </div>
                <div className='inner__two'>
                    <p>{translations.footer.copyright}</p>
                    <p className='right-one'>
                        <p>{translations.footer.termsAndConditions}</p>
                        <p>{translations.footer.privacyPolicy}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;