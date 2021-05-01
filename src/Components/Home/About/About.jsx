import React from 'react';
import dev from '../../../images/29354755_1648288675264901_1455147167885371789_o.jpg'
import './About.css'
const About = () => {
    return (
        <section className="about">
            <div className="row">
                <h1 className="aboutMe">ABOUT ME</h1>
                <div className="col-md-6 aboutImg">
                    <img src={dev} alt="" width="65%" />
                </div>
                <div className="col-md-6 aboutEassy">
                    <h1>A SELF TAUGHT <span className="colorWeb">WEB DEVELOPER</span></h1>
                    <h5 >I actually studied as a Civil Enginnering but I had always a dream for doing something crazy and where I can get enough kick and enough energy to woke up next morning for going to work.
                    So, I've decided last year that I need to learn and explore CODING and PROGRAMMING and then BOOM! I quit my boring job and deep dive into Prgramming.
                    Now, I'm a Junior Front-End Developer and now learning Flutter and other cool stuff! <br />
                    Hell Yeeeah ! </h5>
                    <br />
                    <h4>Things I know: <br />
                        <span className="skill">Languages:</span> JavaScript,
                    Node.js, HTML, CSS <br />
                        <span className="skill">Frameworks:</span> React,
                    Bootstrap, Express.js <br />
                        <span className="skill">Platform:</span> Heroku,
                    Netlify,Firebase <br />
                        <span className="skill">Technologies:</span> GitHub, Visual Studio Code, Postman</h4>
                </div>
            </div>
        </section>
    );
};

export default About;