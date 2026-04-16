import { ArrowRight, CheckCircle2, Shield, Settings, TrendingUp, Clock, FileText, Smartphone, Users, Briefcase, Database, Lock } from 'lucide-react';
import { useEffect } from 'react';

const FlyBill = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const challenges = [
        {
            title: "Billing Errors",
            description: "Manual calculations cause mistakes and customer dissatisfaction.",
            icon: <FileText size={40} color="var(--secondary)" />,
            delay: "0.1s"
        },
        {
            title: "GST Complexity",
            description: "Tax compliance becomes stressful without automation.",
            icon: <TrendingUp size={40} color="var(--primary)" />,
            delay: "0.2s"
        },
        {
            title: "Delayed Payments",
            description: "Poor payment tracking affects cash flow.",
            icon: <Clock size={40} color="var(--accent)" />,
            delay: "0.3s"
        },
        {
            title: "No Insights",
            description: "Lack of reports blocks smart business decisions.",
            icon: <Database size={40} color="var(--secondary)" />,
            delay: "0.4s"
        }
    ];

    const features = [
        {
            title: "Smart GST Invoicing",
            description: "Automatic CGST, SGST & IGST calculations with branded invoices.",
            icon: <Settings size={40} color="var(--primary)" />
        },
        {
            title: "Inventory Management",
            description: "Live stock tracking and low-stock alerts.",
            icon: <Briefcase size={40} color="var(--secondary)" />
        },
        {
            title: "Customer & Credit",
            description: "Track customer history, dues and credit limits.",
            icon: <Users size={40} color="var(--accent)" />
        },
        {
            title: "Payment Tracking",
            description: "Monitor cash, UPI, card and bank payments.",
            icon: <Smartphone size={40} color="var(--primary)" />
        },
        {
            title: "Reports & Analytics",
            description: "Sales, tax and profit reports with export options.",
            icon: <TrendingUp size={40} color="var(--secondary)" />
        },
        {
            title: "Secure Cloud",
            description: "Anytime access with backups and role-based control.",
            icon: <Lock size={40} color="var(--accent)" />
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Fly Bill Ecosystem</span>
                        <h1 className="hero-title">
                            Professional Billing <br />
                            <span className="gradient-text">Software</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.8rem', fontWeight: 700, opacity: 0.9 }}>
                            For Modern Businesses
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            Fly Bill helps businesses automate invoicing, stay GST compliant, track payments, and gain real-time control over sales and finances.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Request a Demo <ArrowRight size={20} />
                            </a>
                            <a href="#pricing" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>View Pricing</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60"
                                alt="Fly Bill Dashboard Innovation"
                                className="floating-img"
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - Challenges */}
            <section id="challenges" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">The Problem</span>
                    <h2 className="responsive-h2">Business Challenges <span className="gradient-text">We Solve</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Growing businesses struggle with manual billing, compliance risks, and lack of financial visibility.
                    </p>
                </div>

                <div className="grid">
                    {challenges.map((challenge, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: challenge.delay }}>
                            <div className="mb-4">{challenge.icon}</div>
                            <h3 style={{ fontSize: '1.5rem' }}>{challenge.title}</h3>
                            <p>{challenge.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Content Section - Core Features */}
            <section id="features">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Capabilities</span>
                    <h2 className="responsive-h2">Core <span className="gradient-text">Features</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Everything you need to run billing operations professionally.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {features.map((feature, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '3rem 2rem' }}>
                            <div className="feature-item">
                                <div className="feature-icon-box">
                                    {feature.icon}
                                </div>
                                <h3 className="responsive-h3" style={{ marginBottom: '0' }}>{feature.title}</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ideal For Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
                    <span className="section-tag">Who Uses Fly Bill</span>
                    <h2 className="responsive-h2">Built For <span className="gradient-text">Every Industry</span></h2>
                </div>

                <div className="stats-grid-v2 text-center" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }} data-aos="fade-up">
                    <div className="btn btn-outline" style={{ padding: '1rem 2rem', fontWeight: 800, fontSize: '1.1rem' }}>
                        Retail & Wholesale
                    </div>
                    <div className="btn btn-outline" style={{ padding: '1rem 2rem', fontWeight: 800, fontSize: '1.1rem' }}>
                        Medical & Pharmacy
                    </div>
                    <div className="btn btn-outline" style={{ padding: '1rem 2rem', fontWeight: 800, fontSize: '1.1rem' }}>
                        Restaurants & Cafes
                    </div>
                    <div className="btn btn-outline" style={{ padding: '1rem 2rem', fontWeight: 800, fontSize: '1.1rem' }}>
                        Service Providers
                    </div>
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="contact">
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: '#fff',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <span className="section-tag">Take the Next Step</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Simplify Billing. <br /> <span className="gradient-text">Strengthen Compliance.</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', margin: '2rem 0 3rem' }}>
                        Join businesses that trust Fly Bill for fast, accurate, and secure billing.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Book a Free Demo <ArrowRight size={20} />
                        </a>
                        <a href="mailto:info@flytowards-digital.com" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>Request Pricing</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FlyBill;
