import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <main className=" mainSection">
            <div className="row mainBody">
                <div className="col-md-6 devPart">
                    <h1 ><span className="name">Hi I'm Tareq </span><br /> <span className="typing">A Front-End Web Developer</span> </h1>
                    <h2>Cool! haah! </h2>
                    <a href="http://drive.google.com/uc?export=download&id=1CbsP9D3DFL16hLpX3ZyZH4UxT1Q5rtjY" type="button" > <button className="resumeBtn">  <FontAwesomeIcon icon={faDownload} />  RESUME</button> </a>
                </div>
                <div className="col-md-6 devImg">
                    {/* <img src={img} alt="" width="80%" /> */}
                </div>
            </div>
        </main>
    );
};

export default Header;