import React from 'react';
// eslint-disable-next-line 
import { container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import './header.css';

const nav_link = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]

const Header = () => {
    return (
        <header className="header">
            <container>
                <Row>
                    <div className="nav_wrapper d-flex align-items-center justify-content-between">
                        {     /* ===========logo============*/}
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        {     /* ===========logo end=========*/}

                        {     /* ===========menu start=========*/}
                        <div className="navigation">
                            <ul className="menu d-flex align-items-center gap-5">
                                {
                                    nav_link.map((item, index) => (
                                        <li className="nav_item" key={index}>
                                            <NavLink to={item.path} className={navClass => navClass.isActive ? 'active_link' : ''}>{item.display}</NavLink>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        {     /* ===========menu end=========*/}

                        <div className="nav_right d-flex align-items-center gap-4">
                            <div className="nav_btns d-flex align-items-center gap-4">
                                <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                                <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                            </div>
                            <span className="mobile_menu"><i class="ri-menu-line"></i></span>
                        </div>

                    </div>
                </Row>
            </container>
        </header>
    )
};

export default Header;