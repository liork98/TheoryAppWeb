import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './AppInstallPage.css'; // Import the CSS file
import mockup from './assets/mockup.png';

const AppInstallPage = () => {
    return (
        <div className="app-install-page">
            <div className="app-container">
                <header className="app-header">
                    <h1>אפליקציית תיאוריה בדרך</h1>
                </header>

                <section className="app-content">
                    <div className="image-container">
                        <img src={mockup} alt="App Screenshot Mockup" />
                    </div>
                    <div className="text-container">
                        <p>
                            תוכלו ללמוד את חוקי התנועה בצורה אינטראקטיבית ומותאמת אישית. עם מבחנים,
                            הסברים ודוגמאות, היא תסייע לכם להתכונן בצורה המיטבית למבחן התיאוריה.
                        </p>

                        <a
                            href="https://apps.apple.com"  /* החלף את הקישור ללינק האמיתי שלך באפסטור */
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-btn"
                        >
                            הורד בAppStore
                        </a>
                    </div>
                </section>

                <footer className="app-footer">
                    <p>© {new Date().getFullYear()} כל הזכויות שמורות לתיאוריה בדרך.</p>
                    <Link to="/privacy-policy" className="privacy-btn">
                        Privacy Policy
                    </Link>
                </footer>
            </div>
        </div>
    );
};

export default AppInstallPage;
