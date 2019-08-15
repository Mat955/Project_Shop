import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import './ContactPage.scss';

const ContactPage = () => (
  <Container className="contact-page">
    <ScrollAnimation animateIn="fadeIn" delay={700}>
      <PageTitle>Contact With Us</PageTitle>
      <div className="contact-header">
        <h1>Send Message and Ask for your product</h1>
      </div>
      <form className="contact-form">
        <div className="contact-name">
          <input type="text" name="name" placeholder="Name"></input>
        </div>
        <div className="contact-email">
          <input type="text" name="email" placeholder="Your Email"></input>
        </div>
        <div className="contact-subject">
          <input type="text" name="subject" placeholder="Title"></input>
        </div>
        <div className="contact-message">
          <textarea rows="3" cols="86" name="comment" form="userform" placeholder="Your message"></textarea>
        </div>
        <Button className="btn">Send</Button>
      </form>
    </ScrollAnimation>
  </Container>
);

export default ContactPage;