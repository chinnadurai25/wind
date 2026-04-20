import { ArrowRight, CheckCircle2, Globe, Shield, MessageSquare, Briefcase, Users, Star, Quote, ChevronRight, Trophy, Target, Zap, Server, Code, PlaySquare, Smartphone, MonitorSmartphone, BarChart, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const windServices = [
        "Installation & Commissioning",
        "Routine Maintenance",
        "Blade Repair & Refurbishment",
        "Rope Access Support",
        "HSE Safety Compliance",
        "Wind Turbine Inspection",
        "Emergency Maintenance",
        "Technical Support"
    ];

    const industrialSolutions = [
        "Tower Maintenance",
        "Gearbox Inspection",
        "Hydraulic Systems",
        "Electrical Repair"
    ];

    const whyTrustUs = [
        { title: 'Data-Driven Strategy', icon: <Target size={32} color="var(--primary)" /> },
        { title: 'Transparent Reporting', icon: <BarChart size={32} color="var(--secondary)" />, iconAlternative: <Zap size={32} color="var(--secondary)" /> },
        { title: '24/7 Support', icon: <Shield size={32} color="var(--accent)" /> },
        { title: 'Skilled & Certified Team', icon: <Users size={32} color="var(--primary)" /> },
        { title: 'Global Experience', icon: <Globe size={32} color="var(--secondary)" /> }
    ];

    const testimonials = [
        {
            quote: "Sanju Wind Energy Services helped our facility achieve maximum efficiency. Their maintenance team is professional and highly skilled.",
            author: "Priya Sharma",
            role: "Energy Manager"
        },
        {
            quote: "Their blade repair work saved us a significant amount of downtime. Truly experts in the field of wind energy solutions.",
            author: "Ramesh Kumar",
            role: "Technical Head, RK Industries"
        },
        {
            quote: "Professional rope access and safe installation protocols. They are our go-to partner for all wind turbine services.",
            author: "Anjali Mehta",
            role: "Facility Director"
        }
    ];

    const faqs = [
        { q: "What exactly does Sanju Wind Energy Services do?", a: "We provide complete installation, maintenance, and repair solutions for wind turbines and industrial assets." },
        { q: "Do you offer emergency repair services?", a: "Yes, our technical team is available for emergency maintenance to minimize your downtime." },
        { q: "Is your team certified for high-altitude work?", a: "Absolutely. Our rope access team is IRATA certified and follows strict HSE safety standards." },
        { q: "How can we get a service quote?", a: "You can contact our sales team through the contact page or WhatsApp for a free site consultation." }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
                            Sanju Wind Energy <br />
                            <span className="gradient-text" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'block', marginTop: '0.5rem' }}>SERVICES</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.6rem', fontWeight: 700, opacity: 0.9, lineHeight: 1.4, maxWidth: '600px' }}>
                            Pioneering Sustainable Energy Through <br /> Specialized Technical Services
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            We provide world-class installation, maintenance, and repair services for the wind energy sector, ensuring maximum efficiency and reliability.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#services" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>
                                Explore Our Service <ArrowRight size={20} />
                            </a>
                            <Link to="/contact" className="btn btn-outline" style={{ border: '1px solid var(--border)', padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}>Get a Free Consultation</Link>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '40px' }}>
                            <img
                                src="windmill.jpg"
                                alt="Services Hub"
                                className="floating-img"
                                style={{ borderRadius: '30px', width: '100%' }}
                            />
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section id="about" style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div className="max-w-1000 text-center" data-aos="fade-up" style={{ margin: '0 auto' }}>
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Who We Are</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Bridging Creativity <span className="gradient-text">with Technology</span></h2>
                    <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '4rem' }}>
                        Sanju Wind Energy is a growth focused company offering end-to-end Digital Marketing and IT Solutions. Our mission is to bridge creativity with technology — helping businesses boost visibility, sales, and performance in the digital world.
                    </p>
                </div>

                <div className="stats-grid-v2 text-center" style={{ justifyContent: 'center', width: '100%', margin: '0 auto', background: 'var(--bg-white)', padding: '3.5rem', borderRadius: '30px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }} data-aos="fade-up">
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Users size={32} color="var(--primary)" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Experienced Technicians</span>
                    </div>
                    <div className="stat-item-v2" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', paddingLeft: '3rem', paddingRight: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(255, 0, 122, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Trophy size={32} color="var(--secondary)" />
                        </div>
                        <span className="stat-num" style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}>50+</span>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Wind Farms Served</span>
                    </div>
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(157, 0, 255, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Shield size={32} color="var(--accent)" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Safety & Quality Assured</span>
                    </div>
                </div>
            </section>

            {/* Core Solutions Grid */}
            <section id="services">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Our Expertise</span>
                    <h2 style={{ fontSize: '3.5rem' }}>Solutions Targeted <span className="gradient-text">for Growth</span></h2>
                </div>

                <div className="grid" style={{ margin: '0 auto', gap: '3rem', width: '100%' }}>

                    {/* Marketing Column */}
                    <div className="card" data-aos="fade-right" style={{ padding: '3.5rem', borderTop: '4px solid var(--primary)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.05, transform: 'rotate(15deg)' }}>
                            <Target size={200} />
                        </div>
                        <div className="solution-header">
                            <div className="solution-img-box">
                                <img src="windmill1.jpg" alt="Wind Energy Services" />
                            </div>
                            <h3 className="solution-title">Wind Energy <br />Services</h3>
                        </div>

                        <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                            {windServices.map((service, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 0', borderBottom: idx !== windServices.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <CheckCircle2 size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontWeight: 500 }}>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* IT Column */}
                    <div className="card" data-aos="fade-left" style={{ padding: '3.5rem', borderTop: '4px solid var(--secondary)', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-5%', opacity: 0.03, transform: 'rotate(-15deg)' }}>
                            <Code size={200} />
                        </div>
                        <div className="solution-header">
                            <div className="solution-img-box">
                                <img src="windmill2.jpg" alt="Industrial Solutions" />
                            </div>
                            <h3 className="solution-title">Industrial <br />Solutions</h3>
                        </div>

                        <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            {industrialSolutions.map((service, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 0', borderBottom: idx !== industrialSolutions.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <CheckCircle2 size={22} color="var(--secondary)" style={{ flexShrink: 0 }} />
                                    <span style={{ fontWeight: 500 }}>{service}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/service" className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>

                </div>
            </section>

            {/* Why Businesses Trust Us */}
            <section style={{ background: 'rgba(157, 0, 255, 0.02)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Core Value</span>
                    <h2 style={{ fontSize: '3rem' }}>Why Businesses <span className="gradient-text">Trust Us</span></h2>
                </div>
                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {whyTrustUs.map((item, i) => (
                        <div key={i} className="card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', transition: 'all 0.3s ease', cursor: 'grab' }}
                            data-aos="fade-up" data-aos-delay={i * 100}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                {item.iconAlternative || item.icon}
                            </div>
                            <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-dark)' }}>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </section>


            {/* Testimonials */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Client Feedback</span>
                    <h2 style={{ fontSize: '3rem' }}>What Our <span className="gradient-text">Clients Say</span></h2>
                </div>

                <div className="grid max-w-1200" style={{ margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((test, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" data-aos-delay={idx * 100} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div style={{ display: 'flex', gap: '5px', marginBottom: '1.5rem' }}>
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="var(--accent)" color="var(--accent)" />)}
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-dark)', marginBottom: '2rem', fontStyle: 'italic' }}>
                                    "{test.quote}"
                                </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                                <img src={`https://ui-avatars.com/api/?name=${test.author.replace(' ', '+')}&background=random&color=fff`} alt={test.author} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                <div>
                                    <h5 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>{test.author}</h5>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{test.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq">
                <div className="grid-2 max-w-1200" style={{ margin: '0 auto', gap: '4rem', alignItems: 'flex-start' }}>
                    <div data-aos="fade-right" style={{ position: 'sticky', top: '120px' }}>
                        <span className="section-tag">Your Questions Answered</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Let’s Build Your <br /><span className="gradient-text">Digital Future</span> Together
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
                            Whether you need a powerful digital marketing strategy or a custom IT solution, we’re ready to help your business grow.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>
                            Start Your Journey <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div data-aos="fade-left">
                        <div className="faq-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <div style={{ background: 'rgba(0, 242, 255, 0.1)', color: 'var(--primary)', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.9rem' }}>Q</div>
                                        {faq.q}
                                    </h3>
                                    <p style={{ color: 'var(--text-muted)', margin: 0, paddingLeft: '42px', lineHeight: 1.7 }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA / Contact */}
            <section id="launch">
                <div className="cta-content" data-aos="zoom-in" style={{
                    textAlign: 'center',
                    background: '#fff',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--gradient-primary)' }}></div>
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Grand Opening Celebration</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Enjoy Flat <span className="gradient-text">25% OFF</span>
                    </h2>
                    <p style={{ fontSize: '1.3rem', margin: '1rem auto 3rem', maxWidth: '600px', color: 'var(--text-muted)' }}>
                        On all services! This is a limited time launch offer. Ready to build your digital future together? Let's talk.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/916352109398" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Enquire Now <ArrowRight size={20} />
                        </a>
                        <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
