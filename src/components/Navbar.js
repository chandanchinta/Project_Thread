import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleclick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerwidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        Project Thread
                    </Link>
                    <div className="menu-icon" onClick={handleclick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/Login"
                                className="nav-links"
                                onClick={closeMenu}
                            >
                                Login
                            </Link>
                        </li>
<<<<<<< HEAD
                        <li className ='nav-item'>
                        <Link to = '/Shop' className='nav-links' onClick={closeMenu}>
=======
                        <li className="nav-item">
                            <Link
                                to="/Register"
                                className="nav-links"
                                onClick={closeMenu}
                            >
                                Register
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Shop"
                                className="nav-links"
                                onClick={closeMenu}
                            >
>>>>>>> 3f947dea5786794df3e18c8269857a692732ba97
                                Shop
                            </Link>
                        </li>
                    </ul>
<<<<<<< HEAD
                    {button && <Button buttonStyle='btn--outline'>
                        <Link to = '/Register' className='nav-links' onClick={closeMenu}>
                                Register
                        </Link>
                        </Button>}
=======
                    {button && (
                        <Button buttonStyle="btn--outline">SIGN UP</Button>
                    )}
>>>>>>> 3f947dea5786794df3e18c8269857a692732ba97
                </div>
            </nav>
        </>
    );
}

export default Navbar;
