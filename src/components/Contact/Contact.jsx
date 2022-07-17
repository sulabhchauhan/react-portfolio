import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uz3dk0c', 'template_bmng5cv', form.current, 'uXz6OdWtBzLvvhqQ4')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <section id='Contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>

            <h4>Email</h4>
            <h5>sulabh1616@gmail.com</h5>
            <a href='mailto:sulabh1616@gmail.com' target='_blank'>Send a message</a>

          </article>

          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_option-icon'/>

            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?phone+917018607234' target='_blank'>Send a message</a>

          </article>

        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name= 'email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact