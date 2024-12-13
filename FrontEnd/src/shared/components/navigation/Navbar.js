import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { authContext } from '../../context/auth-context';
import logo from '../../../image/logo.svg';
import './Navbar.css';
import SideDrawer from '../sidedrawer/SideDrawer';
import ReactDOM from 'react-dom';

function Navbar() {
    const auth = useContext(authContext);
    const navigate = useNavigate();

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
                        interact with others on Pharmacy discovery{' '}
                        <Link to='/authenticate/student/signup' style={{ color: 'white' }}>
                            signup
                        </Link>
                    </p>
                </div>
            )}
            {auth.isLoggedIn && (
                <div className='uphead'>
                    <p>
                        Welcome back, {auth.isLoggedIn.name.split(' ')[auth.isLoggedIn.name.split(' ').length - 1].toUpperCase()}!{' '}
                        <span style={{ color: 'white', marginLeft: '12px' }}>
                            Remember to check medicine expiry dates.
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
                            <FaUserCircle /> {auth.isLoggedIn.name.split(' ')[auth.isLoggedIn.name.split(' ').length - 1].toUpperCase()}
                        </li>
                    )}
                    <div className='nav-lists__links'>
                        <li className="nav-list">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')} end>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list">
                            <NavLink to="/directory" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                Pharmacy directory
                            </NavLink>
                        </li>
                        <li className="nav-list">
                            <NavLink to="/search" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                                Med availability Search
                            </NavLink>
                        </li>
                        {!auth.isLoggedIn ? (
                            <li className="nav-list">
                                <Link to="/authenticate/student/">
                                    <Button>Login</Button>
                                </Link>
                            </li>
                        ) : (
                            <Button type='a' className='cta-white' onClick={handleLogout}>
                                Logout
                            </Button>
                        )}
                        <SideDrawer />
                    </div>
                </ul>
            </nav>
        </div>
    );

    return ReactDOM.createPortal(navbarContent, document.body); // This moves the navbar to the body
}

export default Navbar;
