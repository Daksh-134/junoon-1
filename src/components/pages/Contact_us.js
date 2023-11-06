import React, { Fragment, useState, useRef } from "react";
import NavbarWhite from "./NavbarWhite";

const Contact_us = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., sending data to a server or performing other actions.
  };

  return (
    <Fragment>
      {/* Your existing code here */}
      <div className="wrapper light-wrapper">
        <div className="container inner pt-70">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2 className="section-title text-center">Get in Touch</h2>
              <p className="text-center">
                Let's make something amazing together. Contact us for new
                creative ideas, collaborations, photowalks, and to get to know
                more about Junoon.
              </p>
              <br></br>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    ref={nameRef}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    ref={emailRef}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    ref={phoneRef}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    onChange={handleMessageChange}
                    ref={messageRef}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact_us;