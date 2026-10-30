import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import skillGroups from '../data/resume/skillGroups';

const sections = [
  'Experience',
  'Education',
  'Credentials',
  'Skills',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Dylan Hauser's resume. Product manager with 7+ years of experience across B2B SaaS, healthcare, financial services, and web platforms."
  >
    <div className="post-bkg">
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/resume">Resume</Link></h2>
            <p>Dylan Hauser | Product Manager | San Diego, CA</p>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>))}
            </div>

          </div>
        </header>
        <p>
          Product manager and digital experience professional with 7+ years of experience spanning
          B2B SaaS, healthcare, financial services, and web platforms. Founded and developed Endorse
          Marketing, guiding a SaaS product from customer discovery and prototype through
          prioritization, technical delivery, and launch. Experienced translating user and business
          needs into product requirements, workflows, roadmaps, and cross-functional execution with
          designers, developers, and business partners. Combines hands-on React, JavaScript, API,
          and database familiarity with Google Analytics, customer feedback, and digital performance
          insights to refine product and service experiences.
        </p>
        <Experience data={positions} />
        <Education data={degrees} />
        <section className="education">
          <div className="link-to" id="credentials" />
          <div className="title"><h3>Credentials</h3></div>
          <p>Google Analytics | OMCA Online Marketing | SEO Foundations | Google Ads</p>
        </section>
        <section className="skills">
          <div className="link-to" id="skills" />
          <div className="title"><h3>Skills</h3></div>
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <p>{group.description}</p>
            </div>
          ))}
        </section>
        <References />

      </article>
    </div>
  </Main>
);

export default Resume;
