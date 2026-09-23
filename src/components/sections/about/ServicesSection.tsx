import React from "react";
import "./ServicesSection.css";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>WHAT WE DO AND HOW WE DO IT</h2>
        <p className="services-intro">
          Our pricing is built around more than simply delivering a design at
          the lowest possible price. Whether you engage us for a once-off
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
            <ul>
              <li>Logo + Identity</li>
              <li>Brand Patterns and Icons</li>
              <li>Individual Stationery and collateral</li>
              <li>Creative / Brand Strategy and Research</li>
              <li>Colour or Identity System Guidelines</li>
              <li>
                All Logo and Branding files (vectorized and high resolution)
              </li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 6600.00</span>
            </div>
          </div>

          <div className="service-card illustration">
            <h3>ILLUSTRATION</h3>
            <ul>
              <li>Artistic for Posters and Wallpapers</li>
              <li>Custom illustrations</li>
              <li>Isometric Technical and Artistic</li>
              <li>Retro Patterns and Icons</li>
              <li>Product Installation Guides</li>
              <li>Point Illustrations for PowerPoint</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 4800.00 / PER DAY</span>
            </div>
          </div>

          <div className="service-card advertising">
            <h3>ADVERTISING/PRINT</h3>
            <ul>
              <li>Bochures and Product Catalogues</li>
              <li>Corporate Profiles</li>
              <li>Calendars</li>
              <li>Flyers</li>
              <li>Posters</li>
              <li>Packaging</li>
              <li>Magazine Advertising</li>
              <li>Branding Items and More</li>
              <li>Photography for Product Brochures</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 3300.00</span>
            </div>
          </div>

          <div className="service-card digital">
            <h3>DIGITAL / WEB</h3>
            <ul>
              <li>Marketing Websites</li>
              <li>Social Media Post Design</li>
              <li>Animated or Static Digital Adverts</li>
              <li>Banner Adverts</li>
              <li>HTML Mailers</li>
              <li>PowerPoint Templates</li>
              <li>Digital Catalogues for Websites</li>
              <li>Wire-frames, UX/UI & creative strategy</li>
            </ul>
            <div className="service-price">
              <span className="price-from">FROM</span>
              <span className="price-amount">R 3300.00</span>
            </div>
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
