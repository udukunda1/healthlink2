import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import './StudentNavigation.css';
import { useContext } from "react";
import LanguageContext from "../../../shared/context/LanguageContext";


function StudentNavigation() {
    const { translations } = useContext(LanguageContext);

    return (
        <div className='wrapper'>
        <div className="student-navigation">
        <Link to='/authenticate/student/'><Button type='a' className="cta-white">{translations.studentNavigation.login}</Button></Link>
        <Link to='/authenticate/student/signup'><Button type='a' className="cta-white">{translations.studentNavigation.signup}</Button></Link>
        </div>
        </div>
    )
}

export default StudentNavigation;