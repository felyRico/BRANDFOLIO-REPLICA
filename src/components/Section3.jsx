import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Section3.css';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const buttonRef = useRef(null);

    const cards = [
        { text: "Home V1", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png" },
        { text: "Home V2", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f59_brandingfolio-x-home-v2-main-page-branding-agency-webflow-template.png" },
        { text: "Home V3", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5b_brandingfolio-x-home-v3-main-page-branding-agency-webflow-template.png" },
        { text: "About", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f53_brandingfolio-x-about-main-page-branding-agency-webflow-template.png" },
        { text: "Blog V1", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f6f_brandingfolio-x-blog-v1-main-page-branding-agency-webflow-template.png" },
        { text: "Blog V2", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f56_brandingfolio-x-blog-v2-main-page-branding-agency-webflow-template.png" },
        { text: "Blog V3", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f54_brandingfolio-x-blog-v3-main-page-branding-agency-webflow-template.png" },
        { text: "Blog post", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f51_brandingfolio-x-blog-posts-main-page-branding-agency-webflow-template.png" },
        { text: "Blog category", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f52_brandingfolio-x-blog-category-main-page-branding-agency-webflow-template.png" },
        { text: "Team member", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f70_brandingfolio-x-team-member-main-page-branding-agency-webflow-template.png" },
        { text: "Portfolio", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f6e_brandingfolio-x-portfolio-main-page-branding-agency-webflow-template.png" },
        { text: "Portfolio single", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5c_brandingfolio-x-portfolio-single-main-page-branding-agency-webflow-template.png" },
        { text: "Packages", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5d_brandingfolio-x-packages-main-page-branding-agency-webflow-template.png" },
        { text: "Packages single", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5e_brandingfolio-x-packages-single-main-page-branding-agency-webflow-template.png" },
        { text: "Contact V1", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f57_brandingfolio-x-contact-v1-main-page-branding-agency-webflow-template.png" },
        { text: "Contact V2", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f55_brandingfolio-x-contact-v2-main-page-branding-agency-webflow-template.png" },
        { text: "Contact V3", image: "https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f58_brandingfolio-x-contact-v3-main-page-branding-agency-webflow-template.png" }
    ];

    useEffect(() => {
        console.log("Section2 useEffect running...");

        const ctx = gsap.context(() => {

            if (headerRef.current) {
                gsap.from(headerRef.current.children, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    }
                });
            }

            if (cardsContainerRef.current) {
                const cards = gsap.utils.toArray('.section3-card', cardsContainerRef.current);

                if (cards && cards.length > 0) {
                    gsap.set(cards, {
                        opacity: 0,
                        y: 40
                    });

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
                } else {
                    console.error("GSAP couldn't find .section3-card elements or the array is empty.");
                }
            } else {
                console.error("cardsContainerRef is not yet available.");
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
        <section ref={sectionRef} className="section3">
            <div ref={headerRef} className="section3-header">
                <h2>Main pages</h2>
                <p>Take a look at the main pages included in the Brandingfolio X Template.</p>
            </div>
            <div ref={cardsContainerRef} className="section3-card-container">
                {cards.map((card, index) => (
                    <div className="section3-card" key={index}>
                        <img src={card.image} alt={card.text} />
                        <div className="section3-card-text">
                            <h3>{card.text}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <button ref={buttonRef} className="big-black-button">Buy templates</button>
        </section>
    );
};

export default Section3;