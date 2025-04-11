import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/Section2.css';

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
    const sectionRef = useRef(null);
    const headerTextRef = useRef(null);
    const smallCardsContainerRef = useRef(null);
    const largeCard1Ref = useRef(null);
    const largeCard2Ref = useRef(null);
    const finalButtonRef = useRef(null);

    useEffect(() => {
        console.log("Section2 useEffect running...");

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

            if (smallCardsContainerRef.current) {
                const cards = gsap.utils.toArray('.card', smallCardsContainerRef.current);

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
                            trigger: smallCardsContainerRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        }
                    });
                } else {
                    console.error("GSAP couldn't find .card elements or the array is empty.");
                }
            } else {
                 console.error("smallCardsContainerRef is not yet available.");
            }

            if (largeCard1Ref.current) {
                 gsap.from(largeCard1Ref.current.querySelector('.large-card-content').children, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: largeCard1Ref.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    }
                });
                 gsap.from(largeCard1Ref.current.querySelector('.large-card-image.figma-bg'), {
                    opacity: 0,
                    y: 40,
                    duration: 1.0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: largeCard1Ref.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    }
                });
            }

             if (largeCard2Ref.current) {
                 gsap.from(largeCard2Ref.current.querySelector('.large-card-image.brix-bg'), {
                    opacity: 0,
                    y: 40,
                    duration: 1.0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: largeCard2Ref.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    }
                });
                 gsap.from(largeCard2Ref.current.querySelector('.large-card-content').children, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: largeCard2Ref.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none',
                    }
                });
            }

            if (finalButtonRef.current) {
                gsap.from(finalButtonRef.current, {
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: finalButtonRef.current,
                        start: 'top 95%',
                        toggleActions: 'play none none none',
                    }
                });
            }

        }, sectionRef);

        return () => {
             console.log("Section2 cleanup running...");
             if (ctx) ctx.revert();
        };

    }, []);

    return (
        <section ref={sectionRef} className="included-section">
            <div ref={headerTextRef} className="section-text">
                 <h2 className="included-title">What is included in Brandingfolio X</h2>
                <p className="included-subtitle">
                    <span style={{ fontWeight: 'bold' }}>Brandingfolio X Webflow</span> Template includes over <span style={{ fontWeight: 'bold' }}>19 pages</span> in total, with more than <span style={{ fontWeight: 'bold' }}> 35 sections. </span>
                </p>
            </div>

            <div ref={smallCardsContainerRef} className="card-container">
                <div className="card">
                     <img
                        src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc4_brandingfolio-x-10-pages-included-branding-agency-webflow-template.png"
                        alt="Image 1"
                    />
                    <div className="card-text">
                        <h3>19+ Pages</h3>
                        <p>
                            A wide variety of pages to jumpstart your branding agency's online presence.
                        </p>
                    </div>
                </div>
                <div className="card">
                     <img
                        src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3d_brandingfolio-x-35-sections-included-branding-agency-webflow-template.png"
                        alt="Image 2"
                    />
                    <div className="card-text">
                        <h3>35+ Sections</h3>
                        <p>
                            Pre-built sections to piece together beautiful landing pages in minutes.
                        </p>
                    </div>
                </div>
                <div className="card">
                     <img
                        src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f50_brandingfolio-x-35-styles-and-symbols-included-branding-agency-webflow-template.png"
                        alt="Image 3"
                    />
                    <div className="card-text">
                        <h3>25+ Styles & Symbols</h3>
                        <p>
                            A comprehensive style guide for consistency across all pages and elements.
                        </p>
                    </div>
                </div>
            </div>

            <div ref={largeCard1Ref} className="large-card-container">
                  <div className="large-card-content">
                    <img
                        src="https://vectorseek.com/wp-content/uploads/2023/07/Figma-Logo-Png-Vector.svg-.png"
                        alt="Figma logo"
                        className="figma-logo"
                    />
                    <h2 className="large-card-title">Figma file included</h2>
                    <p className="large-card-description">
                        Send us an email to <a href="mailto:brandingfoliox@brixtemplates.com">brandingfoliox@brixtemplates.com</a>
                        with your purchase receipt, and we will send you the editable Figma file
                        for the Brandingfolio X template.
                    </p>
                    <button className="large-card-button">Request figma file</button>
                </div>
                <div
                    className="large-card-image figma-bg"
                />
            </div>

            <div ref={largeCard2Ref} className="large-card-container second-large-card">
                 <div
                    className="large-card-image brix-bg"
                />
                <div className="large-card-content">
                    <img
                        src="https://asset.brandfetch.io/idSowef9v6/idMLIbowxT.jpeg?updated=1703823021610"
                        alt="Brix logo"
                        className="brix-logo"
                    />
                    <h2 className="large-card-title">Looking for more amazing Webflow Templates?</h2>
                    <p className="large-card-description">
                        Take a look at our collection of 100+ premium Webflow Templates at BRIX Templates.
                    </p>
                    <button className="large-card-button">Browse templates</button>
                </div>
            </div>

            <button ref={finalButtonRef} className="big-black-button">Buy template</button>
        </section>
    );
};

export default Section2;