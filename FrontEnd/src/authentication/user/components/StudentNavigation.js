import { Link } from "react-router-dom";
import Button from "../../../shared/components/UI/Button/Button";
import './StudentNavigation.css';


function StudentNavigation() {
    return (
        <div className="student-navigation">
        <Link to='/authenticate/student/'><Button type='a' className="cta-white">login</Button></Link>
        <Link to='/authenticate/student/signup'><Button type='a' className="cta-white">Signup</Button></Link>
        </div>
    )
}

export default StudentNavigation;