// import Button from "../shared/components/UI/Button/Button";

import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import './PharmacyNavigation.css';
import { useContext } from "react";
import LanguageContext from "../../../shared/context/LanguageContext";

function PharmacyNavigation() {
    const { translations } = useContext(LanguageContext);
    return (
        <div className='wrapper'>
        <div className="pharmacy-navigation">
        <Link to='/authenticate/pharmacy/'><Button type='a' className="cta-white">{translations.studentNavigation.login}</Button></Link>
        <Link to='/authenticate/pharmacy/signup'><Button type='a' className="cta-white">{translations.studentNavigation.register}</Button></Link>
        </div>
        </div>
    )
}

export default PharmacyNavigation;