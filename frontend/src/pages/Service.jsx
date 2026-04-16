import { Monitor, Smartphone, MessageCircle, BarChart, Globe, Palette } from 'lucide-react';

const Service = () => {
    return (
        <main>
            <div className="mesh-bg"></div>

            <section className="hero">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Elite Solutions</span>
                    <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1 }}>
                        Our Digital <span className="gradient-text">Excellence</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0' }}>
                        We provide holistic digital transformation services that help businesses evolve, scale, and dominate their niche through innovation.
                    </p>
                </div>

                <div className="grid">
                    <div className="card" data-aos="fade-up">
                        <Monitor size={40} color="#00f2ff" style={{ marginBottom: '1.5rem' }} />
                        <h3 className="responsive-h3">Web Development</h3>
                        <p>High-end, performance-focused web architectures designed for conversion and scale.</p>
                        <a href="/web-development" className="btn btn-outline" style={{ marginTop: '2rem', fontSize: '0.8rem' }}>Learn More</a>
                    </div>

                    <div className="card" data-aos="fade-up" style={{ transitionDelay: '0.1s' }}>
                        <MessageCircle size={40} color="#00f2ff" style={{ marginBottom: '1.5rem' }} />
                        <h3 className="responsive-h3">WhatsApp Marketing</h3>
                        <p>Automated customer engagement and marketing campaigns at enterprise scale.</p>
                        <a href="/whatsapp-api" className="btn btn-outline" style={{ marginTop: '2rem', fontSize: '0.8rem' }}>Learn More</a>
                    </div>

                    <div className="card" data-aos="fade-up" style={{ transitionDelay: '0.2s' }}>
                        <BarChart size={40} color="#00f2ff" style={{ marginBottom: '1.5rem' }} />
                        <h3 className="responsive-h3">Digital Marketing</h3>
                        <p>ROI-driven campaigns across Google, Meta, and LinkedIn to flood your funnel with leads.</p>
                        <a href="/digital-marketing" className="btn btn-outline" style={{ marginTop: '2rem', fontSize: '0.8rem' }}>Learn More</a>
                    </div>

                    <div className="card" data-aos="fade-up">
                        <Smartphone size={40} color="#00f2ff" style={{ marginBottom: '1.5rem' }} />
                        <h3 className="responsive-h3">App Development</h3>
                        <p>Sleek, native and cross-platform mobile experiences that users love to engage with.</p>
                    </div>

                    <div className="card" data-aos="fade-up" style={{ transitionDelay: '0.1s' }}>
                        <Palette size={40} color="#00f2ff" style={{ marginBottom: '1.5rem' }} />
                        <h3 className="responsive-h3">Brand Identity</h3>
                        <p>Complete visual storytelling and design systems that make your brand unmistakable.</p>
                    </div>

                    <div className="card" data-aos="fade-up" style={{ transitionDelay: '0.2s' }}>
                        <Globe size={40} color="#00f2ff" style={{ marginBottom: '1.5rem' }} />
                        <h3 className="responsive-h3">Cloud Solutions</h3>
                        <p>Scalable cloud infrastructure and hosting services to keep your platform online 24/7.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Service;
