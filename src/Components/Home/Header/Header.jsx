import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";
import dev from '../../../images/devops-development-operations-work-illustration-concept-with-characters-light-bulb_269730-117.jpg'

const MagicOcean = [
    "A Front-End Web Developer",
    "A Self Taught Web Developer",
];
let index = 0;

const Header = () => {
    const [magicName, setMagicName] = useState();
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                // index = index + 1 > 2 ? 0 : ++index + 1;
                index = index > 2 ? 0 : ++index;
                setMagicName(MagicOcean[index]);
            }, 5500);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName]
    );
    return (
        <main className=" mainSection">
            <div className="row mainBody">
                <div className="col-md-6 devPart">
                    <h1 ><span className="name">Hi I'm Tareq </span><br /> <span className="typing">A Front-End Web Developer </span> </h1>
                    {/* <p className="cursor">{name}</p> */}
                    {/* <h2>Cool! haah! </h2> */}
                    <a href="http://drive.google.com/uc?export=download&id=1CbsP9D3DFL16hLpX3ZyZH4UxT1Q5rtjY" type="button" > <button className="resumeBtn">  <FontAwesomeIcon icon={faDownload} />  RESUME</button> </a>
                </div>
                <div className="col-md-6 devImg">
                    {/* <img src={dev} alt="" width="80%" /> */}
                </div>
            </div>
        </main>
    );
};

export default Header;