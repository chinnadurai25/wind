import { ArrowRight, CheckCircle2, Target, Eye, Code, TrendingUp, Cpu, Monitor, Zap, MessageSquare } from 'lucide-react';

const About = () => {
    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero">
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Driven by Innovation.</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 900 }}>
                            Focused on <br />
                            Your <span className="gradient-text">Growth.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
                            We help brands grow smarter, faster, and stronger through innovative digital marketing and scalable software solutions designed for today’s competitive digital landscape.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#about" className="btn btn-primary">Learn More <ArrowRight size={20} /></a>
                            <a href="/contact" className="btn btn-outline">Free Consultation</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Innovation Hub"
                                className="floating-img"
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Fly Towards */}
            <section id="about" style={{ background: 'rgba(0, 242, 255, 0.01)', position: 'relative' }}>
                <div className="grid-2">
                    <div data-aos="fade-right">
                        <span className="section-tag">About Company</span>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '2rem' }}>About Fly Towards <br /><span className="gradient-text">Digital Innovation</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            Fly Towards Digital Innovation is a results driven digital marketing and software solutions company focused on helping businesses build a strong online presence and achieve consistent growth.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            We provide innovative, scalable, and affordable digital solutions for startups, small businesses, and growing enterprises looking to succeed in today’s competitive digital landscape.
                        </p>

                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem' }}>Multiple</span>
                                <span className="stat-label">Digital Services</span>
                            </div>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem' }}>Multiple</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem', marginTop: '0.8rem', marginBottom: '0.5rem' }}>Industries</span>
                                <span className="stat-label">Multi-sector Experience</span>
                            </div>
                            <div className="stat-item-v2" style={{ padding: '1.5rem', background: '#fff', borderRadius: '20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                                <span className="stat-num" style={{ fontSize: '1.5rem', marginTop: '0.8rem', marginBottom: '0.5rem' }}>Growth</span>
                                <span className="stat-label">Result-Focused Approach</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="card" style={{ padding: '3.5rem' }}>
                            <span className="section-tag">Who We Are</span>
                            <h3 className="mb-4" style={{ fontSize: '2.2rem' }}>Transforming Businesses</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                                We are a team of skilled digital marketers, designers, developers, and growth strategists passionate about transforming businesses through digital innovation. Our expertise includes digital marketing services, SEO, social media marketing, Google Ads, website and app development, CRM software, billing software, payroll software, and WhatsApp Marketing API solutions.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Result-oriented strategies</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Transparent communication</span>
                                </li>
                                <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>Affordable & scalable pricing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section id="services" style={{ padding: '100px 8%' }}>
                <div className="text-center max-w-800 mb-4" data-aos="fade-up">
                    <span className="section-tag">Services</span>
                    <h2 style={{ fontSize: '3rem' }}>What We Do</h2>
                </div>
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '3rem' }}>

                    <div className="card text-center" data-aos="fade-up" style={{ padding: '3rem 2rem' }}>
                        <div style={{ margin: '0 auto 1.5rem', width: '100px', height: '100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Digital Marketing & SEO</h4>
                    </div>

                    <div className="card text-center" data-aos="fade-up" data-aos-delay="100" style={{ padding: '3rem 2rem' }}>
                        <div style={{ margin: '0 auto 1.5rem', width: '100px', height: '100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Web & App Development</h4>
                    </div>

                    <div className="card text-center" data-aos="fade-up" data-aos-delay="200" style={{ padding: '3rem 2rem' }}>
                        <div style={{ margin: '0 auto 1.5rem', width: '100px', height: '100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>CRM & Business Software</h4>
                    </div>

                    <div className="card text-center" data-aos="fade-up" data-aos-delay="300" style={{ padding: '3rem 2rem' }}>
                        <div style={{ margin: '0 auto 1.5rem', width: '100px', height: '100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Billing & Payroll Systems</h4>
                    </div>

                    <div className="card text-center" data-aos="fade-up" data-aos-delay="400" style={{ padding: '3rem 2rem' }}>
                        <div style={{ margin: '0 auto 1.5rem', width: '100px', height: '100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>WhatsApp Marketing API</h4>
                    </div>

                    <div className="card text-center" data-aos="fade-up" data-aos-delay="500" style={{ padding: '3rem 2rem' }}>
                        <div style={{ margin: '0 auto 1.5rem', width: '100px', height: '100px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Growth Strategy & Automation</h4>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div className="grid">
                    <div className="card text-center" data-aos="fade-up" style={{ padding: '6rem 3rem', background: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop) center/cover', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8))', zIndex: 0 }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                            <h2 className="mb-4" style={{ fontSize: '3rem', color: 'white' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#f0f0f0', maxWidth: '600px', margin: '0 auto' }}>
                                Our mission is to empower businesses with innovative digital marketing and software solutions that drive real growth and long term value.
                            </p>
                        </div>
                    </div>

                    <div className="card text-center" data-aos="fade-up" style={{ transitionDelay: '0.1s', padding: '6rem 3rem', background: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop) center/cover', position: 'relative', overflow: 'hidden' }} id="vision">
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8))', zIndex: 0 }}></div>
                        <div style={{ position: 'relative', zIndex: 1, color: 'white' }}>
                            <h2 className="mb-4" style={{ fontSize: '3rem', color: 'white' }}>Our Vision</h2>
                            <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#f0f0f0', maxWidth: '600px', margin: '0 auto' }}>
                                Our vision is to become a trusted digital marketing and technology partner by delivering future ready, scalable, and impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="cta" className="text-center" data-aos="zoom-in">
                <div className="cta-content" style={{
                    background: '#fff',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', background: 'var(--gradient-primary)', filter: 'blur(100px)', opacity: '0.05', borderRadius: '50%' }}></div>
                    <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'var(--gradient-primary)', filter: 'blur(100px)', opacity: '0.05', borderRadius: '50%' }}></div>

                    <span className="section-tag" style={{ position: 'relative' }}>Let’s Grow Together</span>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', position: 'relative' }}>Looking for digital marketing, <br /><span className="gradient-text">software solutions,</span> or WhatsApp automation?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--text-muted)', position: 'relative' }}>
                        We are here to help. Join businesses that have flown towards success with our expert digital strategies.
                    </p>
                    <a href="/contact" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', position: 'relative' }}>
                        Get a Free Consulation <ArrowRight size={24} />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default About;
