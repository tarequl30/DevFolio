import React from 'react';
import './Blog.css'
import emailjs from '../../../images/EMAIL-JS.png'
import css from '../../../images/css-word-lettering-typography-design-illustration-with-line-icons-ornaments-orange_9233-187.jpg'
import js from '../../../images/depositphotos_41138625-stock-illustration-vector-illustration-of-dark-blue.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';


const Blog = () => {
    return (
        <div className="container blogs">
            <h1 className="text-center pt-5 title">BLOGS</h1>
            <div class=" blog row row-cols-1 row-cols-md-3 g-4 pt-5 mb-5">
                <div class="col cardHeight ">
                    <div className="cardHeight card h-80">
                        <img src={emailjs} class="card-img-top" alt="..." width="30%" height="40%" />
                        <div class="card-body">
                            <h5 class="card-title">Set Gmail with Email.Js</h5>
                            <p class="card-text"> There is a easy solution to intregate your Gmail service with EmailJS . When developer create a contact form, they input some field like MESSAGE US or CONTACT US and specially newbie developer can't connect this form with their email if someone wants to send feedback to developer......(continue)</p>
                        </div>
                        <div class="card-footer">
                            <a href="https://tarequl30.medium.com/set-gmail-with-email-js-2763ac523ab8" target="_blank" className="exploreBtn"> EXPLORE</a> <small> Published on MEDIUM</small>
                        </div>
                    </div>
                </div>
                <div class="col cardHeight ">
                    <div class="card h-80">
                        <img src={css} class="card-img-top" alt="..." width="50%" height="40%" />
                        <div class="card-body">
                            <h5 class="card-title">Deep Dive with CSS</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae quas debitis animi corporis ullam odit minus. Sunt repellendus reprehenderit sint nemo illum eveniet, quae, odit rerum debitis dicta voluptates accusamus maiores veritatis nobis quod voluptate tempora id possimus culpa.</p>
                        </div>
                        <div class="card-footer">
                            <a href="" className="exploreBtn"> EXPLORE</a> <small>Coming Soon....</small>
                        </div>
                    </div>
                </div>
                <div class="col cardHeight ">
                    <div class="card h-80">
                        <img src={js} class="card-img-top cardImg" alt="..." width="100%" />
                        <div class="card-body">
                            <h5 class="card-title">JS Fundamental</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae quas debitis animi corporis ullam odit minus. Sunt repellendus reprehenderit sint nemo illum eveniet, quae, odit rerum debitis dicta voluptates accusamus maiores veritatis nobis quod voluptate tempora id possimus culpa.</p>
                        </div>
                        <div class="card-footer">
                            <a href="" className="exploreBtn"> EXPLORE</a><small>Coming Soon....</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;