import React from 'react';
import { Link } from 'react-router-dom';
import './AppInstallPage.css';
import mockup from './assets/mockup.png';

const AppInstallPage = () => {
    return (
        <>
            <div className="app-install-page">
                <div className="app-container">
                    <header className="app-header">
                        <h1>תאוריה בדרך 🚗📚</h1>
                    </header>

                    <section className="app-content">
                        <div className="text-container">
                            <p><strong>מה חדש?</strong></p>
                            <ul>
                                <li>🔹 לכבוד ההשקה – <strong>ללא פרסומות!</strong> 🎉</li>
                            </ul>

                            <p><strong>למה לבחור בנו?</strong></p>
                            <ul>
                                <li>✅ <strong>נוח ופשוט</strong> – תפריט אינטואיטיבי ומעקב התקדמות אישי.</li>
                                <li>✅ <strong>ללא הרשמה</strong> – כל הפיצ'רים זמינים בלי התחברויות מיותרות!</li>
                                <li>✅ <strong>פחות הפרעות, יותר למידה</strong> – חוויית למידה ממוקדת ונעימה.</li>
                            </ul>

                            <p><strong>איך הכי נכון ללמוד?</strong></p>
                            <ul>
                                <li>📌 <strong>לומדים תמרורים</strong> – הבסיס לנהיגה בטוחה.</li>
                                <li>📌 <strong>מתרגלים שאלות</strong> – ממוקד ויעיל לפי נושאים.</li>
                                <li>📌 <strong>מתרגלים מבחנים</strong> – חוויית מבחן אמיתית.</li>
                            </ul>

                            <p>📊 <strong>מעקב התקדמות אישי</strong> תמיד מולכם כדי לדעת כמה למדתם וכמה נשאר.</p>

                            <a
                                href="https://apps.apple.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="download-btn"
                            >
                                הורד בAppStore
                            </a>

                            {/* Support Contact Info */}
                            <p className="support-text">
                                לשאלות ותמיכה ניתן לפנות למייל:
                                <a href="mailto:contact.theoryapp@gmail.com"> contact.theoryapp@gmail.com</a>
                            </p>
                        </div>
                        <div className="image-container">
                            <img src={mockup} alt="App Screenshot Mockup"/>
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
        </>
    );
};

export default AppInstallPage;
