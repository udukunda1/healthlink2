import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { authContext } from '../../context/auth-context';
import logo from '../../../image/logo.svg';
import './Navbar.css';
import SideDrawer from '../sidedrawer/SideDrawer';
import ReactDOM from 'react-dom';
import LanguageContext from '../../context/LanguageContext';

function Navbar() {
    const auth = useContext(authContext);
    const navigate = useNavigate();
    const { translations } = useContext(LanguageContext);

    function handleLogout() {
        auth.logout();
        navigate('/');
        auth.toggleChanger();
    }

    const navbarContent = (
        <div className='navbar'>
            {!auth.isLoggedIn && (
                <div className='uphead'>
                    <p>
                        {translations.interactWithOthers}{' '}
                        <Link to='/authenticate/student/signup' style={{ color: 'white' }}>
                            {translations.signup}
                        </Link>
                    </p>
                </div>
            )}
            {auth.isLoggedIn && (
                <div className='uphead'>
                    <p>
                        {translations.welcomeBack},{' '}
                        {auth.isLoggedIn.name
                            .split(' ')
                            [auth.isLoggedIn.name.split(' ').length - 1].toUpperCase()}{' '}
                        <span style={{ color: 'white', marginLeft: '12px' }}>
                            {translations.reminderToCheck}
                        </span>
                    </p>
                </div>
            )}
            <nav className="nav">
                <ul className="nav-lists">
                    <NavLink to="/">
                        <li className="nav-list logo">
                            <img src={logo} alt='logo' />
                        </li>
                    </NavLink>
                    {auth.isLoggedIn && (
                        <li className="nav-list__user">
                            <FaUserCircle />{' '}
                            {auth.isLoggedIn.name
                                .split(' ')
                                [auth.isLoggedIn.name.split(' ').length - 1].toUpperCase()}
                        </li>
                    )}
                    <div className='nav-lists__links'>
                        <li className="nav-list">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')} end>
                                {translations.home}
                            </NavLink>
                        </li>
                        <li className="nav-list">
                            <NavLink to="/directory" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                {translations.pharmacyDirectory}
                            </NavLink>
                        </li>
                        <li className="nav-list">
                            <NavLink to="/search" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                {translations.medSearch}
                            </NavLink>
                        </li>
                        {!auth.isLoggedIn ? (
                            <li className="nav-list">
                                <Link to="/authenticate/student/">
                                    <Button>{translations.login}</Button>
                                </Link>
                            </li>
                        ) : (
                            <Button type='a' className='cta-white' onClick={handleLogout}>
                                {translations.logout}
                            </Button>
                        )}
                        <SideDrawer />
                    </div>
                </ul>
            </nav>
        </div>
    );

    return ReactDOM.createPortal(navbarContent, document.body);
}

export default Navbar;
