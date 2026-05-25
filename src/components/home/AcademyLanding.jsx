import Icons from "components/common/Icons";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import Link from "next/link";
import React from "react";

const academyAsset = (name) =>
  `https://academy.clasier.com/assets/img/academy/${name}`;

const features = [
  {
    icon: "books",
    title: "Command attention",
    text: "Win clients and customers by communicating with clarity, authority, and charm.",
  },
  {
    icon: "comments",
    title: "Stand out clearly",
    text: "Stop blending into crowded markets and become easier to choose.",
  },
  {
    icon: "star",
    title: "Become preferred",
    text: "Position yourself or your brand as the obvious choice in your field.",
  },
];

const storyParagraphs = [
  "Today's business landscape is not only noisy and attention-fragmented, it's hyper-competitive. The best professionals and businesses do not always get the biggest opportunities or make the most sales. The best-positioned ones do.",
  "Technical competence alone is no longer enough to guarantee best outcomes for professionals and businesses. There are dozens of people and organizations offering what you are selling. What distinguishes you, therefore, and why should more customers buy from you than your competitors?",
  "Despite the world getting smaller through digital access, visibility, influence, and sustained success are costlier today than ever. Professionals and brands are judged not just by what they do, but by how clearly, strategically, and persuasively they communicate their value.",
  "This is why many high-performing individuals and organizations remain under-recognized, underpaid, or overlooked. Not due to a lack of expertise, but due to gaps in market positioning, clear messaging, and strategic communication.",
  "The Communication Edge is designed to bridge this gap by equipping communication professionals and startups to craft compelling narratives, command authority, leverage digital, and consistently outperform in their fields.",
];

const experienceBullets = [
  "Command clients and customers' attention and win their repeat business",
  "Communicate with clarity, authority, and charm",
  "Stand out in the crowded market spaces where you do business",
  "Become the obvious, preferred choice in your field",
];

const promiseBullets = [
  "Clarify your message so prospective customers instantly get your value",
  "Build a powerful professional or business narrative that sells your value",
  "Communicate with precision, confidence, and influence",
  "Position yourself or your brand as the preferred choice, not just an option",
];

const learningTopics = [
  {
    title: "Strategic Positioning for Competitive Advantage",
    text: "How to move from being one of many to the one they choose.",
  },
  {
    title: "Crafting a Compelling Professional or Business Narrative",
    text: "Turn your expertise and value offering into a powerful story that compels sales.",
  },
  {
    title: "Influence-Driven Communication",
    text: "Speak and present in ways that command respect, trust, and action.",
  },
  {
    title: "Authority Building and Personal or Corporate Branding",
    text: "Position your brand as a thought leader in your space.",
  },
  {
    title: "Messaging That Converts",
    text: "Communicate your value clearly, so clients, customers, and stakeholders say yes faster.",
  },
  {
    title: "Real-World Application and Live Refinement",
    text: "Hands-on exercises to sharpen your positioning in real time.",
  },
];

const audience = [
  "Communication executives, officers, and teams",
  "Content creators and social media managers",
  "Branding, sales, and marketing executives, officers, and teams",
  "Business development and customer experience executives, officers, and teams",
  "Founders and C-Suite executives",
  "Consultants, coaches, and knowledge professionals",
  "Anyone serious about influence, visibility, selling, and professional growth",
];

const eventDays = [
  ["Day 1", "7 May, 2026", "9am - 5pm", "Abuja; venue shared with registered participants"],
  ["Day 2", "8 May, 2026", "10am - 4pm", "Same venue"],
];

const facilitators = [
  ["curriculum-intro.jpg", "Narrative Intelligence: The Power of Storytelling for Branding, Influence and Sales", "Sam Gaza Timothy", "Chief Publishing Officer, Clasier Publishing Ltd."],
  ["why-positioning.jpg", "Persuasion Psychology: The Science of Getting People To Do What You Want", "Akinwumi Akinola", "Behavioural Insights Lead, Policy Innovation Centre"],
  ["details-room.jpg", "Digital Mastery: Leveraging Social Media to Build Your Brand, Presence and Sales", "Msen Nabo", "Communications Officer, International IDEA"],
  ["why-now-bg.jpg", "AI Hacks: Boosting Professional and Corporate Productivity to Stay Ahead of the Curve", "Dr. Kunle Kakanfo", "Founder, AI for Social Impact (AI4SI)"],
  ["reserve-side.png", "Distilling Marketing and Advertising for Strategic Business Outcomes", "Adaeze Ihuoma", "Head, Marketing Department, Hall7 Real Estate"],
  ["hero-edge.jpg", "Media Advantage: How to Make the Media Work for Your Brand", "Kayode Kikiolu", "Presenter, Channels TV"],
  ["curriculum-intro.jpg", "The Strategic Art of Seducing Customers to Repeatedly Buy from You", "Afolake Agunbiade", "CEO, CADsync Consult"],
  ["why-positioning.jpg", "Cultivating Charisma and Charm for Influencing Outcomes in Your Favour", "Emmanuel Oyewole", "Lead Director, Influence Academy"],
];

const whyNowBullets = [
  "Earn greater customer attention and win better market share",
  "Sell more than others",
  "Influence buying and stakeholder decisions",
  "Lead conversations in their industries",
];

const outcomes = [
  "A clearly defined positioning strategy",
  "A refined professional or corporate narrative",
  "Stronger communication frameworks guaranteed to convert",
  "Increased confidence and communication clarity",
  "Practical tools you can apply immediately",
];

const earlyBird = [
  "Priority seating",
  "Exclusive resource pack",
  "2-month post-event free access to session recordings",
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
        <Card className="academy-showcase-card">
          <Badge variant="default" className="academy-label">
            The Communication Edge
          </Badge>
          <h1>How Winning Professionals & Brands Position to Outperform Everyone Else</h1>
          <p>
            A two-day, high-impact training for communication professionals and
            startups ready to lead, influence, and win.
          </p>
          <div className="academy-actions">
            <Button asChild variant="hero">
              <a href="#reserve-seat">Reserve Your Seat Now</a>
            </Button>
          </div>
          <div className="academy-sale-ribbon">50 seats</div>
        </Card>
      </section>

      <section className="academy-feature-row">
        <div className="container">
          <div className="row">
            {features.map((feature) => (
              <div className="col-md-4 col-12" key={feature.title}>
                <Card className="academy-feature">
                  <span>
                    <Icons icon={feature.icon} />
                  </span>
                  <div>
                    <h2>{feature.title}</h2>
                    <p>{feature.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-story">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-7 col-12">
              <Badge variant="default" className="academy-kicker">
                The positioning gap
              </Badge>
              <h2>You are good at what you do, but are you positioned to win?</h2>
              <div className="academy-copy-flow">
                {storyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-4 mt-lg-0">
              <Card className="academy-side-panel">
                <Badge variant="default" className="academy-kicker">
                  This experience is for you, if you want to...
                </Badge>
                <ul className="academy-check-list">
                  {experienceBullets.map((item) => (
                    <li key={item}>
                      <Icons icon="star" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Join a curated room of forward-thinking communication
                  professionals, teams, and organizations for a transformational,
                  two-day training.
                </p>
                <Button asChild>
                  <a href="#reserve-seat">Reserve Your Seat Now</a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-cta-band academy-promise">
        <div className="container">
          <Badge variant="default" className="academy-kicker">
            Our Promise
          </Badge>
          <h2>The Communication Edge is not another generic training.</h2>
          <p>
            This is a strategic positioning experience designed to help you
            communicate better, compete differently, and win.
          </p>
          <div className="academy-promise-grid">
            {promiseBullets.map((item) => (
              <Card key={item}>
                <CardContent>
                <Icons icon="star" />
                <p>{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section" id="curriculum">
        <div className="container">
          <div className="academy-section-head">
            <div>
              <Badge variant="default" className="academy-kicker">
                What You'll Learn
              </Badge>
              <h2>Practical, high-level insights for market advantage.</h2>
            </div>
            <Button asChild variant="outline">
              <a href="#reserve-seat">Reserve seat</a>
            </Button>
          </div>

          <div className="academy-learning-grid">
            {learningTopics.map((topic, index) => (
              <Card className="academy-learn-card" key={topic.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-audience">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <img src={academyAsset("curriculum-intro.jpg")} alt="A focused professional learning session" />
            </div>
            <div className="col-lg-7 col-12 mt-4 mt-lg-0">
              <Badge variant="default" className="academy-kicker">
                Who This Is For
              </Badge>
              <h2>If success depends on how well you communicate and position value, you should be in this room.</h2>
              <div className="academy-audience-list">
                {audience.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Button asChild>
                <a href="#reserve-seat">Reserve Your Seat Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-section academy-details" id="details">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 col-12">
              <Badge variant="default" className="academy-kicker">
                Event Details
              </Badge>
              <h2>Lead, influence, and win in a curated Abuja room.</h2>
              <div className="academy-event-list">
                {eventDays.map(([day, date, time, venue]) => (
                  <Card key={day}>
                    <strong>{day}</strong>
                    <div>
                      <span>{date}</span>
                      <span>{time}</span>
                      <span>{venue}</span>
                    </div>
                  </Card>
                ))}
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
                  <h3>Only 50 Seats Available</h3>
                  <p>
                    Seats are intentionally limited to maintain depth,
                    interaction, and personalized learning.
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
              <Badge variant="default" className="academy-kicker">
                Training Curriculum
              </Badge>
              <h2>Learn from operators across narrative, persuasion, digital, AI, media, and customer influence.</h2>
            </div>
          </div>
          <div className="row">
            {facilitators.map(([image, topic, name, role]) => (
              <div className="col-lg-3 col-md-6 col-12" key={`${topic}-${name}`}>
                <Card className="academy-facilitator-card">
                  <img src={academyAsset(image)} alt={topic} />
                  <div>
                    <span>{topic}</span>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-why-now">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <Badge variant="default" className="academy-kicker">
                Why This Matters Now
              </Badge>
              <h2>The world, and the marketplace with it, is evolving fast.</h2>
              <p>
                Attention is getting thinner. Competition is skyrocketing.
                Perception is everything now: how customers think of you. Those
                who understand how to position and communicate strategically will
                lead. Those who do not will keep getting left behind.
              </p>
              <ul className="academy-check-list">
                {whyNowBullets.map((item) => (
                  <li key={item}>
                    <Icons icon="star" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 col-12 mt-4 mt-lg-0">
              <img src={academyAsset("why-now-bg.jpg")} alt="A symbol of market momentum and growth" />
            </div>
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
              <Badge variant="default" className="academy-kicker">
                What You'll Walk Away With
              </Badge>
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
              <Badge variant="default" className="academy-kicker">
                Register Now
              </Badge>
              <h2>The Communication Edge is your competitive advantage.</h2>
              <p>
                Do not let another year go by while your company remains
                under-recognized, underpaid, or overlooked in your market. Once
                slots are filled, registration closes.
              </p>
              <div className="academy-bonus">
                <strong>Early Bird Bonus</strong>
                <span>Ends on 20 April or after the first 20 registrations.</span>
                <ul>
                  {earlyBird.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/register">Register & Reserve Your Seat Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
