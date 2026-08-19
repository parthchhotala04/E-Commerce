import React from 'react'

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

      <div className="col-md-6">

        <h1>Contact Form</h1>
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder='Enter your full name' />
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" placeholder='Enter your email' />
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        <button className="btn btn-primary mt-2">Submit</button>
        <button className="btn btn-secondary mt-2 ms-2">Reset</button>
      </div>

      <div className="col-md-6 mt-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8981.7380017744!2d37.60729723375712!3d55.750953971126535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Moscow%20Kremlin!5e0!3m2!1sen!2sin!4v1783830538075!5m2!1sen!2sin" style={{border:"0", width:"100%", height:"450px"}} loading="lazy" ></iframe>
        <ul>
          <li>Phone: +1 (123)456-7890</li>
          <li>Email: info@example.com</li>
          <li>Address: The Moscow Kermlin, Moscow, Russia</li>
        </ul>
      </div>
              
      </div>
    </div>
  )
}

export default Contact;