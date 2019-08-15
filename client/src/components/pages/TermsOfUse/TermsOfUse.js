import React from 'react'
import { Container } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import './TermsOfUse.scss';

const FaqPage = () => (
  <Container className="term-of-use-container">
    <ScrollAnimation animateIn="fadeIn" delay={700}>
      <h1>Terms Of Use</h1>
      <p>Welcome to the NIKE community!  You are reading these Terms because you are using a NIKE website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or services, all of which are part of NIKE’s Platform (“Platform”).  You may access the Platform through a computer, mobile phone, tablet, console, or other technology, which we refer to here as a “Device”.  Your carrier's normal rates and fees apply to your Device.</p>
      <h3>Our Terms May Change</h3>
      <p>Some jurisdictions do not permit unilateral updates or changes to consumer terms, so this paragraph may not apply to you.  [See Canada terms.] We may update these Terms from time to time.  If a material change is made, we will post a notice on the Platform or send you a notification.  Read through any changes, and if you don’t agree to them, please stop using the Platform.  If you continue to use our Platform after we notify you of changes, you will be deemed to have accepted the updated Terms, except to the extent prohibited by applicable law.
      Terms of Sale.  By making any purchase with us, you also agree to the Terms of Sale that apply in your country or region. [See Hungarian terms.]
      Privacy Policy.  Our Privacy Policy describes the collection and use of personal information on the Platform and applies to your use of the Platform.
      Important Notice for Amateur Athletes.  You are responsible for ensuring that your participation on the Platform does not affect your eligibility as an amateur athlete.  Please check with your amateur athletic association for the rules that apply to you.  NIKE is not responsible or liable for your use of the Platform resulting in your ineligibility as an amateur athlete. </p>
      <h3>1. GROUND RULES</h3>
      <p>consent from your parent or guardian.  There may be certain age restrictions for specific Platform services in various countries.

      Rules for Registration.  When you register for an account with us, the following rules apply:

      Be True:  Provide accurate and current registration information.
      Be You:  Keep your registration personal.  Do not register for more than one  NIKE account, register a NIKE account on behalf of someone else, or transfer your account.
      Be Secure:  Keep your username, password and other login credentials secure and do not allow anyone else to use your account.
      Be Responsible:  Inform NIKE immediately of any unauthorized use of your NIKE   account.  You are responsible for anything that happens through your NIKE account – with or without your permission. TO THE MAXIMUM EXTENT ALLOWED BY APPLICABLE LAW, NIKE IS NOT RESPONSIBLE FOR ANY LOSS OR ACTIVITY THAT RESULTS FROM THE UNAUTHORIZED USE OF YOUR ACCOUNT.</p>
      <h3>OWNERSHIP OF CONTENT</h3>
      <p>Except for User Content (defined below), all of the content on our Platform - including text, software, scripts, code, designs, graphics, photos, sounds, music, videos, applications, interactive features, articles, news stories, sketches, animations, stickers, general artwork and other content ("Content") - is owned by NIKE or others we license Content from, and is protected by copyright, trademark, patent and other laws. NIKE reserves all rights not expressly described in these Terms.
      </p>
    </ScrollAnimation>
  </Container >
);

export default FaqPage;