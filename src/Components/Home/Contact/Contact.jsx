import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section className="conatct">
            <div className="row ">
                <div className="col-md-6 address">
                    {/* <img src="" alt=""/> */}
                    <h1>GET IN TOUCH</h1>
                    <h4 className="mt-5 mb-5">
                        Bahaddarhat, Asian Housing , 3/A <br /> Chittagong || 4212</h4>
                    <h4 className="mt-5">tarequl30@gmail.com <br /> 0088 018 40 333 921</h4>
                </div>
                <div className="col-md-6">
                    <h1 className="textField">LEAVE ME A MESSAGE</h1>
                    <div className="d-flex mt-5">
                        <div>
                            <h3 className="inputName">Name</h3>
                            <input className="" type="text" name="" id="" placeholder="Your Name" />
                        </div>
                        <div>
                            <h3 className="inputName">Email</h3>
                            <input type="email" name="" id="" placeholder="Email" />
                        </div>
                    </div>
                    <input className="messageBox mt-5" type="text" placeholder="Your Text" />
                    <div>
                        <button className="submitBtn">SUBMIT</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Contact;