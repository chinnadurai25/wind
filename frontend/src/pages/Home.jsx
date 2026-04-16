import { ArrowRight, CheckCircle2, Globe, Shield, MessageSquare, Briefcase, Users, Star, Quote, ChevronRight, Trophy, Target, Zap, Server, Code, PlaySquare, Smartphone, MonitorSmartphone, BarChart, TrendingUp } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const digitalMarketingServices = [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Google Ads / Meta ads",
        "LinkedIn Marketing",
        "Digital Marketing Strategy",
        "Branding & Design",
        "WhatsApp Marketing",
        "Video Edits and Production"
    ];

    const itSolutionsServices = [
        "Web Development",
        "App Development",
        "Software & CRM Solutions",
        "Cloud & Hosting"
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
            quote: "Sanju Wind Energy Services helped our business go from local visibility to national reach. Their SEO and ad strategy brought us a 250% increase in website leads within 3 months.",
            author: "Priya Sharma",
            role: "Marketing Manager"
        },
        {
            quote: "Our new website designed by Sanju Wind Energy Services is fast, modern, and user friendly. Their team perfectly captured our brand and improved our online conversions.",
            author: "Ramesh Kumar",
            role: "Founder, RK Industries"
        },
        {
            quote: "The branding and social media team gave our company a fresh digital identity. From logo to Instagram campaigns, everything looked consistent and professional.",
            author: "Anjali Mehta",
            role: "Brand Owner"
        },
        {
            quote: "We started Google and Meta ads with Sanju Wind Energy Services, and within weeks our inquiries doubled. The reporting and support team are very transparent and helpful.",
            author: "Neha Raj",
            role: "Business Consultant"
        },
        {
            quote: "Their app development service was top notch delivered on time with smooth performance. The app is now helping us manage customers more efficiently.",
            author: "Arun Varma",
            role: "Product Head"
        },
        {
            quote: "From website creation to SEO and ongoing support, Sanju Wind Energy has been our trusted digital partner. Their team truly cares about our business success.",
            author: "Vignesh R",
            role: "Small Business Owner"
        }
    ];

    const faqs = [
        { q: "What exactly does Sanju Wind Energy Services do?", a: "We provide complete digital marketing and IT solutions to increase your reach and revenue." },
        { q: "How can this help my business grow?", a: "Our data-driven strategies and custom campaigns focus on real, measurable business results. It helps businesses reach customers online, increase visibility, and grow sales faster than traditional methods." },
        { q: "Do you offer both Marketing and Engineering?", a: "Yes, we handle everything — from marketing to web, app, and software development." },
        { q: "Does digital marketing actually work?", a: "Yes! Targeted campaigns attract the right audience who are ready to buy your products or services." }
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
                            Empowering Businesses Through <br /> Digital Marketing & IT Innovation
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 1.8 }}>
                            We help brands grow, connect, and succeed through result-driven digital marketing and modern IT solutions.
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
                                src="home_hero_innovation_cyber_1772536795720.png"
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
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Experienced Employees</span>
                    </div>
                    <div className="stat-item-v2" style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', paddingLeft: '3rem', paddingRight: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(255, 0, 122, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Trophy size={32} color="var(--secondary)" />
                        </div>
                        <span className="stat-num" style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}>15+</span>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Clients Served</span>
                    </div>
                    <div className="stat-item-v2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(157, 0, 255, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
                            <Globe size={32} color="var(--accent)" />
                        </div>
                        <span className="stat-label" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Trusted by Global Brands</span>
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
                                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" alt="Digital Marketing" />
                            </div>
                            <h3 className="solution-title">Digital <br />Marketing</h3>
                        </div>

                        <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontSize: '1.1rem' }}>
                            {digitalMarketingServices.map((service, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 0', borderBottom: idx !== digitalMarketingServices.length - 1 ? '1px solid var(--border)' : 'none' }}>
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
                                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="Customised Solutions" />
                            </div>
                            <h3 className="solution-title">Customised <br />Solutions</h3>
                        </div>

                        <ul style={{ listStyle: 'none', color: 'var(--text-dark)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            {itSolutionsServices.map((service, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1rem 0', borderBottom: idx !== itSolutionsServices.length - 1 ? '1px solid var(--border)' : 'none' }}>
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

            {/* Founder Quote */}
            <section style={{ paddingTop: '160px' }}>
                <div className="founder-card" data-aos="zoom-in">
                    <div className="founder-img-container">
                        <img src="/sanjay.png" alt="Mr. SANJAY KUMAR" />
                    </div>
                    <div>
                        <Quote size={50} color="var(--secondary)" style={{ margin: '0 auto 1.5rem', opacity: 0.2 }} />
                        <p style={{ fontSize: '1.6rem', fontWeight: 500, fontStyle: 'italic', marginBottom: '2.5rem', lineHeight: 1.6, color: 'var(--text-dark)' }}>
                            "Every brand has a story — we’re here to make it reach the world. At Sanju Wind Energy, we make that happen through Innovation, strategy and commitment"
                        </p>
                        <h4 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.3rem' }}>Mr. SANJAY KUMAR</h4>
                        <span className="section-tag" style={{ border: 'none', background: 'transparent', padding: 0, justifyContent: 'center' }}>FOUNDER & CEO, Sanju Wind Energy</span>
                    </div>
                </div>

                {/* Official Partner Badge */}

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
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Enquire Now <ArrowRight size={20} />
                        </a>
                        <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>Contact Sales</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
