import React from 'react';
import './ProjectsSection.css';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  return (
    <section className="projects">
      <Link href="/pages/portfolio/page-1#angi-cleans" className="project-item item-angi">
        <Image 
          src="/Angie Cleans - Feauture bg.png" 
          alt="Angi Cleans" 
          width={1600} 
          height={900} 
          className="project-image"
        />
        <div className="project-info">
          <h3 className="project-title">ANGI CLEANS</h3>
          <span className="project-cat">Website Development</span>
        </div>
      </Link>
      <Link href="/pages/portfolio/page-3#volenti" className="project-item item-funfloats">
        <Image 
          src="/projects/Volenti.webp" 
          alt="Volenti Fitness" 
          width={1600} 
          height={900} 
          className="project-image"
        />
        <div className="project-info">
          <h3 className="project-title">VOLENTI FITNESS</h3>
          <span className="project-cat">Website Development</span>
        </div>
      </Link>
    </section>
  );
};

export default ProjectsSection;
