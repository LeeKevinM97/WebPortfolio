import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  // Environment Variables
  const apiKey = process.env.REACT_APP_EMAILJS_TOKEN;
  const serviceID = process.env.REACT_APP_SERVICEID;

  // Variables
  const templateID = "template_hrvljvf";
  const website = "leekevinm.com"

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        website: website,
        message: `Message: ${formDetails.message}`,
        email: formDetails.email,
        phonenum: formDetails.phoneNumber,
        reply_to: formDetails.email
      },
      apiKey
    )
    .then(() => {
      // setButtonText("Sending Message...");
      alert('Thank you for reaching out!  I will respond as soon as possible.');
      setFormDetails(formInitialDetails);
      // setButtonText("Submit");
    }, (error) => {
      console.log(error);
      alert('Sorry! Something went wrong, please try again!')
    })
  }
  return (
    <>
      <div className="h-fit w-full py-4 bg-first" id="contactForm">
        <h1 className="text-4xl text-center font-semibold mb-6 text-fourth roboto">Get In Touch!</h1>
        <h2 className="scp text-xl my-10 text-center text-fourth">Hiring? Questions? <br/> I'd love to hear from you!</h2>
        <form onSubmit={handleSubmit}>
          <div className="flexbox text-center my-6">
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4 bg-third text-white" type="text" placeholder="First Name*" name="firstName" required
            value={formDetails.firstName} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4 bg-third text-white" type="text" placeholder="Last Name*" name="lastName" required
            value={formDetails.lastName} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flexbox text-center my-6">
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4 bg-third text-white" type="text" placeholder="Email*" name="email" required
            value={formDetails.email} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
            <input className="contactFormInputs lg:w-1/4 md:w-1/3 w-[40%] h-12 mx-[2%] ps-4 bg-third text-white" type="text" placeholder="Phone Number*" name="phoneNumber"
            value={formDetails.phoneNumber} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flexbox text-center my-6">
            <textarea className="contactFormInputs lg:w-[54%] md:w-[70.67%] w-[84%] ps-4 pt-4 bg-third text-white" rows="8" type="text" placeholder="Message*" name="message"
            value={formDetails.message} onChange={(e) => onFormUpdate(e.target.name, e.target.value)}/>
          </div>
          <div className="flex justify-center mb-10">
            <button id="contactFormSubmit" className="py-2 px-12 rounded-full mx-auto mt-10 roboto bg-second text-white" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm