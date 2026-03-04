import { Link } from 'react-router-dom';
import './Projekte.css';
import { projects } from '../data/projects';

export const Projekte = () => {
    return (
        <div className="projekte-container container">
            <section className="projekte-header">
                <div>
                    <h2>Projekte</h2>
                    <p>
                        Eine Auswahl realisierter und entwickelter Arbeiten aus Wettbewerben,
                        Studien und Direktaufträgen.
                    </p>
                </div>
            </section>

            <div className="projekte-grid">
                {projects.map((project) => (
                    <div key={project.id} className="projekte-list-item">
                        <Link to={`/projekte/${project.id}`} className="project-card">
                            <div className="project-image-wrapper">
                                {project.images.length > 0 ? (
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="project-image"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="project-image-placeholder" />
                                )}
                            </div>
                            <div className="project-info">
                                <div>
                                    <h3 className="project-title">{project.title}, {project.location}</h3>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <span className="project-number">{project.id}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
