import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Dylan Hauser's personal Website"}
  >
    <div className="post-bkg">
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
            <p>
              My first personal site, to provide insight into my work and my life.
            </p>
          </div>
        </header>
        <p> Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my {' '}
          <Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          view <Link to="/stats">site statistics</Link>, {' '}
          or <Link to="/contact">contact</Link> me.
        </p>
      </article>
    </div>
  </Main>
);

export default Index;
