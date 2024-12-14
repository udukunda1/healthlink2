import { NavLink } from "react-router-dom";
import './AuthenticateNavigation.css';
import { useContext } from "react";
import LanguageContext from "../shared/context/LanguageContext";

//<NavLink to="/" className={({isActive}) => isActive? 'link active' : 'link'}>

function AuthenticateNavigation() {
    const { translations } = useContext(LanguageContext);
    return (
        <div className='wrapper'>
        <div className='rem3-top-place-holder'></div>
        <div className="authenticate-navigation">
        <NavLink to='/authenticate/student/' className={({isActive}) => isActive? 'active' : ''}><button className="left">{translations.authNavigation.student}</button></NavLink>
        <NavLink to='/authenticate/pharmacy/' className={({isActive}) => isActive? 'active' : ''}><button className="right">{translations.authNavigation.pharmacy}</button></NavLink>
        </div>
        </div>
    )
}

export default AuthenticateNavigation;