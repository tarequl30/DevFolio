import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper } from 'swiper';
import project from '../../../images/Screenshot (63).png'
import project1 from '../../../images/Screenshot (65).png'
import project2 from '../../../images/Screenshot (66).png'
import './Projects.css'

const Proejcts = () => {
    return (
        <section className="projects" >
            <h1 className="text-center pb-5 title">PROJETS</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div class="card cardSize">
                        <img src={project1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project2} class="card-img-top" alt="..." width="50%" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Proejcts;