import { Briefcase, Users, Zap, ArrowRight, Code, Megaphone, PenTool } from 'lucide-react';
import { useEffect } from 'react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openPositions = [
        {
            title: "Senior React Developer",
            department: "Engineering",
            location: "Remote / Tenkasi, Tamil Nadu",
            type: "Full-Time",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Digital Marketing Strategist",
            department: "Marketing",
            location: "Hybrid / Tenkasi, Tamil Nadu",
            type: "Full-Time",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
        },
        {
            title: "Web Developer",
            department: "Engineering",
            location: "Remote",
            type: "Full-Time",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>
            
            <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '140px' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex', gap: '8px' }}>
                        <Users size={18} /> Join Our Tribe
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Build the Future of <br />
                        <span className="gradient-text">Digital Innovation</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '3rem', marginInline: 'auto', maxWidth: '700px' }}>
                        We are fundamentally changing how businesses scale in the digital realm. Join a team of passionate creators, engineers, and marketers dedicated to excellence.
                    </p>
                    <div data-aos="zoom-in" style={{ width: '100%', height: '400px', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', border: '4px solid white' }}>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Fly Towards Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            <section id="openings" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Open Positions</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Find your perfect role and make an impact.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {openPositions.map((job, idx) => (
                            <div key={idx} className="card job-card" data-aos="fade-up" style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}>
                                <div className="job-info-header">
                                    <div className="job-img-box">
                                        <img src={job.image} alt={job.title} />
                                    </div>
                                    <div>
                                        <h3 className="job-title">{job.title}</h3>
                                        <div className="job-meta">
                                            <span>{job.department}</span> • <span>{job.location}</span> • <span>{job.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Apply Now <ArrowRight size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cta-content" data-aos="zoom-in" style={{
                        marginTop: '5rem',
                        padding: '5rem 3rem',
                        textAlign: 'center',
                        background: '#0a0a0a',
                        border: '1px solid rgba(0, 242, 255, 0.2)',
                        borderRadius: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0, 242, 255, 0.15)'
                    }}>
                        <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200%', height: '200%' }}></div>
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(0, 242, 255, 0.2)' }}>
                                <Zap size={50} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
                                Don't see a <span style={{ color: 'var(--primary)' }}>perfect fit?</span>
                            </h3>
                            <p style={{ color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '650px', marginInline: 'auto' }}>
                                We're constantly evolving and always ready to make room for exceptional talent. If you have unique skills that can drive our digital innovation forward, we want to hear from you.
                            </p>
                            <a href="mailto:info@flytowardsdigitalinnovation.com" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', background: 'var(--primary)', color: '#000', border: 'none', fontWeight: 700 }}>
                                Send Your Resume <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
