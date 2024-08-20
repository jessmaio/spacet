import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from 'react';
import logo from './../assets/img/shared/logo.svg'

const Menu = () => {
        const [open, setOpen] = useState(false);
        const [width, setWidth] = useState(window.innerWidth);

        const toggleMenu = () => {
                setOpen(!open);
        };

        useEffect(() => {
                const handleResize = () => {
                  setWidth(window.innerWidth);
                };
                window.addEventListener('resize', handleResize);
                return () => {
                  window.removeEventListener('resize', handleResize);
                };
        }, []);

        useEffect(() => {
                if (width < 600) {
                  setOpen(false); // Close the menu when window width is greater than or equal to 600
                }
        }, [width]);

        return (
        <>
        <Link to={"/"}>
                <div className="logo">
                        <img src={logo}/>
                </div>
        </Link>
        {width < 600 ?  (
                <nav className="burger-menu">
                <div className="burger-icon" onClick={toggleMenu}>
                        {open ? (
                                <img src="./src/assets/img/shared/icon-close.svg"/>
                        ) : (
                                <img src='./src/assets/img/shared/icon-hamburger.svg'/> 
                        )}
                </div>
                {open && (
                        <ul className="voices">
                        <li>
                        <Link to = {"/"}><h4><span className="bold">00</span> Home</h4></Link>
                        </li>
                        <li>
                        <Link to = {"/dest"}><h4><span className="bold">01</span> Destination</h4></Link>
                        </li>
                        <li>
                        <Link to = {"/crew"}><h4><span className="bold">02</span> Crew</h4></Link></li>
                        <li>
                        <Link to = {"/tech"}><h4><span className="bold">03</span> Technology</h4></Link>
                        </li>
                        </ul>
                )}
                </nav>
        ) : (
                <nav className="normal-menu">
                        <ul className="voices"> 
                                <li><Link to={"/"}><h4>Home</h4></Link></li>
                                <li><Link to={"/dest"}><h4>Destination</h4></Link></li>
                                <li><Link to={"/crew"}><h4>Crew</h4></Link></li>
                                <li><Link to={"/tech"}><h4>Technology</h4></Link></li>
                        </ul>
                        <div className="rectangle"></div>
                </nav>
        )}
        </>
        );
}
export default Menu