import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Portfolio — Red Seal Plumbing & More",
  description:
    "Case studies from Six Foot Design Co — logo design and website for Red Seal Plumbing and other South African small businesses.",
  alternates: {
    canonical: "https://www.sixfootdesignco.co.za/pages/portfolio/page-3",
  },
  openGraph: {
    title: "Portfolio Page 3 | Six Foot Design Co",
    description:
      "Branding and web design case studies featuring Red Seal Plumbing and more.",
    url: "https://www.sixfootdesignco.co.za/pages/portfolio/page-3",
    images: [
      {
        url: "https://www.sixfootdesignco.co.za/six-foot-logo-light.png",
        width: 1200,
        height: 630,
        alt: "Six Foot Design Co Portfolio",
      },
    ],
  },
};
import SocialSection from "@/components/layout/SocialSection";
import Footer from "@/components/layout/Footer";
import PortfolioContentSection from "@/components/sections/portfolio/PortfolioProjectSection";
import PortfolioPagination from "@/components/layout/PortfolioPagination";

const PortfolioPage3 = () => {
  const projects = [
    {
      id: "red-seal",
      title: "RED SEAL BRAND AND WEB",
      heroImage: "/projects/Redseal Hero.png",
      accentColor: "var(--color-secondary)",
      aboutCompany:
        "Established in 2022 by Earl Robertson, Red Seal Plumbing was founded with a clear mission: to provide comprehensive plumbing solutions at fair and transparent rates—without ever compromising on the quality of workmanship. With years of hands-on experience and a deep understanding of the industry, we are committed to delivering reliable, top-tier plumbing services for both residential and commercial clients. We understand that plumbing emergencies can be stressful and overwhelming. That’s why Red Seal Plumbing is dedicated to making emergency plumbing services as seamless and stress-free as possible. Our team not only responds quickly but also takes the time to guide clients through the process, ensuring clear communication and peace of mind at every stage.",
      brief:
        "The company needed a logo that struck the perfect balance—professional and clean, with just the right amount of playfulness to stand out in a sea of generic plumbing logos. The goal was a brand that felt trustworthy, confident, and memorable without relying on overused industry clichés.",
      approach:
        "We set out to create a brand identity that feels dependable, considered, and built to last. Moving away from obvious industry visuals, we explored a retro-inspired aesthetic that feels both familiar and distinctive, helping the brand stand out with confidence. Supporting patterns were introduced to add depth and consistency across applications, reinforcing the system as a whole. The result is a cohesive, professional identity that confidently delivers on its promise: Quality Plumbing. Signed, Sealed, Delivered.",
      quoteText:
        "Six Foot Design can't thank them enough from concept to design brilliant, really happy with the logo and branding work done.",
      quoteAuthor: "EARL",
      thankYouText: "Earl for the ongoing partnership and Josh for the Dev.",
      websiteUrl: "https://redsealplumbing.co.za",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "volenti",
      title: "VOLENTI FITNESS WEBSITE",
      heroImage: "/projects/Volenti.webp",
      accentColor: "var(--color-accent)",
      aboutCompany:
        "Volenti Wellness and Fitness offers three distinct service areas, each built around a specific goal and a single guiding principle: sustainable progress matters more than short-term results. These programmes include: General Fitness Programs — designed to build a strong, balanced foundation, improving strength, endurance, mobility, and overall wellbeing. Sports Conditioning — built to help you perform at your optimal level, developing strength, speed, agility, and endurance specific to your sport. Occupational Conditioning — designed to enhance performance in the workplace, building the strength, stamina, and resilience your role demands.",
      brief:
        "We were approached by Volenti to take their brand online with a website that emphasised the core of their business: delivering quality fitness to those who are willing to put in the work.",
      approach:
        "We took a very brand-centric approach, staying closely aligned with their established brand feel while bringing a sense of energy and movement throughout the site. Dynamic imagery was used to clearly communicate the core of the business and the energy behind what they offer. The site itself was built in Next.js for added security. The website also clearly presents their service packages, making it easy for both South African and UK clients to understand what’s available and find the right fit for their needs.",
      thankYouText: "Leo for trusting us with your brand.",
      websiteUrl: "https://volenti.vercel.app",
      buttonText: "VIEW THE PROJECT",
    },
    {
      id: "garicon",
      title: "GARICON LANDING PAGE",
      heroImage: "/projects/Garicon Hero.png",
      accentColor: "var(--color-secondary-alt)",
      aboutCompany:
        "Garicon services has been serving as a leading Air Conditioning Contractor since 2005. As a fully-certified professional, we are ready to tackle anything from the most complex and large scale construction project to the smallest of repair jobs. We are fuelled by our commitment to excellence and go the extra mile to make sure my clients are completely satisfied with my work.",
      brief:
        "Every brand has an online starting point, this was Garicon’s. The brief was to keep it simple and within the small budget they had available.",
      approach:
        "We stuck closely to brand, understanding that those clients looking for air conditioning suppliers are looking for qualified individuals that can work with multiple brands. This formed the foundation to our strategy of including relevant and helpful information only, along with references to increase credibly.",
      thankYouText: "Earl for the ongoing partnership.",
      websiteUrl: "https://gariconairconditioning.co.za",
      buttonText: "VIEW THE PROJECT",
    },
  ];

  return (
    <main className="portfolio-page">
      <Header />
      <PortfolioContentSection
        heroTitle="RED SEAL BRAND AND WEB"
        projects={projects}
      />
      <PortfolioPagination currentPage={3} totalPages={4} />
      <SocialSection />
      <Footer />
    </main>
  );
};

export default PortfolioPage3;
