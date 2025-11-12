import React, { useEffect, useRef } from 'react';
import './SplashPage.css'; // We'll create this CSS file separately

const SplashPage = () => {
    const starsRef = useRef(null);
    const alertModalRef = useRef(null);
    const alertMessageRef = useRef(null);

    useEffect(() => {
        createStars();
    }, []);

    const createStars = () => {
        const starsContainer = starsRef.current;
        if (!starsContainer) return;
        
        const starCount = 50;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            starsContainer.appendChild(star);
        }
    };

    const showAlert = (message) => {
        if (alertMessageRef.current && alertModalRef.current) {
            alertMessageRef.current.textContent = message;
            alertModalRef.current.style.display = 'flex';
        }
    };

    const handleAlertClose = () => {
        if (alertModalRef.current) {
            alertModalRef.current.style.display = 'none';
        }
    };

    const handleYesClick = (e) => {
        e.preventDefault();
        showAlert("Access Granted! Navigating to /products/ ...");
    };

    const handleNoClick = (e) => {
        e.preventDefault();
        showAlert("Access Denied. Redirecting to Google Earth...");
        
        setTimeout(() => {
            window.location.href = "https://earth.google.com/";
        }, 1500);
    };

    return (
        <div className="splash-wrapper">
            <header className="site-header">
                <div className="logo">
                    <span>COPILOT</span>
                </div>
            </header>

            <div className="splash-container">
                <div className="stars" ref={starsRef}></div>
                
                <img 
                    src="https://hellocopilot.com/wp-content/themes/copilot/img/home-page/webp/home-planet-bg.png.webp" 
                    className="scene-layer planet"
                    alt="Red planet background"
                />

                <img 
                    src="https://hellocopilot.com/wp-content/themes/copilot/img/takeoff/webp/planet-yellow-sativa.png.webp" 
                    className="scene-layer planet-surface"
                    alt="Crated planet surface"
                />

                <img 
                    src="https://hellocopilot.com/wp-content/themes/copilot/img/home-page/webp/home-rocks.png.webp" 
                    className="scene-layer floating-rocks"
                    alt="Floating rocks in space"
                />

                <div className="marquee" aria-hidden="true">
                    <div className="marquee-inner">
                        {/* <span>TO INFINITY & BEYOND&nbsp;</span>
                        <span>TO INFINITY & BEYOND&nbsp;</span>
                        <span>TO INFINITY & BEYOND&nbsp;</span>
                        <span>TO INFINITY & BEYOND&nbsp;</span> */}
                        <span>MEDHA 2k25&nbsp;</span>
                        <span>MEDHA 2k25&nbsp;</span>
                        <span>MEDHA 2k25&nbsp;</span>
                        <span>MEDHA 2k25&nbsp;</span>
                    </div>
                </div>

                <img 
                    src="https://hellocopilot.com/wp-content/themes/copilot/img/home-page/webp/home-astronaut.png.webp" 
                    className="scene-layer astronaut"
                    alt="Astronaut in a pink spacesuit"
                />

                <img 
                    src="https://hellocopilot.com/wp-content/themes/copilot/img/home-page/webp/home-spaceship-page.png.webp" 
                    className="scene-layer spaceship-floor"
                    alt="Interior of a spaceship cockpit"
                />

                {/* <div className="age-gate">
                    <h3>ARE YOU OVER 21?</h3>
                    <div className="buttons">
                        <button className="btn btn-yes" onClick={handleYesClick}>
                            <span>Yes</span>
                        </button>
                        <button className="btn btn-no" onClick={handleNoClick}>
                            <span>No</span>
                        </button>
                    </div>
                </div> */}
            </div>

            <div id="alertModal" className="alert-modal" ref={alertModalRef}>
                <div className="alert-content">
                    <p id="alertMessage" ref={alertMessageRef}></p>
                    <button id="alertClose" onClick={handleAlertClose}>OK</button>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;