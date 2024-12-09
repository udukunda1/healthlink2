import { NavLink } from "react-router-dom";
import './AuthenticateNavigation.css';

//<NavLink to="/" className={({isActive}) => isActive? 'link active' : 'link'}>

function AuthenticateNavigation() {
    return (
        <>
        <div className='rem3-top-place-holder'></div>
        <div className="authenticate-navigation">
        <NavLink to='/authenticate/student/' className={({isActive}) => isActive? 'active' : ''}><button className="left">student</button></NavLink>
        <NavLink to='/authenticate/pharmacy/' className={({isActive}) => isActive? 'active' : ''}><button className="right">Pharmacy</button></NavLink>
        </div>
        </>
    )
}

export default AuthenticateNavigation;