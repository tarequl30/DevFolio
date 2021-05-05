import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { Alert } from 'react-bootstrap';
const Contact = () => {
    const [message, setMessage] = useState(null)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_of6z7ch', 'template_ot5vqln', e.target, 'user_YEJpCJyk7MSKGKwmteyHR')
            .then((result) => {
                setMessage('Mail sent succesfully')
                document.forms["contactForm"].reset()
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className="container contact">
            <div className="row ">
                <div className="col-md-6 address">
                    {/* <img src="" alt=""/> */}
                    <h1>GET IN TOUCH</h1>
                    <h4 className="mt-5 mb-5">
                        Bahaddarhat, Asian Housing , 3/A <br /> Chittagong || 4212</h4>
                    <h4 className="mt-5">tarequl30@gmail.com <br /> 0088 018 40 333 921</h4>
                </div>
                <div className="col-md-6 fromLayout">
                    <h1 className="textField">LEAVE ME A MESSAGE</h1>

                    <form name="contactForm" action="" onSubmit={sendEmail} >
                        <div className=" mt-5">
                            <div>
                                <h3 className="inputName">Name</h3>
                                <input className="" type="text" name="name" id="" placeholder="Your Name" />
                            </div>
                            <div>
                                <h3 className="inputName">Email</h3>
                                <input type="email" name="email" id="" placeholder="Email" />
                            </div>
                        </div>
                        {/* <textarea name="message" />
                        <input type="submit" value="Send" /> */}
                        <input className="messageBox mt-5" name="text" type="text" placeholder="Your Text" />
                        <div>
                            <button type="submit" value="Send" className="submitBtn">SUBMIT</button>
                            {
                                message && <Alert variant="success">{message}</Alert>
                            }
                        </div>
                    </form>
                </div>

            </div>
            <p className="text-center"><small>copyright reserved by @TreqBroooh || 2021 </small></p>
        </div>
    );
};

export default Contact;