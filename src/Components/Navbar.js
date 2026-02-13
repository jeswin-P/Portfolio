import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "../Styles/Navbar.css"

function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const menuItems = [
        "Home",
        "About",
        "skills",
        "Projects",
        "Experience",
        "Contact"
    ];

    return (
        <nav className="custom-navbar">

            <div className="container">

                <div className="nav-wrapper">

                    {/* Logo */}
                    <div className="nav-logo">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="logo-text"
                            onClick={closeMenu}
                        >
                            JESWIN
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="menu-btn" onClick={toggleMenu}>
                        <FaBars />
                    </div>

                    {/* Menu */}
                    <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

                        {menuItems.map((item) => (

                            <li key={item}>

                                <Link
                                    to={item.toLowerCase()}
                                    smooth="easeInOutQuart"
                                    duration={600}
                                    offset={-100}
                                    spy={true}
                                    hashSpy={true}
                                    activeClass="active-link"
                                    className="nav-link"
                                    onClick={closeMenu}
                                >

                                    {item}
                                </Link>

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navigation;

