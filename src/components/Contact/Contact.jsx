import React, { useState, useRef } from 'react';
import './Contact.css';
import email1 from './images/email1.svg'
import cv from './cv.pdf'
import emailjs from '@emailjs/browser';


function Contact(){
    // Form Data Information
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        subject: '',
        message: ''
    });

    // Email variables
    const formRef = useRef();
    const service = 'service_2l0cqzm';
    const template = 'template_4lzpkpo';
    const publicK = 'lFyZlU3Nlj_LbgJRY';

    const [error, setError]= useState(false);
    const [success, setSuccess]= useState(false);

    // Email function
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(service, template, formRef.current, {
            publicKey: publicK,
          })
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
             setError(true)
            });
      };

    //   Function to manage the form input values
    function handleInputChange (e) {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to manage form submission
    function handleFormSubmit(e) {
        e.preventDefault();

        // Send email and reset the form data values
        if (formData.email !=='' && formData.message !==''){
            sendEmail(e);
            setFormData({
                name: '',
                email:'',
                subject: '',
                message: ''
            });
        } else {alert('Please fill in the email and message.')
        }
    }

    // Contact Detail Section
    return (
        <div className="contact-container">
            <div className="contact-inner-container">
                <div id="contact-title"><h1>I'd love to hear from you</h1></div>
                <div id="contact-sections-container">
                    <div className="contact-sections" id="details-section">
                        <ul id="details">
                            <li className="li-details"><a href="mailto:bootcampgithub@gmail.com"><div id="email" className="contact-icons"></div></a></li>
                            <li className="li-details"><a href="https://www.github.com/bootcampist" target="_blank"><div id="github" className="contact-icons"></div></a></li>
                            <li className="li-details"><a href="https://www.linkedin.com/in/nicole-t-1a01a32b9/" target="_blank"><div id="linked-in" className="contact-icons"></div></a></li>
                            <li className="li-details"><a href={cv} target="_blank"><div id="cv" className="contact-icons"></div></a></li>
                            
                            {/* <li className="li-details"><a href="mailto:bootcampgithub@gmail.com"><div id="email" className="contact-icons"></div><div className="details">bootcampgithub@gmail.com</div></a></li>
                            <li className="li-details"><a href="https://www.github.com/bootcampist" target="_blank"><div id="github" className="contact-icons"></div><div className="details">bootcampist</div></a></li>
                            <li className="li-details"><a href="https://www.linkedin.com/in/nicole-t-1a01a32b9/" target="_blank"><div id="linked-in" className="contact-icons"></div><div className="details">LinkedIn</div></a></li>
                            <li className="li-details"><a href={cv} target="_blank"><div id="cv" className="contact-icons"></div><div className="details">Curriculum Vitae</div></a></li> */}
                        </ul> 
                    </div>
                    <div className="contact-sections" id="form-section">
                        {/* Form Section - update formData with input values */}
                        <form ref={formRef}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Name"
                                value={formData.name} name="name" onChange={handleInputChange} />
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Email" 
                                value={formData.email} name="email" onChange={handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" placeholder="Subject" 
                                value={formData.subject} name="subject" onChange={handleInputChange}/>
                            </div>
                            
                            <div className="form-group">
                                <textarea type="text" className="form-control" id="message" placeholder="Message" 
                                value={formData.message} name="message" onChange={handleInputChange}/>
                            </div>
                            {/* Call form submission function when the  submit button is pressed */}
                            <button type="submit" className="btn" onClick={handleFormSubmit}>Submit</button>
                            {/* Messsage for result of the form submission */}
                            <div>
                                {error && "Message not sent"}
                                {success && "Message sent successfully"}
                            </div>      
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact