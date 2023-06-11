import { getActiveElement } from '@testing-library/user-event/dist/utils';
import navLogo from '../images/ORK_Logo_nav.png';
import { NavLink, Link } from 'react-router-dom';

function Nav() {
   
    return(
        <NavLink style={{ textDecoration: 'none' }}>
            <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <a href="" className="navbar-brand">
                                    <img src={navLogo} alt="orklogo" width="45px" height="45px"/>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <a className="nav-link" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/menus' style={{ textDecoration: 'none' }}>
                                <a className="nav-link"href="">Menus</a>
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menus</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./pages/menus.html">Food</a></li>
                                <li><a className="dropdown-item" href="./pages/menus.html#drinkmenu">Drink</a></li>
                                <li><a className="dropdown-item" href="./pages/menus.html#latenight">Late Night</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link to='/catering' style={{ textDecoration: 'none' }}>
                                <a className="nav-link" >Catering</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <a className="nav-link">Location</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' style={{ textDecoration: 'none' }}>
                                <a className="nav-link" >Contact</a>
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to='/about' style={{ textDecoration: 'none' }}>
                                <a className="nav-link">About Us</a>
                            </Link>
                        </li>
                       {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Info</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./pages/aboutus.html">About Us</a></li>
                                <li><a className="dropdown-item" href="./index.html#scrollspyHeading2">Location</a></li>
                                <li><a className="dropdown-item" href="./pages/contact.html">Contact</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Careers</a></li>
                            </ul> 
                        </li> */}
                    </ul>
                </div> 
                <div className="navbar-collapse collapse w-50 order-2 dual-collapse2 justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                                <button type="button" className="btn btn-primary btn-lg">
                                    Order Online
                                </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavLink>
    )
}

export default Nav;