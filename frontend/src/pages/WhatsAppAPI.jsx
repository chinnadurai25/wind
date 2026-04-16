import { ArrowRight, MessageCircle, Users, Zap, Bot, LayoutTemplate, Briefcase, BellRing, Key, Link, Code, Rocket, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

const WhatsAppAPI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            title: "Bulk Messaging",
            description: "Send personalized messages to thousands of users instantly.",
            icon: <MessageCircle size={40} color="var(--primary)" />,
            delay: "0.1s"
        },
        {
            title: "Automated Workflows",
            description: "Create chatbots and automated replies using simple APIs.",
            icon: <Bot size={40} color="var(--secondary)" />,
            delay: "0.2s"
        },
        {
            title: "Template Management",
            description: "Create, submit, and manage WhatsApp message templates.",
            icon: <LayoutTemplate size={40} color="var(--accent)" />,
            delay: "0.3s"
        },
        {
            title: "Multi-Agent Inbox",
            description: "Collaborate with your team and reply faster.",
            icon: <Users size={40} color="var(--primary)" />,
            delay: "0.4s"
        }
    ];

    const useCases = [
        {
            title: "Marketing Campaigns",
            description: "Promotions, offers, product launches.",
            icon: <Zap size={30} color="var(--primary)" />
        },
        {
            title: "Customer Support",
            description: "Instant responses with real-time notifications.",
            icon: <Briefcase size={30} color="var(--secondary)" />
        },
        {
            title: "Order & Payment Alerts",
            description: "Transactional updates and reminders.",
            icon: <BellRing size={30} color="var(--accent)" />
        },
        {
            title: "OTP & Verification",
            description: "Secure authentication via WhatsApp.",
            icon: <Key size={30} color="var(--primary)" />
        }
    ];

    const workflowSteps = [
        {
            title: "Connect",
            description: "Get WhatsApp Business API access through our platform.",
            icon: <Link color="var(--primary)" />
        },
        {
            title: "Integrate",
            description: "Use REST APIs or webhooks to integrate with your system.",
            icon: <Code color="var(--secondary)" />
        },
        {
            title: "Launch",
            description: "Send messages, automate flows, and track results.",
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
                            <MessageCircle size={18} /> API Solutions
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Powerful WhatsApp Marketing API <br />
                            <span className="gradient-text">For Growing Businesses</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6, maxWidth: '600px' }}>
                            Automate conversations, send bulk messages, manage campaigns, and engage customers on WhatsApp using our secure and scalable API.
                        </h2>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
                            <a href="#contact" className="btn btn-primary">
                                Get API Access <ArrowRight size={20} />
                            </a>
                            <a href="#docs" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>View Documentation</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px' }}>
                            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" alt="WhatsApp Marketing Automation" className="floating-img" style={{ borderRadius: '30px', width: '100%', maxWidth: '650px' }} />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Everything You Need Section */}
            <section id="features" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Marketing Tools</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Everything You Need for <span className="gradient-text">WhatsApp Marketing</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Our WhatsApp Business API helps you connect with customers at scale while staying compliant and reliable.
                    </p>
                </div>

                <div className="grid">
                    {features.map((feature, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: feature.delay, padding: '3.5rem 3rem' }}>
                            <div className="mb-4" style={{
                                background: 'rgba(0, 242, 255, 0.05)',
                                padding: '1.2rem',
                                borderRadius: '25px',
                                display: 'inline-block'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Built for Multiple Use Cases */}
            <section id="use-cases">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    <div data-aos="fade-right">
                        <span className="section-tag">Versatility</span>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Built for <br /><span className="gradient-text">Multiple Use Cases</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                            Scale your business communication with dynamic, highly convertible messaging structures driven through the world's most popular messaging app.
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {useCases.map((useCase, idx) => (
                                <div key={idx} style={{
                                    display: 'flex', alignItems: 'center', gap: '1.5rem',
                                    background: 'var(--bg-white)', padding: '1.5rem',
                                    borderRadius: '20px', border: '1px solid var(--border)',
                                    boxShadow: 'var(--shadow)'
                                }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '1rem', borderRadius: '15px' }}>
                                        {useCase.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.2rem' }}>{useCase.title}</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>{useCase.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left">
                        <div className="glass-container" style={{ padding: '2rem' }}>
                            <div style={{ background: 'var(--text-dark)', borderRadius: '25px', padding: '3rem 2rem', color: 'white', textAlign: 'center' }}>
                                <MessageCircle size={80} color="var(--primary)" style={{ marginBottom: '2rem' }} />
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>98% Open Rate</h3>
                                <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    Reach your customers effortlessly. WhatsApp messages boast an unprecedented read rate compared to traditional SMS and emails. Give your campaigns the visibility they deserve.
                                </p>
                            </div>
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="process" style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Integration Flow</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>How It <span className="gradient-text">Works</span></h2>
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
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
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
                    <span className="section-tag">Grow Faster</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Start WhatsApp Marketing <span className="gradient-text">Today</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', margin: '2rem 0 3rem' }}>
                        Reach your customers where they are most active.
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

export default WhatsAppAPI;
