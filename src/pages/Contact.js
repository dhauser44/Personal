import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Dylan Hauser via email @ dylanhauser@promoquo.com"
  >
    <div className="post-bkg">
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email me at: </p>
          <p><a href="mailto:dylanhauser@promoquo.com">dylanhauser@promoquo.com</a></p>
        </div>
        <ContactIcons />
      </article>
    </div>
  </Main>
);

export default Contact;
