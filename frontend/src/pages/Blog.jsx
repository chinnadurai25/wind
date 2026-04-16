import { ArrowRight, Layout, MonitorSmartphone, TrendingUp, Share2, Target, PenTool, LayoutTemplate, MessageSquare, Briefcase, RefreshCcw, BellRing, Settings, ShieldCheck, Zap, Mail, Navigation, BarChart, Server, Users } from 'lucide-react';
import { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogSections = [
        {
            title: "1. Establish a Strong Digital Foundation",
            desc: "Every successful digital journey begins with a solid online foundation — your website. Think of it as your company's digital headquarters.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            subsections: [
                {
                    title: "a. Professional Website Development",
                    content: "A professional, responsive, and SEO-optimized website is the first step to credibility. It clearly communicates your brand message, loads beautifully on mobile, and features strong CTAs (Call to Actions)."
                },
                {
                    title: "b. Domain, Hosting, and Subdomain Strategy",
                    content: "Your domain represents your digital identity. We setup dynamic strategies like shop.yourcompany.com for eCommerce or crm.yourcompany.com for internal operations ensuring smooth routing."
                }
            ],
            delay: "0.1s"
        },
        {
            title: "2. Leverage Digital Marketing for Visibility",
            desc: "Once your foundation is set, the next step is to drive traffic and awareness. Digital marketing bridges your brand and your audience.",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
            subsections: [
                {
                    title: "a. Search Engine Optimization (SEO)",
                    content: "Organic visibility increases trust and attracts high-intent visitors. Key elements include targeted keywords, on-page optimization, and Local SEO setups."
                },
                {
                    title: "b. Social Media Marketing",
                    content: "We position your brand where your audience spends their time — LinkedIn, Instagram, Facebook, and YouTube generating daily inquiries."
                },
                {
                    title: "c. Paid Advertising (Google & Meta Ads)",
                    content: "When growth needs acceleration, paid campaigns help you reach specific audiences quickly with absolute ROI precision."
                }
            ],
            delay: "0.2s"
        },
        {
            title: "3. Build a Strong Brand Identity",
            desc: "Your brand is much more than a logo — it's your story, values, and customer experience.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
            subsections: [
                {
                    title: "a. Brand Strategy & Design",
                    content: "We help define your brand voice, color palette, typography and visual identity so your business looks professional across every touchpoint."
                },
                {
                    title: "b. Content that Converts",
                    content: "Words have power. Our content team develops high-quality landing pages and blogs that speak directly to your audience."
                },
                {
                    title: "c. Reputation Management",
                    content: "Online reviews and customer perception influence 90% of buying decisions. We monitor and manage your online reputation."
                }
            ],
            delay: "0.3s"
        },
        {
            title: "4. Digital Automation & Integration",
            desc: "Smart businesses grow faster when they automate processes. From CRM systems to billing software, automation saves time.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            subsections: [
                {
                    title: "a. CRM and Lead Management",
                    content: "We integrate systems like Fielduo CRM or custom dashboards that track leads, follow-ups, and conversions in real-time."
                },
                {
                    title: "b. Billing & Invoicing Solutions",
                    content: "Our in-house product FlyBill simplifies billing and invoicing for businesses, helping you manage accounts with ease."
                },
                {
                    title: "c. Workflow Automation",
                    content: "We build systems that reduce manual effort—such as automated email follow-ups and cross-platform data syncing."
                }
            ],
            delay: "0.4s"
        },
        {
            title: "5. Engage & Retain Customers",
            desc: "Attracting customers is just the beginning — retaining them is where real growth continuously happens.",
            image: "https://images.unsplash.com/photo-1552581232-6822800c62ce?q=80&w=2070&auto=format&fit=crop",
            subsections: [
                {
                    title: "a. Email & WhatsApp Marketing",
                    content: "Personalized campaigns keep your customers informed. We design automated journeys that turn buyers into long-term clients."
                },
                {
                    title: "b. Loyalty & Feedback Systems",
                    content: "Simple reward programs can significantly increase repeat business. We deploy easy-to-use tools that strengthen connections."
                },
                {
                    title: "c. Analytics & Insights",
                    content: "We utilize Google Analytics, Meta Insights, and deep CRM reports to track performance and scale optimally."
                }
            ],
            delay: "0.5s"
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center', paddingTop: '140px' }}>
                <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex', gap: '8px' }}>
                        <Share2 size={18} /> Official Blog
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        How to Grow Your Business Online: <br />
                        <span className="gradient-text">A Strategic Guide</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', marginInline: 'auto', maxWidth: '800px' }}>
                        In today’s digital economy, growth is no longer defined by physical presence — it’s driven by online visibility, digital systems, and customer engagement. Whether you’re a small business, startup, or established corporate firm, your ability to scale depends on how effectively you leverage the digital ecosystem.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', color: 'var(--text-muted)', fontWeight: 600 }}>
                        <img src="https://ui-avatars.com/api/?name=Fly+Towards&background=00f2ff&color=fff" alt="Sanju Wind Energy" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                        <span>By Sanju Wind Energy Services</span>
                    </div>
                </div>
            </section>

            {/* Main Content Areas */}
            <section id="content" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="max-w-800" style={{ margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    {blogSections.map((section, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '3.5rem', transitionDelay: section.delay, borderLeft: `4px solid ${idx % 3 === 0 ? 'var(--primary)' : idx % 3 === 1 ? 'var(--secondary)' : 'var(--accent)'}` }}>
                            <div className="blog-post-header">
                                <div className="blog-post-img-box">
                                    <img src={section.image} alt={section.title} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
                                </div>
                                <div>
                                    <h2 className="blog-post-title">
                                        {section.title}
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                        {section.desc}
                                    </p>
                                </div>
                            </div>

                            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {section.subsections.map((sub, sIdx) => (
                                    <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '15px', border: '1px solid var(--border)' }}>
                                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>{sub.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{sub.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="grid-2" style={{ gap: '2rem', marginTop: '2rem' }}>
                        <div className="card" data-aos="zoom-in" style={{ padding: '2.5rem', background: 'var(--gradient-primary)', color: 'white', border: 'none' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'white' }}>6. E-Commerce & Sales</h3>
                            <p style={{ opacity: 0.9, lineHeight: 1.7, fontSize: '1.05rem' }}>
                                For product-based businesses, e-commerce is a must. We develop custom WooCommerce or Shopify stores, ensuring smooth navigation, secure payment gateways, and seamless order management to scale globally.
                            </p>
                        </div>
                        <div className="card" data-aos="zoom-in" data-aos-delay="0.1s" style={{ padding: '2.5rem', border: '2px solid var(--accent)' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>7. Continuous Innovation</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                                Digital growth is not a one-time project. At Sanju Wind Energy Services, we follow a strictly measurable "Plan, Execute, Measure, Improve" model to continuously optimize real-time results.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Conclusion & CTA */}
            <section id="conclusion" style={{ background: 'rgba(0, 242, 255, 0.02)' }}>
                <div className="cta-content" data-aos="fade-up" style={{
                    textAlign: 'center',
                    background: '#fff',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <span className="section-tag">Grow Beyond Limits</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Your Journey to <span className="gradient-text">Success</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', margin: '0 auto 3rem', maxWidth: '800px', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                        Growing your business online requires a mix of strategy, creativity, and technology. From building your website to running digital campaigns and automating workflows, every step contributes to your long-term success. Our tailored solutions ensure your evolution is totally seamless.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Transform Your Business Today <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blog;
