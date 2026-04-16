import { ArrowRight, CheckCircle2, Target, BarChart, Users, Calendar, UserPlus, Database, Rocket } from 'lucide-react';
import { useEffect } from 'react';

const SmartCRM = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Lead Management",
            description: "Capture, track, and convert leads efficiently.",
            icon: <Target size={40} color="var(--primary)" />,
            delay: "0.1s"
        },
        {
            title: "Sales Pipeline",
            description: "Visual pipelines to monitor deals at every stage.",
            icon: <BarChart size={40} color="var(--secondary)" />,
            delay: "0.2s"
        },
        {
            title: "Customer Profiles",
            description: "Complete customer history in one place.",
            icon: <Users size={40} color="var(--accent)" />,
            delay: "0.3s"
        },
        {
            title: "Task & Follow-ups",
            description: "Never miss a follow-up with smart reminders.",
            icon: <Calendar size={40} color="var(--primary)" />,
            delay: "0.4s"
        }
    ];

    const workflowSteps = [
        {
            title: "Sign Up",
            description: "Create your account in minutes.",
            icon: <UserPlus color="var(--primary)" />
        },
        {
            title: "Import Contacts",
            description: "Bring leads and customers from any source.",
            icon: <Database color="var(--secondary)" />
        },
        {
            title: "Start Selling",
            description: "Track deals, automate tasks, and grow revenue.",
            icon: <Rocket color="var(--accent)" />
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Rocket size={18} /> Manage Customers & Sales
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>
                            Scale Growth with <br />
                            <span className="gradient-text">SmartCRM</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6 }}>
                            SmartCRM helps businesses track leads, automate sales, manage customer relationships, and close deals faster all in one powerful platform.
                        </h2>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '3rem' }}>
                            <a href="#contact" className="btn btn-primary">
                                Start Free Trial <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>Request Demo</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
                                alt="Smart CRM Analytics Dashboard"
                                className="floating-img"
                            />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section id="features" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Powerful Tools</span>
                    <h2 className="responsive-h2">Core CRM <span className="gradient-text">Features</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Everything your sales and support teams need to work smarter and faster.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {features.map((feature, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: feature.delay, padding: '3rem 2.5rem' }}>
                            <div className="feature-item">
                                <div className="feature-icon-box">
                                    {feature.icon}
                                </div>
                                <h3 className="responsive-h3" style={{ marginBottom: '0' }}>{feature.title}</h3>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Workflow Section */}
            <section id="workflow">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Simple Process</span>
                    <h2 className="responsive-h2">How SmartCRM <span className="gradient-text">Works</span></h2>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {workflowSteps.map((step, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{
                            background: 'var(--bg-white)',
                            textAlign: 'center',
                            padding: '3rem 2rem',
                            borderTop: `4px solid ${idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : 'var(--accent)'}`,
                            transition: 'all 0.4s ease',
                            cursor: 'pointer'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-15px)';
                                e.currentTarget.style.boxShadow = `0 20px 40px rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.15)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow)';
                            }}>
                            <div style={{
                                width: '80px', height: '80px',
                                background: `linear-gradient(135deg, rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.1) 0%, transparent 100%)`,
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                border: `1px solid rgba(${idx === 0 ? '0, 242, 255' : idx === 1 ? '255, 0, 122' : '157, 0, 255'}, 0.3)`
                            }}>
                                {step.icon}
                            </div>
                             <h3 className="responsive-h3" style={{ marginBottom: '1rem' }}>
                                 <span style={{ color: idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : 'var(--accent)', fontWeight: 900, marginRight: '8px' }}>
                                     {idx + 1}.
                                 </span>
                                 {step.title}
                             </h3>
                            <p style={{ color: 'var(--text-muted)' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
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
                    <span className="section-tag">Grow Faster</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Build Stronger  <span className="gradient-text">Customer Relationships</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', margin: '2rem 0 3rem' }}>
                        Join thousands of growing businesses using SmartCRM to manage customers and scale faster.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Get Started Today <ArrowRight size={20} />
                        </a>
                        <a href="mailto:info@flytowards-digital.com" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>Talk to Sales</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SmartCRM;
