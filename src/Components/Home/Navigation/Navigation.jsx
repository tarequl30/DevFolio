
import { faFacebook, faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/men.png'
import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <div class="nav-center top-sticky">

                <div to="/" class="nav-header">
                    <img src={logo} class="logo" alt="logo" />
                    <button class="nav-toggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="links">
                    <li>
                        <a href="/">home</a>
                    </li>
                    <li to="/about">
                        <Link> <a href="/about">about</a> </Link>
                    </li>
                    <li>
                        <a href="projects.html">projects</a>
                    </li>
                    <li>
                        <a href="contact.html">BLOGS</a>
                    </li>
                    <li>
                        <a href="contact.html">contact</a>
                    </li>

                </ul>
                <ul class="social-icons">
                    <li>
                        <a href="https://www.facebook.com/tarequl.tareq">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/tarequl30">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/tarequl30">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tarequl30/">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/@tarequl30">
                            <FontAwesomeIcon icon={faMedium} />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;