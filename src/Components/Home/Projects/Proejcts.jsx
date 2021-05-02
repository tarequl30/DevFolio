import React from 'react';
import project from '../../../images/emajhon.png'
import project1 from '../../../images/Screenshot (65).png'
import project2 from '../../../images/Screenshot (66).png'
import project3 from '../../../images/ride.png'
import './Projects.css'

const Proejcts = () => {
    return (
        <section className="projects" >
            <h1 className="text-center pb-5 title">PROJETS</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div class="card cardSize">
                        <img src={project3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Ride Service</h5> <a href="https://hero-ride-service.web.app/" target="_blank" rel="noreferrer" > Live Site</a>
                            <p class="card-text">Anyone can book single and monthly or annual package by login and can book also</p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">EmaJhon Commerce</h5> <a href="https://fake-emajhon.firebaseapp.com/shop" target="_blank" rel="noreferrer" > Live Site</a>
                            <p class="card-text">Customer can buy products simply by login via google sign and cart and add products at cart section. Price and Vat, Shipping cost also added when someone buy products</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">CAR REPAIR</h5> <a href="https://car-service-3a75c.web.app/" target="_blank" rel="noreferrer" > Live Site</a>
                            <p class="card-text">This is a Car Repair Shop, User can sign in and book service and also can see status update and give review and can payment also via stripe. Admin can add service for customer</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={project2} class="card-img-top" alt="..." width="50%" />
                        <div class="card-body">
                            <h5 class="card-title">E-SCHOOL</h5> <a href="https://tarequl30.github.io/e-school-remake/" target="_blank" rel="noreferrer" > Live Site</a>
                            <p class="card-text">Its a basic HTML and CSS base landing page..</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Proejcts;