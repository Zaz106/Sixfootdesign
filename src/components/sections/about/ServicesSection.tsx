import React from "react";
import "./ServicesSection.css";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>WHAT WE DO AND HOW WE DO IT</h2>
        <p className="services-intro">
          Whether you engage us for a once-off
          project or ongoing support through a retainer, our goal is to build a
          solid, considered design system for your brand from start to finish.
          We look at the bigger picture, ensuring every creative decision has
          purpose and works together consistently. The result is a brand that is
          not only designed to look good, but built to work, communicate and
          grow with your business.
        </p>

        <div className="services-grid">
          <div className="service-card branding">
            <h3 style={{ color: "var(--color-primary)" }}>BRANDING</h3>
            <p className="service-description">
              We help businesses discover what makes them different and turn that into a distinctive, consistent brand.
            </p>
            <ul>
              <li>Brand Strategy &amp; Creative Direction</li>
              <li>Logo &amp; Visual Identity</li>
              <li>Brand Patterns, Icons &amp; Supporting Graphics</li>
              <li>Colour &amp; Typography Systems</li>
              <li>Brand Guidelines</li>
              <li>Stationery &amp; Brand Collateral</li>
              <li>Complete Brand Asset Packages</li>
            </ul>
          </div>

          <div className="service-card advertising">
            <h3>ADVERTISING</h3>
            <p className="service-description">
              From a single piece of communication to a complete campaign, we create advertising that gives your brand something meaningful to say.
            </p>
            <ul>
              <li>Campaign Concepts &amp; Creative Direction</li>
              <li>Advertising &amp; Promotional Campaigns</li>
              <li>Posters &amp; Billboards</li>
              <li>Magazine &amp; Press Advertising</li>
              <li>Brochures &amp; Product Catalogues</li>
              <li>Corporate Profiles</li>
              <li>Packaging &amp; Promotional Materials</li>
              <li>Calendars &amp; Marketing Collateral</li>
            </ul>
          </div>

          <div className="service-card illustration">
            <h3>COMMERCIAL ART</h3>
            <p className="service-description">
              We use illustration and visual storytelling to make products, ideas and information easier to understand — and harder to forget.
            </p>
            <ul>
              <li>Technical &amp; Isometric Illustration</li>
              <li>Product &amp; Commercial Illustration</li>
              <li>Artistic &amp; Conceptual Illustration</li>
              <li>Product Visualisation</li>
              <li>Exploded &amp; Cutaway Illustrations</li>
              <li>Installation &amp; Instructional Graphics</li>
              <li>Infographics &amp; Visual Explanations</li>
              <li>Custom Illustrations for Print &amp; Digital</li>
            </ul>
          </div>

          <div className="service-card digital">
            <h3>WEB &amp; DIGITAL</h3>
            <p className="service-description">
              We create purposeful digital experiences that bring your brand, content and communication together.
            </p>
            <ul>
              <li>Marketing Websites</li>
              <li>UX/UI &amp; Wireframes</li>
              <li>Website Creative Direction</li>
              <li>Digital Campaign Assets</li>
              <li>Social Media Campaign Design</li>
              <li>Digital Advertising</li>
              <li>Email &amp; HTML Mailers</li>
              <li>Digital Catalogues &amp; Presentations</li>
            </ul>
          </div>
        </div>

        <Link href="/pages/projects" className="btn services-btn">
          VIEW OUR PROJECTS
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
