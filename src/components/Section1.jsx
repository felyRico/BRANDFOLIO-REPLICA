import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Section1.css';

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const containerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColumnRef.current,
        { y: 0 },
        {
          y: -100,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            scrub: 0.5,
          },
        }
      );

      gsap.fromTo(
        rightColumnRef.current,
        { y: 0 },
        {
          y: 100,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={containerRef}>
      <div className="hero-left">
        <h1 className="hero-title">Brandingfolio X Webflow Template</h1>
        <p className="hero-subtitle">
          Presenting Brandingfolio X, the ultimate Branding Agency Webflow Template.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary-btn">Buy template</button>
          <button className="hero-btn secondary-btn">Explore pages</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="images-container">
          <div className="image-column left-column" ref={leftColumnRef}>
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f37_brandingfolio-x-about-page-branding-agency-webflow-template.png"
              alt="Left Image 1"
            />
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc6_brandingfolio-x-home-v1-page-branding-agency-webflow-template.png"
              alt="Left Image 2"
            />
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3b_brandingfolio-x-blog-posts-page-branding-agency-webflow-template.png"
              alt="Left Image 3"
            />
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f39_brandingfolio-x-portfolio-single-page-branding-agency-webflow-template.png"
              alt="Left Image 4"
            />
          </div>

          <div className="image-column right-column" ref={rightColumnRef}>
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3c_brandingfolio-x-home-v1-page-branding-agency-webflow-template.png"
              alt="Right Image 1"
            />
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3a_brandingfolio-x-packages-page-branding-agency-webflow-template.png"
              alt="Right Image 2"
            />
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f39_brandingfolio-x-portfolio-single-page-branding-agency-webflow-template.png"
              alt="Right Image 3"
            />
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f38_brandingfolio-x-team-member-page-branding-agency-webflow-template.png"
              alt="Right Image 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;