import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/heads-hot.jpg`} alt="" />
      </Link>
      <header>
        <h2>Dylan Hauser</h2>
        <p><a href="mailto:dylanhauser@promoquo.com">dylanhauser@promoquo.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Web Design has become a major focus of mine in the last few years, and what better way
        to express that than through my own personal site.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Dylan Hauser <Link to="/">dylanhauser.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
