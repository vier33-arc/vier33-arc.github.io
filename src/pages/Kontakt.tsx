import { Instagram } from 'lucide-react';
import './Kontakt.css';

export const Kontakt = () => {

    return (
        <div className="kontakt-container container">
            <div className="kontakt-content">
                <h2 className="kontakt-title">Kontakt</h2>

                <div className="kontakt-grid">
                    <div>
                        <div className="kontakt-block">
                            <span className="kontakt-label">Adresse</span>
                            <address className="kontakt-text" style={{ fontStyle: 'normal' }}>
                                vier33 Architekten AG<br />
                                Hirschengraben 52<br />
                                6003 Luzern<br />
                                Schweiz
                            </address>
                        </div>

                        <a
                            href="https://www.instagram.com/vier33architekten/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="kontakt-social"
                        >
                            <Instagram className="social-icon" /> Instagram
                        </a>
                    </div>

                    <div>
                        <div className="kontakt-block">
                            <span className="kontakt-label">Allgemein</span>
                            <a href="mailto:info@vier33.ch" className="kontakt-link">info@vier33.ch</a>
                        </div>

                        <div className="kontakt-block">
                            <span className="kontakt-label">Michael Bachmann</span>
                            <a href="tel:+41796400834" className="kontakt-link">+41 79 640 08 34</a><br />
                            <a href="mailto:m.bachmann@vier33.ch" className="kontakt-link">m.bachmann@vier33.ch</a>
                        </div>

                        <div className="kontakt-block">
                            <span className="kontakt-label">Yvo Bucher</span>
                            <a href="tel:+41795697860" className="kontakt-link">+41 79 569 78 60</a><br />
                            <a href="mailto:y.bucher@vier33.ch" className="kontakt-link">y.bucher@vier33.ch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
