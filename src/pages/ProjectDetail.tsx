import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projectData } from '../data/projects';
import './ProjectDetail.css';

export const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Revert body overflow when component unmounts (safety fallback)
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    if (!id || !projectData[id]) {
        return <Navigate to="/werkliste" replace />;
    }

    const project = projectData[id];

    // Sort images to ensure consistent display
    const galleryImages = [...project.images].sort();

    // First image is the main image, rest are for the grid
    const mainImage = galleryImages.length > 0 ? galleryImages[0] : null;
    const remainingImages = galleryImages.length > 1 ? galleryImages.slice(1) : [];

    const hasDetailedMeta = project.year || project.realisierung || project.auftragsart || project.bauherrschaft || project.gebaeudevolumen || project.gebaeudekosten || project.energiestand || project.adresse;

    const openGallery = (index: number) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };
    const closeGallery = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = '';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null && selectedImageIndex < galleryImages.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };

    useEffect(() => {
        if (selectedImageIndex === null) {
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedImageIndex(null);
                document.body.style.overflow = '';
                return;
            }

            if (e.key === 'ArrowRight') {
                setSelectedImageIndex((currentIndex) => {
                    if (currentIndex === null) return null;
                    return Math.min(currentIndex + 1, galleryImages.length - 1);
                });
            }

            if (e.key === 'ArrowLeft') {
                setSelectedImageIndex((currentIndex) => {
                    if (currentIndex === null) return null;
                    return Math.max(currentIndex - 1, 0);
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImageIndex, galleryImages.length]);

    return (
        <div className="project-detail-container">
            <div className="project-detail-header">
                <div className="project-meta">
                    <span className="project-id">{project.id}</span>
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                </div>
                <h1 className="project-detail-title">{project.title}</h1>
                <h2 className="project-detail-location">{project.location}</h2>
            </div>

            {mainImage && (
                <div className="project-main-image-wrapper">
                    <img
                        src={mainImage}
                        className="project-main-image"
                        alt={`${project.title} - Main`}
                        onClick={() => openGallery(0)}
                    />
                </div>
            )}

            <div className="project-info-section">
                {hasDetailedMeta && (
                    <div className="project-detailed-meta">
                        {project.year && (
                            <div className="meta-row">
                                <span className="meta-label">Projektstart</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.year}</span>
                            </div>
                        )}
                        {project.realisierung && (
                            <div className="meta-row">
                                <span className="meta-label">Realisierung</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.realisierung}</span>
                            </div>
                        )}
                        {project.auftragsart && (
                            <div className="meta-row">
                                <span className="meta-label">Auftragsart</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.auftragsart}</span>
                            </div>
                        )}
                        {project.bauherrschaft && (
                            <div className="meta-row">
                                <span className="meta-label">Bauherrschaft</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.bauherrschaft}</span>
                            </div>
                        )}
                        {project.gebaeudevolumen && (
                            <div className="meta-row">
                                <span className="meta-label">Gebäudevolumen</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.gebaeudevolumen}</span>
                            </div>
                        )}
                        {project.gebaeudekosten && (
                            <div className="meta-row">
                                <span className="meta-label">Gebäudekosten</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.gebaeudekosten}</span>
                            </div>
                        )}
                        {project.energiestand && (
                            <div className="meta-row">
                                <span className="meta-label">Energiestand</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.energiestand}</span>
                            </div>
                        )}
                        {project.adresse && (
                            <div className="meta-row">
                                <span className="meta-label">Adresse</span>
                                <span className="meta-separator">|</span>
                                <span className="meta-value">{project.adresse}</span>
                            </div>
                        )}
                    </div>
                )}

                {project.description && (
                    <p className="project-description">
                        {project.description}
                    </p>
                )}
            </div>

            {remainingImages.length > 0 && (
                <div className="project-image-grid">
                    {remainingImages.map((imgUrl, index) => (
                        <div
                            key={index}
                            className="grid-image-wrapper"
                            onClick={() => openGallery(index + 1)}
                        >
                            <img src={imgUrl} alt={`${project.title} - view ${index + 2}`} className="grid-image" />
                        </div>
                    ))}
                </div>
            )}

            {selectedImageIndex !== null && (
                <div className="gallery-overlay" onClick={closeGallery}>
                    <button className="gallery-close" onClick={closeGallery}>×</button>

                    {selectedImageIndex > 0 && (
                        <button className="gallery-nav prev" onClick={prevImage}>‹</button>
                    )}

                    <div className="gallery-image-container" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryImages[selectedImageIndex]}
                            className="gallery-image-full"
                            alt={`${project.title} - view ${selectedImageIndex + 1}`}
                        />
                    </div>

                    {selectedImageIndex < galleryImages.length - 1 && (
                        <button className="gallery-nav next" onClick={nextImage}>›</button>
                    )}
                </div>
            )}
        </div>
    );
};
