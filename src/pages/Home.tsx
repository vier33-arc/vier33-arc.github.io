import './Home.css';

export const Home = () => {

    return (
        <div className="home-container container">
            {/* Hero Section */}
            <section className="hero container">
                <div>
                    <h1 className="hero-title">
                        Junge Architektur aus Luzern.
                    </h1>
                    <p className="hero-description">
                        Wir gestalten und realisieren innovative Bauprojekte in der ganzen Schweiz mit Leidenschaft und Präzision.
                    </p>
                </div>
            </section>
        </div>
    );
};
