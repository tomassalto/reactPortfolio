import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jx98bvg', 'template_xucbasa', form.current, 'rIAtV-CkYOKTKAN4D')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tomasagustinsalto@gmail.com</h5>
            <a href="mailto:tomasagustinsalto@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>tomassalto</h5>
            <a href="https://m.me/TommySalto99/">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>tomasagustinsalto@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=5491128443673" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact