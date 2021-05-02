import React from 'react';
import './Blog.css'
import html from '../../../images/web-design-background_1300-39.jpg'
import css from '../../../images/css-word-lettering-typography-design-illustration-with-line-icons-ornaments-orange_9233-187.jpg'
import js from '../../../images/depositphotos_41138625-stock-illustration-vector-illustration-of-dark-blue.jpg'


const Blog = () => {
    return (
        <div className="blogs">
            <h1 className="text-center pt-5 title">BLOGS</h1>
            <div class=" blog row row-cols-1 row-cols-md-3 g-4 pt-5">
                <div class="col cardHeight ">
                    <div className="cardHeight card h-100">
                        <img src={html} class="card-img-top" alt="..." width="30%" height="40%" />
                        <div class="card-body">
                            <h5 class="card-title">Basic HTML</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae quas debitis animi corporis ullam odit minus. Sunt repellendus reprehenderit sint nemo illum eveniet, quae, odit rerum debitis dicta voluptates accusamus maiores veritatis nobis quod voluptate tempora id possimus culpa.</p>
                        </div>
                        <div class="card-footer">
                            <button className="exploreBtn"> EXPLORE</button> <small>Coming Soon....</small>
                        </div>
                    </div>
                </div>
                <div class="col cardHeight ">
                    <div class="card h-100">
                        <img src={css} class="card-img-top" alt="..." width="50%" height="40%" />
                        <div class="card-body">
                            <h5 class="card-title">Deep Dive with CSS</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae quas debitis animi corporis ullam odit minus. Sunt repellendus reprehenderit sint nemo illum eveniet, quae, odit rerum debitis dicta voluptates accusamus maiores veritatis nobis quod voluptate tempora id possimus culpa.</p>
                        </div>
                        <div class="card-footer">
                            <button className="exploreBtn"> EXPLORE</button> <small>Coming Soon....</small>
                        </div>
                    </div>
                </div>
                <div class="col cardHeight ">
                    <div class="card h-100">
                        <img src={js} class="card-img-top" alt="..." width="50%" height="40%" />
                        <div class="card-body">
                            <h5 class="card-title">JS Fundamental</h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab molestiae quas debitis animi corporis ullam odit minus. Sunt repellendus reprehenderit sint nemo illum eveniet, quae, odit rerum debitis dicta voluptates accusamus maiores veritatis nobis quod voluptate tempora id possimus culpa.</p>
                        </div>
                        <div class="card-footer">
                            <button className="exploreBtn"> EXPLORE</button><small>Coming Soon....</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;