import './ImageHolder2.css';
import {useContext} from 'react';
import LanguageContext from '../../../shared/context/LanguageContext';

function Header() {
    const { translations } = useContext(LanguageContext);
    return (
        <>
        <div className="img__bg2">
            <div className="img__bg--item2">
                <h3 className="img__bg--item-title2">{translations.explorePharmacyNetwork}</h3>
                <p>{translations.findPharmacies}
                </p>
            </div>
        </div>
        </>
    )
}

export default Header;