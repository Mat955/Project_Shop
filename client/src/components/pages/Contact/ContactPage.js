import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Button from '../../common/Button/Button'

const ContactPage = () => (
  <div>
    <PageTitle>Contact With Us</PageTitle>
    <div className="contact-header">
      <h1>Napisz do nas!</h1>
    </div>
    <form className="">
      <div className="">
        <input type="text" name="name" placeholder="Imię"></input>
      </div>
      <div className="">
        <input type="text" name="email" placeholder="Twój email"></input>
      </div>
      <div className="">
        <input type="text" name="subject" placeholder="Tytuł"></input>
      </div>
      <div className="">
        <textarea rows="3" cols="86" name="comment" form="usrform" placeholder="Twoja wiadomość..."></textarea>
      </div>
      <Button variant="primary">Wyślij</Button>
    </form>
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            {/* <img src={icon2} alt="place"></img> */}
          </div>
          <p className="">ulduaps2</p>
        </div>
        <div className="">
          <div className="">
            {/* <img src={icon3} alt="cellphone"></img> */}
          </div>
          <p className="">3123123123</p>
        </div>
        <div className="">
          <div className="">
            {/* <img src={icon4} alt="at"></img> */}
          </div>
          <p className="">EMAIl</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;