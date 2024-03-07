import React, { useState, useRef } from 'react';
import './Contact.css';
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
            <div className="contact-inner-container" id="details-section">
                <ul id="details">
                    <li className="details"><a href="mailto:bootcampgithub@gmail.com">bootcampgithub@gmail.com</a></li>
                    <li className="details"><a href="https://www.github.com/bootcampist" target="_blank">bootcampist</a></li>
                    <li className="details"><a href="https://www.linkedin.com" target="_blank">linkedIn.com</a></li>
                    <li className="details"><a href={cv} target="_blank">Curriculum Vitae</a></li>
                </ul> 
            </div>
            <div className="contact-inner-container" id="form-section">
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
    )
}

export default Contact