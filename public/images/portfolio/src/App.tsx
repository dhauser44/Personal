const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="external-link" href={href} target="_blank" rel="noreferrer">
    {children} <Arrow />
  </a>
);

function Page({
  number,
  project,
  label = "Product design portfolio",
  showLabel = false,
  showProject = true,
  tone = "light",
  className = "",
  children,
}: {
  number: string;
  project: string;
  label?: string;
  showLabel?: boolean;
  showProject?: boolean;
  tone?: "light" | "navy" | "lime" | "soft";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`page page--${tone} ${className}`}>
      <div className="page-chrome">
        {showLabel && <span className="page-label">{label}</span>}
        {showProject && <span className="page-project">{project}</span>}
        <span className="page-number">{number} / 13</span>
      </div>
      {children}
    </section>
  );
}

function Browser({
  brand,
  variant,
}: {
  brand: "ifg" | "recruit" | "endorse" | "annuities";
  variant: string;
}) {
  return (
    <div className={`browser browser--${brand}`}>
      <div className="browser-bar">
        <div><i /><i /><i /></div>
        <span>{brand === "recruit" ? "recruiting.ifgsd.com" : brand === "ifg" ? "ifgsd.com" : brand === "endorse" ? "getendorse.com" : "annuitiestoday.com"}</span>
      </div>
      <div className="site-nav">
        <strong>{brand === "ifg" || brand === "recruit" ? "IFG" : brand === "endorse" ? "Endorse" : "Annuities Today"}</strong>
        <div><span>Solutions</span><span>Resources</span><span>About</span></div>
        <b>{brand === "endorse" ? "Log in" : "Get started"}</b>
      </div>
      {variant === "ifg-home" && (
        <div className="ifg-home">
          <div className="mock-copy">
            <small>Independent Financial Group</small>
            <h3>Independence<br />is powerful.</h3>
            <p>Built for independent financial professionals and the people they serve.</p>
            <button>Discover IFG <Arrow /></button>
          </div>
          <div className="arch-art"><span /><span /><span /></div>
        </div>
      )}
      {variant === "advisor" && (
        <div className="advisor-ui">
          <div className="advisor-hero"><small>For financial professionals</small><h3>A partner built around your practice.</h3></div>
          <div className="stat-row"><div><b>600+</b><span>Advisors</span></div><div><b>35</b><span>Years independent</span></div><div><b>50</b><span>States served</span></div></div>
          <div className="content-lines"><span /><span /><span /></div>
        </div>
      )}
      {variant === "recruit-home" && (
        <div className="recruit-home">
          <div className="recruit-orbit"><i /><i /><strong>IFG</strong></div>
          <div><small>Your business. Your future.</small><h3>Independence,<br />on your terms.</h3><p>See what changes when your broker-dealer is built to support you.</p><button>Start a conversation</button></div>
        </div>
      )}
      {variant === "endorse-home" && (
        <div className="endorse-home">
          <div><span className="pill">Trusted referrals, made simple</span><h3>Turn happy clients into your best growth channel.</h3><p>Automated, compliant referral experiences designed for modern teams.</p><button>Get started <Arrow /></button></div>
          <div className="phone">
            <span className="phone-brand">Endorse</span>
            <div className="avatar">MC</div>
            <b>How was your experience?</b>
            <div className="stars">★★★★★</div>
            <i /><i /><button>Continue</button>
          </div>
        </div>
      )}
      {variant === "endorse-dashboard" && (
        <div className="dash">
          <aside><b>E</b><i /><i /><i /><i /></aside>
          <main>
            <small>Overview</small><h3>Good morning, Maya</h3>
            <div className="dash-stats"><div><span>Requests sent</span><b>1,248</b><em>+12.4%</em></div><div><span>Response rate</span><b>68%</b><em>+4.2%</em></div><div><span>New referrals</span><b>184</b><em>+18.1%</em></div></div>
            <div className="chart"><span>Referral activity</span><svg viewBox="0 0 500 120"><path d="M0 100 C70 90 90 95 140 64 S220 80 270 45 S350 66 400 30 S460 37 500 8" /></svg></div>
          </main>
        </div>
      )}
      {variant === "annuities-home" && (
        <div className="annuities-home">
          <div><small>Clarity for your financial future</small><h3>Understand annuities.<br />Choose with confidence.</h3><p>Plain-language education and side-by-side tools for a decision that deserves clarity.</p><button>Explore annuities</button></div>
          <div className="ring-art"><span>Income</span><span>Growth</span><span>Legacy</span></div>
        </div>
      )}
      {variant === "compare" && (
        <div className="compare">
          <div className="compare-head"><small>Product comparison</small><h3>Find the right fit</h3><div><span>Income</span><span>Growth</span><span>Protection</span></div></div>
          <div className="compare-table">
            <div><strong>Fixed</strong><b>Predictable</b><span>Guaranteed rate</span><span>Principal protection</span><button>View details</button></div>
            <div className="featured"><em>Most popular</em><strong>Fixed Indexed</strong><b>Balanced</b><span>Market-linked growth</span><span>Downside protection</span><button>View details</button></div>
            <div><strong>Variable</strong><b>Growth focused</b><span>Market participation</span><span>Flexible options</span><button>View details</button></div>
          </div>
        </div>
      )}
    </div>
  );
}

function Intro() {
  return (
    <Page number="01" project="Introduction" showProject={false} tone="navy" className="intro-page">
      <div className="intro-content">
        <p className="eyebrow"><br /></p>
        <h1>
          <span>Dylan Hauser</span>
          <span className="intro-accent">Design Portfolio</span>
        </h1>
        <div className="intro-bottom">
          <div className="intro-index">
            <span>01</span><p>Independent Financial Group</p>
            <span>02</span><p>Endorse</p>
            <span>03</span><p>Annuities Today</p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default function App() {
  return (
    <main>
      <div className="screen-toolbar">
        <div><strong>Portfolio</strong><span>13 pages · A4 portrait</span></div>
        <button onClick={() => window.print()}>Print / Save PDF <Arrow /></button>
      </div>

      <div className="document">
        <Intro />

        <Page number="02" project="Independent Financial Group" showLabel={false} className="case-cover case-cover--balanced">
          <div className="case-number">01</div>
          <div className="case-title">
            <p className="eyebrow" />
            <h2>Independent<br />Financial Group</h2>
            <div className="case-summary case-summary--centered">
              <p>Central digital interface for an independent broker-dealer. Advisors of all experience levels converge on this site to navigate essential trading platforms and information.</p>
              <div className="case-live-links"><ExternalLink href="https://ifgsd.com">ifgsd.com</ExternalLink><ExternalLink href="https://recruiting.ifgsd.com/app/home">recruiting.ifgsd.com</ExternalLink></div>
            </div>
          </div>
        </Page>

        <Page number="03" project="IFG · Public website" showLabel={false} tone="soft" className="page-three-balanced">
          <h2 className="public-image-title">Confident and eye-catching</h2>
          <img
            className="browser block w-full object-cover"
            src="/4F048F53-F23F-431B-9D7D-AD0D89EB7DC0.png"
            alt="Independent Financial Group public website homepage"
          />
          <div className="page-heading page-heading--below public-image-copy"><p>The experience introduces IFG’s independent model through a calm, authoritative system—balancing institutional credibility with a more human point of view. This is where the majority of search traffic enters, so the home page needs both eye-catching content and clear calls to action.</p></div>
          <img
            className="public-secondary-image"
            src="/F0391927-10C6-495F-97D2-DB8866E5F790.png"
            alt="Independent Financial Group approved annuity products portal"
          />
        </Page>

        <Page number="04" project="IFG · Advisor experience" className="page-four-balanced">
          <div className="split-heading"><div><h2 className="advisor-title">Advisor Priorities</h2></div></div>
          <div className="advisor-screenshots advisor-screenshots--full">
            <img
              src="/3272935A-4533-4F78-ADBC-71A22931C82F.png"
              alt="Independent Financial Group advisor dashboard"
            />
          </div>
          <div className="advisor-detail-row advisor-detail-row--copy-only">
            <p className="advisor-summary">The advisor portal is a completely different experience. Current clients rely on it to find services they use every day. It also displays a wealth of announcements, files, content, and more. Clear organization is essential to providing a good user experience.</p>
          </div>
        </Page>

        <Page number="05" project="IFG" tone="navy" className="information-page">
          <div className="page-heading compact"><p className="eyebrow" /><h2>Complexity,<br /><em>made navigable.</em></h2></div>
          <div className="insight-grid insight-grid--inverse"><div><span>Challenge</span><p>Combine landing pages with an advisor-accessible portal. Public-facing web pages require secure user login. Serving advisors of all ages requires simplifying complex interfaces.</p></div><div><span>Approach</span><p>Provide detailed business information on the public site. Optimize for SEO and GEO, and analyze traffic to public pages. Make the portal as user-friendly as possible.</p></div><div><span>Result</span><p>Clear analysis of web traffic, contact forms, and calls to action. The advisor portal is highly organized and accessible to every user.</p></div></div>
          <div className="page-live-link"><ExternalLink href="https://ifgsd.com">ifgsd.com</ExternalLink></div>
        </Page>

        <Page number="06" project="IFG · Recruiting platform" className="recruit-page">
          <div className="split-heading recruit-heading"><div><p className="eyebrow">Recruiting platform</p><h2>User Experience Meets Onboarding</h2></div></div>
          <img
            className="browser block w-full object-cover"
            src="/F89F6473-5AF5-4290-9AF5-289CEC9C5D8D.png"
            alt="Independent Financial Group recruiting and onboarding experience"
          />
          <div className="recruit-lower-grid">
            <img
              src="/CFE2CE0C-E5A2-40FE-B9DC-27BDAD15268D.png"
              alt="Independent Financial Group technology overview portal"
            />
            <p className="recruit-lower-copy">The recruiting experience carries the trust of the parent brand while introducing a more direct, energetic voice for advisors considering a transition. Big decisions require confidence in the brand they are choosing to partner with.</p>
          </div>
          <img
            className="recruit-bottom-image"
            src="/1C3C091A-23E2-49E1-9C83-9B8135CF34FA.png"
            alt="Independent Financial Group product offerings portal"
          />
        </Page>

        <Page number="07" project={"IFG\u00a0\u00a0\u00a0"} tone="navy" className="information-page">
          <div className="page-heading compact"><p className="eyebrow" /><h2>Design,<br /><span className="fg-inline-italic">drives sales.</span></h2></div>
          <div className="insight-grid insight-grid--inverse"><div><span>Challenge</span><p>Differentiate the recruiting site from the advisor portal and Independent Financial Group’s main public website.</p></div><div><span>Approach</span><p>Avoid cannibalizing web traffic, focus on calls to action, provide a strong content experience, and maintain impeccable navigation throughout the site.</p></div><div><span>Result</span><p>IFGSD.com search traffic remained untouched while we created a standalone recruiting tool optimized for transition-specific information and content for new advisors.</p></div></div>
          <div className="page-live-link"><ExternalLink href="https://recruiting.ifgsd.com/app/home">recruiting.ifgsd.com/app/home</ExternalLink></div>
        </Page>

        <Page number="08" project="Endorse" showLabel={false} className="case-cover case-cover--balanced">
          <div className="case-number">02</div>
          <div className="case-title">
            <p className="eyebrow" />
            <h2>Endorse</h2>
            <div className="case-summary case-summary--centered">
              <p>A payment platform built for social promotions between brands and creators</p>
              <div className="case-live-links"><ExternalLink href="https://getendorse.com">getendorse.com</ExternalLink></div>
            </div>
          </div>
        </Page>

        <Page number="09" project="Endorse · Overview" tone="soft" className="endorse-overview-page">
          <div className="page-heading compact"><p className="eyebrow">Responsive design</p><h2>One system<br />Complex Agreements</h2><p>Deeply ambitious project to deliver payment, messaging, secure sign in, and much more. The arena where I learned most of what I know about design.</p></div>
          <div className="device-stage">
            <div className="desktop-device">
              <img
                className="desktop-device-image"
                src="/EF63B4D1-B631-4698-974E-712495351BD2.png"
                alt="Endorse social promotions landing page"
              />
            </div>
            <img
              className="mobile-device-image"
              src="/88891142-E71F-4692-B413-DB326DD45475.png"
              alt="Endorse creator dashboard"
            />
          </div>
          <div className="feature-grid">
            <div><span>01</span><b>Secure Sign In</b></div>
            <div><span>02</span><b>Subscriptions / Peer-to-Peer Payments</b></div>
            <div><span>03</span><b>User Messaging</b></div>
            <div><span>04</span><b>User Profile Customization</b></div>
          </div>
        </Page>

        <Page number="10" project="Endorse" tone="navy" className="information-page">
          <div className="page-heading compact"><p className="eyebrow" /><h2>UX should be,<br /><span className="fg-inline-italic">considerate.</span></h2></div>
          <div className="insight-grid insight-grid--inverse"><div><span>Challenge</span><p>Create a platform from the ground up to facilitate complex financial agreements for tasks.</p></div><div><span>Approach</span><p>Start by creating user profiles and building personalization, then move to discovery, messaging, and ultimately payments.</p></div><div><span>Result</span><p>Clear calls to action on landing pages, SEO and AEO supported by blogs, secure user logins, subscriptions, peer-to-peer payments, messaging, and profile personalization.</p></div></div>
          <div className="page-live-link"><ExternalLink href="https://getendorse.com">getendorse.com</ExternalLink></div>
        </Page>

        <Page number="11" project="Annuities Today" showLabel={false} className="case-cover case-cover--balanced">
          <div className="case-number">03</div>
          <div className="case-title">
            <p className="eyebrow" />
            <h2>Annuities<br />Today</h2>
            <div className="case-summary case-summary--centered">
              <p>Making a complex financial category easier to understand, compare, and discuss with confidence.</p>
              <div className="case-live-links"><ExternalLink href="https://annuitiestoday.com">annuitiestoday.com</ExternalLink></div>
            </div>
          </div>
        </Page>

        <Page number="12" project="Annuities Today" className="annuity-page">
          <div className="split-heading"><div><p className="eyebrow">03 · Financial information design</p><h2>Annuities<br />Today</h2></div><div><p>Making a complex financial category easier to understand, compare, and discuss with confidence.</p><ExternalLink href="https://annuitiestoday.com">annuitiestoday.com</ExternalLink></div></div>
          <div className="annuity-image-stack">
            <img
              src="/4B05E887-1A72-4D6D-AB00-AB9F8DB369B0.png"
              alt="Annuities Today comparison tool landing page"
            />
            <img
              src="/D392C6BC-9DF1-4B2F-98B5-CD5A8FA48751.png"
              alt="Annuities Today product selection and inputs"
            />
          </div>
        </Page>

        <Page key="annuities-contact-v2" number="13" project="Annuities Today · Comparison & contact" tone="soft" className="final-page">
          <div className="final-top">
            <div className="final-copy"><p className="eyebrow">Product comparison</p><h2>Information that<br />supports a decision.</h2><p>Comparisons between 140+ annuity products all done through backend calculations instantly. Delivering hundreds of data points to the dashboard, all available to be exported.</p></div>
            <img
              className="final-product-image"
              src="/5CB942EE-4BD2-440E-99D1-F5C78C8D930B.png"
              alt="Annuities Today product comparison table"
            />
          </div>
          <div className="contact-strip">
            <div><p className="eyebrow" /><h2>Let’s build <br /><span className="fg-inline-italic">together.</span></h2></div>
            <div className="contact-details contact-details--personal">
              <p>
                <strong>Dylan Hauser</strong>
                <span>Product Designer</span>
                <a href="mailto:dylan.hauser@yahoo.com">dylan.hauser@yahoo.com</a>
              </p>
            </div>
          </div>
        </Page>
      </div>
    </main>
  );
}
