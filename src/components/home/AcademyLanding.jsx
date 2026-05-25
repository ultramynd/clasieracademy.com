import Icons from "components/common/Icons";
import Link from "next/link";
import React from "react";

const academyAsset = (name) =>
  `https://academy.clasier.com/assets/img/academy/${name}`;

const features = [
  {
    icon: "books",
    title: "Strategic positioning",
    text: "Move from being one of many to the professional or brand people choose first.",
  },
  {
    icon: "comments",
    title: "Influence-led communication",
    text: "Speak, write, and present your value with clarity, authority, and commercial impact.",
  },
  {
    icon: "star",
    title: "Live refinement",
    text: "Apply the frameworks in real time with a curated room built for depth and interaction.",
  },
];

const modules = [
  "Strategic Positioning for Competitive Advantage",
  "Crafting a Compelling Professional or Business Narrative",
  "Influence-Driven Communication",
  "Authority Building and Personal or Corporate Branding",
  "Messaging That Converts",
  "Real-World Application and Live Refinement",
];

const facilitators = [
  ["Narrative Intelligence", "Sam Gaza Timothy", "Chief Publishing Officer, Clasier Publishing Ltd."],
  ["Persuasion Psychology", "Akinwumi Akinola", "Behavioural Insights Lead, Policy Innovation Centre"],
  ["Digital Mastery", "Msen Nabo", "Communications Officer, International IDEA"],
  ["AI Hacks", "Dr. Kunle Kakanfo", "Founder, AI for Social Impact (AI4SI)"],
  ["Marketing and Advertising", "Adaeze Ihuoma", "Head, Marketing Department, Hall7 Real Estate"],
  ["Media Advantage", "Kayode Kikiolu", "Presenter, Channels TV"],
];

const outcomes = [
  "A clearly defined positioning strategy",
  "A refined professional or corporate narrative",
  "Stronger communication frameworks",
  "Increased confidence and communication clarity",
  "Practical tools you can apply immediately",
];

export default function AcademyLanding() {
  return (
    <div className="academy-landing">
      <section className="academy-showcase" id="overview">
        <img
          src={academyAsset("hero-edge.jpg")}
          alt="A confident professional speaking with authority"
          className="academy-showcase-image"
        />
        <div className="academy-showcase-card">
          <span className="academy-label">The Communication Edge</span>
          <h1>How winning professionals and brands position to outperform.</h1>
          <p>
            A two-day intensive in Abuja for communication professionals,
            founders, teams, and growth-minded startups ready to lead, influence,
            and win.
          </p>
          <div className="academy-actions">
            <a href="#reserve-seat" className="btn btn-primary">
              Reserve your seat
            </a>
            <a href="#curriculum" className="academy-text-link">
              Explore curriculum <Icons icon="arrowRight" className="ml-2" />
            </a>
          </div>
          <div className="academy-sale-ribbon">50 seats</div>
        </div>
      </section>

      <section className="academy-feature-row">
        <div className="container">
          <div className="row">
            {features.map((feature) => (
              <div className="col-md-4 col-12" key={feature.title}>
                <article className="academy-feature">
                  <span>
                    <Icons icon={feature.icon} />
                  </span>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section" id="curriculum">
        <div className="container">
          <div className="academy-section-head">
            <div>
              <span className="academy-kicker">Curriculum</span>
              <h2>Practical, high-level insight you can apply immediately.</h2>
            </div>
            <a href="#reserve-seat" className="btn btn-light">
              Register now
            </a>
          </div>

          <div className="academy-collection">
            <article className="academy-collection-main">
              <img
                src={academyAsset("curriculum-intro.jpg")}
                alt="A workshop session focused on audience strategy"
              />
              <div>
                <span>Six modules</span>
                <h3>Move from visible to preferred.</h3>
              </div>
            </article>
            <div className="academy-module-grid">
              {modules.slice(0, 4).map((module, index) => (
                <article className="academy-module-card" key={module}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{module}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="academy-cta-band">
        <div className="container">
          <span className="academy-kicker">Why this training exists</span>
          <h2>Technical competence is no longer enough on its own.</h2>
          <p>
            The market is noisy, attention is fragmented, and customers judge
            brands by how clearly and persuasively they communicate value. This
            training helps close the gap between expertise and market advantage.
          </p>
          <a href="#reserve-seat" className="btn btn-primary">
            Reserve your seat
          </a>
        </div>
      </section>

      <section className="academy-section academy-details" id="details">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 col-12">
              <span className="academy-kicker">Details</span>
              <h2>Lead, influence, and win in a curated room.</h2>
              <div className="academy-event-list">
                <article>
                  <strong>7 May 2026</strong>
                  <span>Day 1, 9am - 5pm</span>
                </article>
                <article>
                  <strong>8 May 2026</strong>
                  <span>Day 2, 10am - 4pm</span>
                </article>
                <article>
                  <strong>Abuja</strong>
                  <span>Exact venue shared with registered participants.</span>
                </article>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
              <div className="academy-video-card">
                <img
                  src={academyAsset("details-room.jpg")}
                  alt="A focused workshop room"
                />
                <div>
                  <Icons icon="playCircle" />
                  <h3>Only 50 seats available</h3>
                  <p>
                    Seats are limited to keep the experience interactive,
                    practical, and personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-section academy-facilitators">
        <div className="container">
          <div className="academy-section-head">
            <div>
              <span className="academy-kicker">Facilitators</span>
              <h2>Learn from operators across narrative, persuasion, visibility, and growth.</h2>
            </div>
          </div>
          <div className="row">
            {facilitators.map(([topic, name, role]) => (
              <div className="col-lg-4 col-md-6 col-12" key={topic}>
                <article className="academy-facilitator-card">
                  <span>{topic}</span>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-outcomes">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <img
                src={academyAsset("why-positioning.jpg")}
                alt="Strategic positioning and ROI conversation"
              />
            </div>
            <div className="col-lg-7 col-12 mt-4 mt-lg-0">
              <span className="academy-kicker">What you walk away with</span>
              <h2>The tools to stop blending in and start standing out.</h2>
              <div className="academy-outcome-list">
                {outcomes.map((outcome) => (
                  <div key={outcome}>
                    <Icons icon="star" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-reserve" id="reserve-seat">
        <div className="container">
          <div className="academy-reserve-panel">
            <div>
              <span className="academy-kicker">Reserve your seat</span>
              <h2>The Communication Edge is your competitive advantage.</h2>
              <p>
                Registration closes once slots are filled. Early bird bonuses
                include priority seating, an exclusive resource pack, and
                extended access to session recordings.
              </p>
            </div>
            <Link href="/register" className="btn btn-primary">
              Register and reserve
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
