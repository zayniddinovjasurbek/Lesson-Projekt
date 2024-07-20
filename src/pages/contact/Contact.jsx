import React from 'react'
import './Contact.css'

import { LuPhone } from "react-icons/lu";
import { HiEnvelope } from "react-icons/hi2";


const Contact = () => {
  return (
<section className="contact">
        <div className="contact-info">
            <div className="contact-call">
                <div className="contact-call">
                    <div className="contact-call__icon">
                        <div>
                            <LuPhone/>
                        </div>
                        <h3></h3>
                    </div>
                    <p>we are available 24/7, 7 days a week.</p>
                    <p>Phone: <a href="+998 93 666 72 34">+998 93 666 72 34</a></p>
                </div>
                <div className="contact-message">
                    <div className="contact-message__icon">
                        <div>
                            <HiEnvelope/>
                        </div>
                        <h3>Write To Us</h3>
                    </div>
                    <p>Fill out form and we will contact you within 24 hours</p>
                    <p>Emails: <a href="mailto:custromer@exclusive.com">custromer@exclusive.com</a></p>
                    <p>Emails: <a href="mailto:custromer@exclusive.com">custromer@exclusive.com</a></p>
                </div>
            </div>

            <div className="contack-form">
              <div className="form-imputs">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Your Email' />
                <input type="text" placeholder='Your Name' />
              </div>
              <textarea name="message" id="meassage" placeholder='Your Message'></textarea>
              <button>Send Message</button>
            </div>

        </div>
    </section>
  )
}

export default Contact
