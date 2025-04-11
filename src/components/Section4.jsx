import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Section4.css';

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    text: "404 not found",
    image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f72_brandingfolio-x-404-not-found-utility-page-branding-agency-webflow-template.png"
  },
  {
    text: "Password protected",
    image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f71_brandingfolio-x-password-protected-utility-page-branding-agency-webflow-template.png"
  }
];

const Section4 = () => {
  const sectionRef = useRef(null);
  const headerTextRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      if (headerTextRef.current) {
        gsap.from(headerTextRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: headerTextRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });
      }

      if (cardsContainerRef.current) {
        const cards = gsap.utils.toArray('.section4-card', cardsContainerRef.current);
        if (cards && cards.length > 0) {
          gsap.set(cards, { opacity: 0, y: 40 });
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          });
        }
      }
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section4">
      <div ref={headerTextRef} className="section4-header">
        <h2>Utility pages</h2>
        <p>Take a look at the utility pages included in the Brandingfolio X Template.</p>
      </div>
      <div ref={cardsContainerRef} className="section4-card-container">
        {cardsData.map((card, index) => (
          <div key={index} className="section4-card">
            <img src={card.image} alt={card.text} />
            <div className="section4-card-text">
              <h3>{card.text}</h3>
            </div>
          </div>
        ))}
      </div>
      <button ref={buttonRef} className="big-black-button">Buy template</button>
    </section>
  );
};

export default Section4;
