import { Link } from 'react-router-dom';
import './Werkliste.css';

const werklisteData = [
    { year: '2026', id: '019', title: 'Ersatzneubau MFH, Hunkele', category: 'DIREKTAUFTRAG', link: null },
    { year: '2026', id: '018', title: 'Wohnüberbauung Stampfeli, Kriens', category: 'WETTBEWERBSBEITRAG', link: null },
    { year: '2025', id: '017', title: 'Arealentwicklung Rigiblick, Arth', category: 'MACHBARKEITSSTUDIE', link: null },
    { year: '2025', id: '016', title: 'Wohnüberbauung Rüeckringen, Rothenburg', category: 'WETTBEWERBSBEITRAG (4. PREIS)', link: null },
    { year: '2025', id: '015', title: 'Fassadensanierung, Küssnacht am Rigi', category: 'DIREKTAUFTRAG', link: null },
    { year: '2024', id: '014', title: 'Wendelinhof, Risch', category: 'PLANERWAHLVERFAHREN (1.Rang)', link: null },
    { year: '2024', id: '013', title: 'Arealentwicklung Wytheid, Erstfeld', category: 'WETTBEWEBSBEITRAG (6. PREIS)', link: '/projekte/013' },
    { year: '2024', id: '012', title: 'Ersatzneubau ZFH, ST.Gallen', category: 'MACHBARKEITSSTUDIE', link: null },
    { year: '2024', id: '011', title: 'Erweiterung Primarschule Guthirt, Zug', category: 'WETTBEWEBSBEITRAG', link: '/projekte/011' },
    { year: '2024', id: '010', title: 'Aufstockung EFH, Immensee', category: 'DIREKTAUFTRAG', link: null },
    { year: '2024', id: '009', title: 'Erweiterung und Umbau ZFH, Greppen', category: 'DIREKTAUFTRAG', link: null },
    { year: '2024', id: '008', title: 'Gartenlaube mit Balkon, Greppen', category: 'DIREKTAUFTRAG', link: null },
    { year: '2024', id: '007', title: 'Eingangsbereich Mehrfamilienhaus, Zug', category: 'DIREKTAUFTRAG', link: null },
    { year: '2023', id: '006', title: 'Dreifachsporthalle, Stans', category: 'WETTBEWERBSBEITRAG', link: '/projekte/006' },
    { year: '2022', id: '005', title: 'Ersatzneubau/Scheunenausbau, Breitfeld', category: 'WETTBEWERB (1. PREIS)', link: '/projekte/005' },
    { year: '2022', id: '004', title: 'Sanierung Wohnung, Merlischachen', category: 'DIREKTAUFTRAG', link: null },
    { year: '2021', id: '003', title: 'Mehrzweckanlage, Effretikon', category: 'WETTBEWEBSBEITRAG (6. PREIS)', link: '/projekte/003' },
    { year: '2021', id: '002', title: 'Sanierung und Ausbau Wohnung, Weggis', category: 'DIREKTAUFTRAG', link: null },
    { year: '2019', id: '001', title: 'Mehrfamilienhaus Fildernegg, Ebikon', category: 'DIREKTAUFTRAG', link: '/projekte/001' }
];

export const Werkliste = () => {

    return (
        <div className="werkliste-container container">
            <section className="werkliste-header">
                <div>
                    <h2>Werkliste</h2>
                    <p>
                        Eine chronologische Übersicht all unserer Projekte, Wettbewerbsbeiträge,
                        Machbarkeitsstudien und Direktaufträge seit der Gründung.
                    </p>
                </div>
            </section>

            <div className="project-list">
                {werklisteData.map((project) => (
                    <div key={project.id} className="list-item">
                        <div className="list-item-year">{project.year}</div>
                        <div className="list-item-content">
                            {project.link ? (
                                <Link to={project.link} className="list-item-link">
                                    <h3 className="list-item-title">
                                        <span className="list-item-number">{project.id}</span>
                                        {project.title}
                                    </h3>
                                </Link>
                            ) : (
                                <h3 className="list-item-title">
                                    <span className="list-item-number">{project.id}</span>
                                    {project.title}
                                </h3>
                            )}
                            <div className="list-item-category">{project.category}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
