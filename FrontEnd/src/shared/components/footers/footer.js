import './Footer.css';
import tel from '../../../image/tel.svg';
import email from '../../../image/email.svg';
import fb from '../../../image/facebook.svg';
import ig from '../../../image/ig.svg';
import yt from '../../../image/youtube.svg';
import { useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';


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
                        <p>{translations.footer.quickLinks.home}</p>
                        <p>{translations.footer.quickLinks.directory}</p>
                        <p>{translations.footer.quickLinks.search}</p>
                        <p>{translations.footer.quickLinks.getStarted}</p>
                    </div>
                    <div className='inner__one--three'>
                    <p className='header'>{translations.footer.specialities.header}</p>
                        <p>{translations.footer.specialities.anesthesiology}</p>
                        <p>{translations.footer.specialities.generalSurgery}</p>
                        <p>{translations.footer.specialities.psychiatry}</p>
                        <p>{translations.footer.specialities.familyMedicine}</p>
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