import { useContext } from 'react';
import './ImageHolder1.css';
import LanguageContext from '../../../shared/context/LanguageContext';

function Header() {
    const { translations } = useContext(LanguageContext);
    return (
        <>
        <div className="img__bg">
            <div className="img__bg--item">
            <h2 className="img__bg--item-title">{translations.header.title}</h2>
            <p className='img__bg--item-content'>{translations.header.content}
            </p>
            </div>
        </div>
        </>
    )
}

export default Header;