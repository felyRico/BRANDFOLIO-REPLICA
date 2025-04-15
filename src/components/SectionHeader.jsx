import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './styles/SectionHeader.css';

const SectionHeader = () => {
  const logoContainerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });
    }, headerRef);

    const logoContainer = logoContainerRef.current;

    const handleMouseEnter = () => {
      gsap.to(logoContainer, {
        scale: 0.9,
        ease: 'bounce.out',
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logoContainer, {
        scale: 1,
        ease: 'bounce.out',
        duration: 0.5,
      });
    };

    logoContainer.addEventListener('mouseenter', handleMouseEnter);
    logoContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      logoContainer.removeEventListener('mouseenter', handleMouseEnter);
      logoContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}> {/* Added ref to the header */}
      <nav className="navbar">
        <div className="left-section">
          <div className="logo-container" ref={logoContainerRef}>
            <a href="#" className="logo-link">
              <img
                src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed7_logo-web-brandingfolio-x-webflow-template.svg"
                alt="Brandingfolio X Logo"
                className="logo"
              />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li className="dropdown">
              <a href="#pages">Pages</a>
              <ul className="dropdown-content">
                <li><a href="#page1">YOU LOST</a></li>
                <li><a href="#page2">THE GAME</a></li>
                <li><a href="#page3">| ||</a></li>
                <li><a href="#page4">||  |_</a></li>
              </ul>
            </li>
            <li className="cart-item">
              <a href="#cart">Cart(0)</a>
            </li>
          </ul>
        </div>

        <div className="contact-container">
          <button className="contact-button">Contact us</button>
        </div>
      </nav>
    </header>
  );
};

export default SectionHeader;
