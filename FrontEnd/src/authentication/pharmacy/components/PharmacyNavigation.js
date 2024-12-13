// import Button from "../shared/components/UI/Button/Button";

import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import './PharmacyNavigation.css';

function PharmacyNavigation() {
    return (
        <div className='wrapper'>
        <div className="pharmacy-navigation">
        <Link to='/authenticate/pharmacy/'><Button type='a' className="cta-white">login</Button></Link>
        <Link to='/authenticate/pharmacy/signup'><Button type='a' className="cta-white">Register</Button></Link>
        </div>
        </div>
    )
}

export default PharmacyNavigation;