import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppInstallPage from './AppInstallPage';
import TermsOfUsePage from './TermsOfUsePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppInstallPage />} />
                <Route path="/privacy-policy" element={<TermsOfUsePage />} />
            </Routes>
        </Router>
    );
}

export default App;
