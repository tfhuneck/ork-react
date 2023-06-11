import {useState, useEffect} from 'react';
import { NavLink, Link } from 'react-router-dom';
import menuButton from '../images/menu.png'
import back from '../images/Arrowup_light.png'
import logo from '../images/ORK_Logo_nav.png'

function Mobile() {
    const [rotate, setRotate] = useState(false);
    const [push1, setPush1] = useState(false);
    const [push2, setPush2] = useState(false);
    const [push3, setPush3] = useState(false);
    const [menubtn, setMenubtn] = useState('mobile-menu-btn');
    const [sidemenu, setSidemenu] = useState('sidemenu');
    const [sidemenu2, setSidemenu2] = useState('sidemenu2');
    const [sidemenu3, setSidemenu3] = useState('sidemenu3');

    function mobileMenu() {
        if(rotate && push2 ) {
            setTimeout(() => {
                setMenubtn('mobile-menu-btn');
                closemenu2();
                setRotate(false);
            }, 200);
        }
        else if(rotate && push3) {
            setTimeout(() => {
                setMenubtn('mobile-menu-btn');
                closemenu3();
            setRotate(false);
            }, 200);
        }
        else if(rotate && (!push2 || !push3)) {
            setTimeout(() => {
                setMenubtn('mobile-menu-btn');
                menuPush();
            setRotate(false);
            }, 200);
        }
        else {
            setTimeout(() => {
                setMenubtn('mobile-menu-btn rotated');
                menuPush(); 
                setRotate(true);
            }, 200);
        };
    }

    function menuPush() {
        if (push1) {
            setSidemenu('sidemenu');
            setPush1(false);
        }
        else {
            setSidemenu('sidemenu sidemenu-pushed')
            setPush1(true);
        }
    }

    function menu2Push() {
        menuPush();
        setTimeout(() => {
            setSidemenu2('sidemenu2 sidemenu2-pushed');
            setPush2(true);
        }, 200);
    }

    function closemenu2() {
        setSidemenu2('sidemenu2');
        setPush2(false);
    }

    function backPush2() {
        setSidemenu2('sidemenu2');
        setTimeout(() => {
            menuPush();
            setPush2(false);
        }, 200);
    }

    function menu3Push() {
        menuPush();
        setTimeout(() => {
            setSidemenu3('sidemenu3 sidemenu3-pushed');
            setPush3(true);
        }, 200);
    }

    function closemenu3() {
        setSidemenu3('sidemenu3');
        setPush3(false);
    }
    
    function backPush3() {
        setSidemenu3('sidemenu3');
        setTimeout(() => {
            menuPush();
            setPush3(false);
        }, 200);
    }

    return(
        <>
            <div className="mobilenav">
                <NavLink style={{ textDecoration: 'none' }}>
                <div className="mobile-nav bg-dark">
                    <Link to='/'>
                        <a href="" className="nav-item logo-mobile">
                            <img src={logo} alt="orklogo" width="50px" height="50px"/>
                        </a> 
                    </Link>
                    <button type="button" className="btn btn-primary btn-med mobile-btn">
                        Order Online
                    </button>
                    <a onClick={mobileMenu}>
                        <img className={menubtn} src={menuButton} alt="collapse menu" width="45px" height="45px" id="menubtnmobile"/>
                    </a>
                </div>
                <div className={sidemenu} >
                    <ul>
                        <Link to='/'>
                            <li><a href="" onClick={mobileMenu}>Home</a></li>
                        </Link>
                        {/* <li><a onClick={menu2Push}><u>Menus</u></a> </li> */}
                        <Link to='/menus'>
                            <li><a href="" onClick={mobileMenu}>Menus</a></li>
                        </Link>
                        <Link to='/catering'>
                            <li className><a href="">Catering</a></li>
                        </Link>
                        <li><a onClick={menu3Push}><u>Info</u></a></li>
                    </ul>
                </div>
                {/* <div className={sidemenu2} id="sidemenu2">
                    <ul>
                        <li><a onClick={backPush2}><img className="menuarrow" src={back} width="40px" height="40px" alt="back"/></a></li>
                        <li><a href="./pages/menus.html">Food</a></li>
                        <li><a href="./pages/menus.html#drinkmenu">Drink</a></li>
                        <li><a href="./pages/menus.html#latenight">Late Night</a></li>
                    </ul>
                </div>  */}
                <div className={sidemenu3} id="sidemenu3">
                    <ul>
                        <li><a onClick={backPush3}><img className="menuarrow" src={back} width="40px" height="40px" alt="back"/></a></li>
                        <li><a href="./aboutus.html">About Us</a></li>
                        <li><a href="./index.html#scrollspyHeading2">Location</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                </NavLink>
            </div>
        </>
    )
}

export default Mobile;