import michaelImage from '../assets/team/michaelbachmann.webp';
import yvoImage from '../assets/team/yvobucher.webp';
import './Team.css';

const teamMembers = [
    {
        name: 'Michael Bachmann',
        role: 'MSC ETHZ ARCHITEKT',
        email: 'm.bachmann@vier33.ch',
        image: michaelImage,
        imageObjectPosition: '50% 0%',
        timeline: [
            { year: '2023', text: 'Gründung vier33 architekten ag' },
            { year: '2017-2025', text: 'Architekturbüro Sik Partner AG, Zürich' },
            { year: '2017', text: 'SIA-Masterpreis in Architektur' },
            { year: '2015', text: 'Praktikum bei Hüsler Architektur, Cham' },
            { year: '2014', text: 'Praktikum bei Horisberger Wagen, Zürich' },
            { year: '2010-2017', text: 'Architekturstudium ETH, Zürich' },
            { year: '1990', text: 'Aufgewachsen in Gisikon und Zug' }
        ]
    },
    {
        name: 'Yvo Bucher',
        role: 'MSC ETHZ ARCHITEKT',
        email: 'y.bucher@vier33.ch',
        image: yvoImage,
        timeline: [
            { year: '2023', text: 'Gründung vier33 architekten ag' },
            { year: '2021-2025', text: 'BSS Architekten AG, Schwyz' },
            { year: '2017-2021', text: 'Annen Architektur AG, Küssnacht am Rigi' },
            { year: '2014', text: 'Praktikum bei Lussi + Partner AG, Luzern' },
            { year: '2010-2016', text: 'Architekturstudium ETH, Zürich' },
            { year: '1990', text: 'Aufgewachsen in Greppen' }
        ]
    }
];

export const Team = () => {
    return (
        <div className="team-container container">
            <section className="team-header">
                <div>
                    <h2>Unser Team</h2>
                    <p>
                        vier33 Architekten AG ist ein junges Architekturbüro mit Sitz in Luzern.
                        Gegründet 2023 von Michael Bachmann und Yvo Bucher, widmen wir uns der
                        Suche nach architektonischen Antworten auf vielschichtige kontextuelle Fragen.
                    </p>
                </div>
            </section>

            <section className="team-members">
                {teamMembers.map((member) => (
                    <div key={member.name} className="member-card">
                        <div className="member-image-wrapper">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="member-image"
                                loading="lazy"
                                style={
                                    member.imageObjectPosition
                                        ? { objectPosition: member.imageObjectPosition }
                                        : undefined
                                }
                            />
                        </div>
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <span className="member-role">{member.role}</span>
                            <a href={`mailto:${member.email}`} className="member-email">{member.email}</a>

                            <ul className="member-timeline">
                                {member.timeline.map((item, i) => (
                                    <li key={i}>
                                        <span className="timeline-year">{item.year}</span>
                                        <span className="timeline-text">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
