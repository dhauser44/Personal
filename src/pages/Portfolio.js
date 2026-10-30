import React from 'react';
import PropTypes from 'prop-types';
import Main from '../layouts/Main';
import '../static/css/portfolio-document.css';

const {
  PUBLIC_URL,
} = process.env;
const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>);
const ExternalLink = ({
  href,
  children,
}) => (
  <a className="external-link" href={href} target="_blank" rel="noreferrer">
    {children} <Arrow />
  </a>);
const Page = ({
  id,
  tone,
  className,
  children,
}) => (
  <section id={id} className={`page page--${tone} ${className}`}>
    {children}
  </section>);
const Portfolio = () => (
  <Main
    fullPage
    title="Portfolio"
    description="Dylan Hauser’s design portfolio: Independent Financial Group, Endorse, and Annuities Today."
  >
    <div id="portfolio-document">
      <div className="document">
        <nav className="portfolio-nav" aria-label="Portfolio projects">
          <strong>Content:</strong>
          <a href="#independent-financial-group">Independent Financial Group</a>
          <a href="#endorse">Endorse</a>
          <a href="#annuities-today">Annuities Today</a>
        </nav>
        <Page
          className="case-cover case-cover--balanced"
          id="independent-financial-group"
        >
          <div className="case-title">
            <p className="eyebrow" />
            <h2>Independent Financial Group</h2>
            <div className="case-summary case-summary--centered">
              <p>
                Central digital interface for an independent broker-dealer. Advisors of all
                experience levels converge on this site to navigate essential trading platforms
                and information.
              </p>
              <div className="case-live-links"><ExternalLink href="https://ifgsd.com">ifgsd.com</ExternalLink><ExternalLink href="https://recruiting.ifgsd.com/app/home">recruiting.ifgsd.com</ExternalLink></div>
            </div>
          </div>
        </Page>

        <section className="ifg-case-study" aria-label="IFG website and advisor experience">
          <section className="ifg-block page-three-balanced">
            <img
              className="browser block w-full object-cover"
              src={`${PUBLIC_URL}/images/portfolio/4F048F53-F23F-431B-9D7D-AD0D89EB7DC0.png`}
              alt="Independent Financial Group public website homepage"
            />
            <div className="ifg-public-detail">
              <div className="page-heading page-heading--below public-image-copy"><p>The experience introduces IFG’s independent model through a calm, authoritative system—balancing institutional credibility with a more human point of view. This is where the majority of search traffic enters, so the home page needs both eye-catching content and clear calls to action.</p></div>
              <img
                className="public-secondary-image"
                src={`${PUBLIC_URL}/images/portfolio/F0391927-10C6-495F-97D2-DB8866E5F790.png`}
                alt="Independent Financial Group approved annuity products portal"
              />
            </div>
          </section>

          <section className="ifg-block page-four-balanced">
            <div className="split-heading"><div><h2 className="advisor-title">Advisor Priorities</h2></div></div>
            <div className="advisor-screenshots advisor-screenshots--full">
              <img
                src={`${PUBLIC_URL}/images/portfolio/3272935A-4533-4F78-ADBC-71A22931C82F.png`}
                alt="Independent Financial Group advisor dashboard"
              />
            </div>
            <div className="advisor-detail-row advisor-detail-row--copy-only">
              <p className="advisor-summary">The advisor portal is a completely different experience. Current clients rely on it to find services they use every day. It also displays a wealth of announcements, files, content, and more. Clear organization is essential to providing a good user experience.</p>
            </div>
          </section>

          <section className="ifg-block information-page ifg-block--navy">
            <div className="page-heading compact"><p className="eyebrow" /><h2>Complexity,<br /><em>made navigable.</em></h2></div>
            <div className="insight-grid insight-grid--inverse"><div><span>Challenge</span><p>Combine landing pages with an advisor-accessible portal. Public-facing web pages require secure user login. Serving advisors of all ages requires simplifying complex interfaces.</p></div><div><span>Approach</span><p>Provide detailed business information on the public site. Optimize for SEO and GEO, and analyze traffic to public pages. Make the portal as user-friendly as possible.</p></div><div><span>Result</span><p>Clear analysis of web traffic, contact forms, and calls to action. The advisor portal is highly organized and accessible to every user.</p></div></div>
            <div className="page-live-link"><ExternalLink href="https://ifgsd.com">ifgsd.com</ExternalLink></div>
          </section>

        </section>

        <Page className="recruit-page">
          <div className="split-heading recruit-heading"><div><p className="eyebrow">Recruiting platform</p><h2>User Experience Meets Onboarding</h2></div></div>
          <img
            className="browser block w-full object-cover"
            src={`${PUBLIC_URL}/images/portfolio/F89F6473-5AF5-4290-9AF5-289CEC9C5D8D.png`}
            alt="Independent Financial Group recruiting and onboarding experience"
          />
          <div className="recruit-lower-grid">
            <img
              src={`${PUBLIC_URL}/images/portfolio/CFE2CE0C-E5A2-40FE-B9DC-27BDAD15268D.png`}
              alt="Independent Financial Group technology overview portal"
            />
            <p className="recruit-lower-copy">The recruiting experience carries the trust of the parent brand while introducing a more direct, energetic voice for advisors considering a transition. Big decisions require confidence in the brand they are choosing to partner with.</p>
          </div>
          <img
            className="recruit-bottom-image"
            src={`${PUBLIC_URL}/images/portfolio/1C3C091A-23E2-49E1-9C83-9B8135CF34FA.png`}
            alt="Independent Financial Group product offerings portal"
          />
        </Page>

        <Page tone="navy" className="information-page">
          <div className="page-heading compact"><p className="eyebrow" /><h2>Design,<br /><span className="fg-inline-italic">drives sales.</span></h2></div>
          <div className="insight-grid insight-grid--inverse"><div><span>Challenge</span><p>Differentiate the recruiting site from the advisor portal and Independent Financial Group’s main public website.</p></div><div><span>Approach</span><p>Avoid cannibalizing web traffic, focus on calls to action, provide a strong content experience, and maintain impeccable navigation throughout the site.</p></div><div><span>Result</span><p>IFGSD.com search traffic remained untouched while we created a standalone recruiting tool optimized for transition-specific information and content for new advisors.</p></div></div>
          <div className="page-live-link"><ExternalLink href="https://recruiting.ifgsd.com/app/home">recruiting.ifgsd.com/app/home</ExternalLink></div>
        </Page>

        <Page
          className="case-cover case-cover--balanced"
          id="endorse"
        >
          <div className="case-title">
            <p className="eyebrow" />
            <h2>Endorse</h2>
            <div className="case-summary case-summary--centered">
              <p>A payment platform built for social promotions between brands and creators</p>
              <div className="case-live-links"><ExternalLink href="https://getendorse.com">getendorse.com</ExternalLink></div>
              <div className="page-heading compact"><p className="eyebrow">Responsive design</p><p>Deeply ambitious project to deliver payment, messaging, secure sign in, and much more. The arena where I learned most of what I know about design.</p></div>
            </div>
          </div>
        </Page>

        <Page tone="soft" className="endorse-overview-page">

          <div className="device-stage">
            <div className="desktop-device">
              <img
                className="desktop-device-image"
                src={`${PUBLIC_URL}/images/portfolio/EF63B4D1-B631-4698-974E-712495351BD2.png`}
                alt="Endorse social promotions landing page"
              />
            </div>
            <div className="endorse-features">
              <img
                className="mobile-device-image"
                src={`${PUBLIC_URL}/images/portfolio/88891142-E71F-4692-B413-DB326DD45475.png`}
                alt="Endorse creator dashboard"
              />
              <div className="feature-grid">
                <h3>Features</h3>
                <div><span>01</span><b>Secure Sign In</b></div>
                <div><span>02</span><b>Subscriptions / Peer-to-Peer Payments</b></div>
                <div><span>03</span><b>User Messaging</b></div>
                <div><span>04</span><b>User Profile Customization</b></div>
              </div>
            </div>
          </div>
        </Page>

        <Page tone="navy" className="information-page">
          <div className="page-heading compact"><p className="eyebrow" /><h2>UX should be,<br /><span className="fg-inline-italic">considerate.</span></h2></div>
          <div className="insight-grid insight-grid--inverse"><div><span>Challenge</span><p>Create a platform from the ground up to facilitate complex financial agreements for tasks.</p></div><div><span>Approach</span><p>Start by creating user profiles and building personalization, then move to discovery, messaging, and ultimately payments.</p></div><div><span>Result</span><p>Clear calls to action on landing pages, SEO and AEO supported by blogs, secure user logins, subscriptions, peer-to-peer payments, messaging, and profile personalization.</p></div></div>
          <div className="page-live-link"><ExternalLink href="https://getendorse.com">getendorse.com</ExternalLink></div>
        </Page>

        <Page
          className="case-cover case-cover--balanced"
          id="annuities-today"
        >
          <div className="case-title">
            <h2>Annuities Today</h2>
            <div className="case-summary case-summary--centered">
              <p>
                Making a complex financial category easier to understand, compare, and discuss
                with confidence.
              </p>
              <div className="case-live-links"><ExternalLink href="https://annuitiestoday.com">annuitiestoday.com</ExternalLink></div>
            </div>
          </div>
        </Page>

        <Page className="annuity-page">
          <div className="annuity-image-stack">
            <img
              src={`${PUBLIC_URL}/images/portfolio/4B05E887-1A72-4D6D-AB00-AB9F8DB369B0.png`}
              alt="Annuities Today comparison tool landing page"
            />
            <img
              src={`${PUBLIC_URL}/images/portfolio/D392C6BC-9DF1-4B2F-98B5-CD5A8FA48751.png`}
              alt="Annuities Today product selection and inputs"
            />
          </div>
        </Page>

        <Page
          key="annuities-contact-v2"
          tone="soft"
          className="final-page"
        >
          <div className="final-top">
            <div className="final-copy"><p className="eyebrow">Product comparison</p><h2>Information that<br />supports a decision.</h2><p>Comparisons between 140+ annuity products all done through backend calculations instantly. Delivering hundreds of data points to the dashboard, all available to be exported.</p></div>
            <img
              className="final-product-image"
              src={`${PUBLIC_URL}/images/portfolio/5CB942EE-4BD2-440E-99D1-F5C78C8D930B.png`}
              alt="Annuities Today product comparison table"
            />
          </div>
        </Page>
      </div>
    </div>
  </Main>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Page.propTypes = {
  id: PropTypes.string,
  tone: PropTypes.oneOf(['light', 'navy', 'lime', 'soft']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Page.defaultProps = {
  id: undefined,
  tone: 'light',
  className: '',
};
export default Portfolio;
