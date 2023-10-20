import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState("");
  const form = useRef()

  const sendEmail = (e) => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        setStatus("200")
        console.log(result.text, "Status is 200");
        setTimeout(() => {
          setStatus("");
        }, 4000);
      }, (error) => {
        setStatus("500")
        console.log(error.text);
        setTimeout(() => {
          setStatus("");
        }, 4000);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail(e)
    setContactForm({
      name: '',
      email: '',
      phoneNumber: '',
      subject: '',
      message: '',
    })
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setContactForm((prev) =>
      ({ ...prev, [name]: value }))
  }

  return (
    <form ref={form} onSubmit={handleSubmit} noValidate action="">
      <div className="card border-secondary mb-3">
        <div className="card-header bg-primary-subtle"><h3 className='text-center'>CONTACT</h3></div>
        <div className="card-body">
          <div className="row ">

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input name='name' type="text" onChange={onChangeHandler} value={contactForm.name} className="form-control" id="name" placeholder="Please provide us your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input name='email' type="email" onChange={onChangeHandler} value={contactForm.email} className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input name='phoneNumber' type="tel" onChange={onChangeHandler} value={contactForm.phoneNumber} className="form-control" id="phoneNumber" placeholder="Example 1231231234" pattern="[0-9]{10}" />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name='message' onChange={onChangeHandler} value={contactForm.message} className="form-control" id="message" rows="6" placeholder="Please write us a message, question, request..."></textarea>
              </div>
              <button type='submit' className='btn btn-primary float-end'>Send</button>
            </div>

          </div>
        </div>
      </div>
      {status === "200" &&
        <div class="alert alert-dismissible alert-success position-fixed bottom-0 end-0 me-4">
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          Your message was <strong>sent successfully</strong>.
        </div>
      }
      {status === "500" &&
        <div class="alert alert-dismissible alert-danger position-fixed bottom-0 end-0 me-4">
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          Message was <strong>not sent</strong>. Please try again.
        </div>
      }
    </form>
  )
}

export default ContactForm
