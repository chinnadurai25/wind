import { ArrowRight, CheckCircle2, Shield, Search, Layout, RefreshCcw, Gauge, Server, Phone, Lock, TrendingUp, Handshake, Code, Workflow, MonitorSmartphone } from 'lucide-react';
import { useEffect } from 'react';

const WebDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyChooseUs = [
        {
            title: "Business-Driven Development",
            desc: "Every decision is made with conversions, clarity, and ROI in mind.",
            points: ["SEO-first structure", "Conversion-focused layouts", "Clear messaging"],
            icon: <TrendingUp size={40} color="var(--primary)" />,
            delay: "0.1s"
        },
        {
            title: "Built to Scale & Perform",
            desc: "Clean code, fast loading, and future-ready architecture.",
            points: ["High performance & security", "Modern UI/UX", "Long-term scalability"],
            icon: <Server size={40} color="var(--secondary)" />,
            delay: "0.2s"
        }
    ];

    const coreServices = [
        {
            title: "Custom Website Development",
            description: "High-performance, tailor-made websites built around your brand, goals, and users.",
            icon: <Code size={40} color="var(--primary)" />
        },
        {
            title: "WordPress Development",
            description: "Scalable WordPress solutions with custom themes, speed optimization, and clean architecture.",
            icon: <Layout size={40} color="var(--secondary)" />
        },
        {
            title: "Landing Page Development",
            description: "Conversion-focused landing pages designed to turn traffic into qualified leads.",
            icon: <MonitorSmartphone size={40} color="var(--accent)" />
        },
        {
            title: "Corporate & Business Websites",
            description: "Professional, trust-driven websites that communicate authority and credibility.",
            icon: <Shield size={40} color="var(--primary)" />
        },
        {
            title: "Website Redesign & Optimization",
            description: "Modern UI/UX, improved SEO structure, faster load times, and better user flow.",
            icon: <RefreshCcw size={40} color="var(--secondary)" />
        },
        {
            title: "Performance & SEO Optimization",
            description: "Technical SEO, speed enhancements, and structure optimization for long-term growth.",
            icon: <Gauge size={40} color="var(--accent)" />
        }
    ];

    const devProcess = [
        { title: "Discovery", desc: "Deep understanding of your business goals, audience, and challenges.", icon: <Search color="var(--primary)" /> },
        { title: "Strategy", desc: "SEO planning, structure mapping, and technical architecture.", icon: <Workflow color="var(--secondary)" /> },
        { title: "Design", desc: "Modern UI/UX crafted for clarity, trust, and conversion.", icon: <Layout color="var(--accent)" /> },
        { title: "Development", desc: "Clean, scalable code built with performance and security in mind.", icon: <Code color="var(--primary)" /> },
        { title: "Launch & Growth", desc: "Testing, deployment, and continuous improvement post-launch.", icon: <TrendingUp color="var(--secondary)" /> }
    ];

    const ctaFeatures = [
        { text: "Fast Response", icon: <Phone size={20} color="var(--primary)" /> },
        { text: "Secure & Confidential", icon: <Lock size={20} color="var(--secondary)" /> },
        { text: "Growth-Focused Strategy", icon: <TrendingUp size={20} color="var(--accent)" /> },
        { text: "Long-Term Partnership", icon: <Handshake size={20} color="var(--primary)" /> }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', paddingBottom: '40px' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Code size={18} /> Premium Web Architecture
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Professional <br />
                            <span className="gradient-text">Web Development</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
                            Services That Drive Real Business Growth.
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            We build fast, secure, SEO-ready websites that convert visitors into customers and scale with your business.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Get a Free Consultation <ArrowRight size={20} />
                            </a>
                            <a href="#pricing" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>View Pricing</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px' }}>
                            <img src="web_development_hero_cyber_1772536127131.png" alt="Futuristic Web Development Services" className="floating-img" style={{ borderRadius: '30px', width: '100%', maxWidth: '650px' }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="whyus" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Competitive Edge</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Why Businesses <span className="gradient-text">Choose Us</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Your website should do more than look good — it should actively support growth.
                    </p>
                </div>

                <div className="grid">
                    {whyChooseUs.map((item, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: item.delay, padding: '3.5rem 3rem' }}>
                            <div className="mb-4" style={{
                                background: 'rgba(0, 242, 255, 0.05)',
                                padding: '1.2rem',
                                borderRadius: '25px',
                                display: 'inline-block'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>{item.desc}</p>

                            <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>
                                {item.points.map((pt, pIdx) => (
                                    <li key={pIdx} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '0.8rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" /> {pt}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Services Section */}
            <section id="services">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Our Core Services</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Engineered for <span className="gradient-text">Growth & Speed</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Future ready web solutions designed for performance, stability, and conversion optimization.
                    </p>
                </div>

                <div className="grid">
                    {coreServices.map((service, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '3rem 2.5rem', transition: 'all 0.4s ease' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0, 242, 255, 0.1)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '1rem', borderRadius: '15px' }}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Development Process */}
            <section id="process" style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Transparent Workflow</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Our Development <span className="gradient-text">Process</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        A futuristic workflow designed for clarity, speed, and measurable results.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {devProcess.map((step, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{
                            background: 'var(--bg-white)',
                            padding: '3rem 2rem',
                            borderTop: `4px solid ${idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', top: '-15px', right: '-15px', fontSize: '8rem', fontWeight: 900, color: 'var(--border)', opacity: 0.3, zIndex: 0 }}>
                                {idx + 1}
                            </div>
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <div style={{ width: '60px', height: '60px', background: 'rgba(0, 242, 255, 0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="contact">
                <div className="cta-card" data-aos="zoom-in">
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--gradient-primary)' }}></div>

                    <div className="cta-grid">
                        <div>
                            <span className="section-tag" style={{ justifyContent: 'flex-start' }}>Let’s Discuss Your Project</span>
                            <h2 className="responsive-h2">
                                Ready to Build a Website That <span className="gradient-text">Works for Your Business?</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                Have an idea, a challenge, or an existing website that needs improvement? We’ll help you turn it into a high-performing digital asset.
                            </p>

                            <div className="cta-features-list">
                                {ctaFeatures.map((feat, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.05rem', fontWeight: 600 }}>
                                        {feat.icon} {feat.text}
                                    </div>
                                ))}
                            </div>

                            <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                                Book a Free Strategy Call <ArrowRight size={20} />
                            </a>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '2.5rem', borderRadius: '50%', position: 'relative' }}>
                                <div style={{ background: 'rgba(255, 0, 122, 0.05)', padding: '2.5rem', borderRadius: '50%' }}>
                                    <Shield size={100} color="var(--primary)" />
                                </div>
                                <div className="glow-aura" style={{ borderRadius: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WebDev;
