import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
    Wrench, Hammer, ShieldCheck, Navigation, 
    ArrowRight, CheckCircle2, Settings, 
    Users, Clock, Zap, ChevronRight, Phone
} from 'lucide-react';

const IndustrialServiceDetail = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const serviceData = {
        "installation": {
            title: "Installation & Maintenance",
            subtitle: "Lifecycle Wind Energy Support",
            heroImage: "/windmill.jpg",
            fieldImage: "/service1.jpg",
            fieldMeta: { location: "Coastal Wind Farm", tech: "Grade-A Maintenance", status: "Operational" },
            icon: <Wrench size={48} />,
            description: "We provide end-to-end installation services for wind turbines, from site preparation and foundation work to final electrical connectivity. Our maintenance protocols are designed to maximize turbine availability and energy yield through predictive analytics and routine precision check-ups.",
            capabilities: [
                { title: "Turbine Erection", desc: "Expert assembly and heavy-lifting coordination for all major turbine models." },
                { title: "Electrical Integration", desc: "Full-scale grid connectivity and internal wiring to standard compliance." },
                { title: "Predictive Maintenance", desc: "Using data-driven insights to prevent failures before they occur." },
                { title: "On-Site Support", desc: "24/7 technical assistance for immediate troubleshooting and repair." }
            ],
            process: [
                { step: "01", title: "Site Assessment", desc: "Comprehensive geological and logistical survey of the installation area." },
                { step: "02", title: "Deployment", desc: "Mobilization of heavy machinery and certified technical teams." },
                { step: "03", title: "Integration", desc: "Precision assembly and electrical grid synchronization." },
                { step: "04", title: "Maintenance", desc: "Lifelong routine monitoring and efficiency optimization." }
            ]
        },
        "blade-repair": {
            title: "Blade Repair Work",
            subtitle: "High-Precision Aerodynamics",
            heroImage: "/windmill1.jpg",
            fieldImage: "/service2.jpg",
            fieldMeta: { location: "Turbine Nacelle", tech: "Composite Repair", status: "Certified" },
            icon: <Hammer size={48} />,
            description: "Turbine blades are subject to intense environmental stress. Our specialized teams provide expert structural and surface repairs to restore aerodynamic efficiency, utilizing advanced composite materials that withstand the harshest weather conditions.",
            capabilities: [
                { title: "Structural Analysis", desc: "Ultrasonic and visual inspection to identify internal delamination." },
                { title: "Composite Repair", desc: "Precise resin and fiber application to restore original blade strength." },
                { title: "Edge Protection", desc: "Leading-edge protection systems to prevent erosion and drag." },
                { title: "Surface Finishing", desc: "Professional coating and finishing to ensure smooth airflow." }
            ],
            process: [
                { step: "01", title: "Inspection", desc: "Initial high-resolution drone or rope-access visual audit." },
                { step: "02", title: "Preparation", desc: "Controlled cleaning and removal of damaged composite layers." },
                { step: "03", title: "Reconstruction", desc: "Layered material application and vacuum-sealed curing." },
                { step: "04", title: "Protection", desc: "Application of weather-resistant protective coatings." }
            ]
        },
        "rope-access": {
            title: "Rope Access Work",
            subtitle: "Industrial Climbing & Support",
            heroImage: "/windmill2.jpg",
            fieldImage: "/service3.jpg",
            fieldMeta: { location: "High-Altitude Hub", tech: "IRATA L3 Certified", status: "Active Site" },
            icon: <Navigation size={48} />,
            description: "Using advanced IRATA-certified rope access techniques, our technicians perform complex inspections and repairs at high altitudes with minimal downtime. This method is safer, faster, and more cost-effective than traditional scaffolding or cranes.",
            capabilities: [
                { title: "NDT Testing", desc: "Non-destructive testing of welds and structural components at height." },
                { title: "Cleaning & Coating", desc: "Removing debris and reapplying protective layers to the tower and nacelle." },
                { title: "Bolt Tensioning", desc: "Systematic auditing and re-tensioning of structural nuts and bolts." },
                { title: "Rescue Standby", desc: "Providing expert rescue-ready teams for high-risk industrial sites." }
            ],
            process: [
                { step: "01", title: "Rigging", desc: "Installation of certified anchor points and safety lines." },
                { step: "02", title: "Navigation", desc: "Specialized climbing to specific turbine components." },
                { step: "03", title: "Execution", desc: "Performing inspections or repairs with specialized hand tools." },
                { step: "04", title: "Extraction", desc: "Safe removal of all gear and post-work site reporting." }
            ]
        },
        "hse-safety": {
            title: "HSE Safety Services",
            subtitle: "Total Compliance & Protection",
            heroImage: "/service4.jpg",
            fieldImage: "/service4.jpg",
            fieldMeta: { location: "On-Site Command", tech: "Global HSE Standard", status: "Audit Passed" },
            icon: <ShieldCheck size={48} />,
            description: "Health, Safety, and Environment (HSE) are the cornerstones of Sanju Wind Energy. we provide comprehensive safety officer placement, risk audits, and training programs to ensure your site exceeds global renewable energy safety standards.",
            capabilities: [
                { title: "Site Risk Audit", desc: "Identifying potential hazards and implementing mitigation strategies." },
                { title: "Officer Placement", desc: "Deploying certified HSE officers for full-time site supervision." },
                { title: "Safety Training", desc: "Educating on-site teams on emergency response and safe work." },
                { title: "ISO Compliance", desc: "Assisting in meeting international quality and safety certifications." }
            ],
            process: [
                { step: "01", title: "Gap Analysis", desc: "Assessing current site safety levels against regulations." },
                { step: "02", title: "Planning", desc: "Developing a custom HSE management and response plan." },
                { step: "03", title: "Training", desc: "Conducting intensive workshops for site technicians." },
                { step: "04", title: "Monitoring", desc: "Ongoing audits and continuous safety improvements." }
            ]
        }
    };

    const currentService = serviceData[slug] || serviceData["installation"];

    return (
        <main className="detail-page">
            <div className="mesh-bg"></div>

            {/* Premium Hero */}
            <section className="detail-hero" style={{ 
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${currentService.heroImage}) center/cover fixed`,
                minHeight: '70vh'
            }}>
                <div className="container" data-aos="fade-up">
                    <span className="section-tag" style={{ color: 'white', opacity: 0.8 }}>{currentService.subtitle}</span>
                    <h1 className="detail-title">{currentService.title}</h1>
                    <div className="hero-divider"></div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="content-section">
                <div className="grid-2">
                    <div data-aos="fade-right">
                        <span className="section-tag">Overview</span>
                        <h2 className="section-h2">The Industry <br /> <span className="gradient-text">Excellence</span></h2>
                        <p className="p-detail">
                            {currentService.description}
                        </p>
                        <div className="stats-row">
                            <div className="stat-sm">
                                <Clock className="icon-sm" />
                                <div>
                                    <span className="stat-val">24/7</span>
                                    <p className="stat-lab">Support</p>
                                </div>
                            </div>
                            <div className="stat-sm">
                                <Users className="icon-sm" />
                                <div>
                                    <span className="stat-val">100%</span>
                                    <p className="stat-lab">Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="capabilities-grid" data-aos="fade-left">
                        {currentService.capabilities.map((cap, i) => (
                            <div key={i} className="capability-card">
                                <div className="cap-icon-box">{currentService.icon}</div>
                                <div>
                                    <h4>{cap.title}</h4>
                                    <p>{cap.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Field Showcase - Image Integration */}
            <section className="showcase-section">
                <div className="showcase-container" data-aos="zoom-in">
                    <div className="field-img-wrapper">
                        <img src={currentService.fieldImage} alt="Technical Field Operation" className="field-full-img" />
                        <div className="field-overlay"></div>
                        
                        {/* Technical Metadata Badge */}
                        <div className="tech-meta-badge">
                            <div className="meta-item">
                                <span className="meta-label">Deployment Site</span>
                                <span className="meta-val">{currentService.fieldMeta.location}</span>
                            </div>
                            <div className="meta-divider"></div>
                            <div className="meta-item">
                                <span className="meta-label">Primary Technology</span>
                                <span className="meta-val">{currentService.fieldMeta.tech}</span>
                            </div>
                            <div className="meta-divider"></div>
                            <div className="meta-item">
                                <span className="meta-label">Operation Status</span>
                                <span className="meta-val status-active">{currentService.fieldMeta.status}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="showcase-desc" data-aos="fade-up">
                        <h3>Field Operations & <span className="gradient-text">Technical Prowess</span></h3>
                        <p>Our teams operate in high-risk environments with surgical precision. Using the latest industrial tools and safety protocols, we guarantee the integrity of your wind assets.</p>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="workflow-section">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Workflow</span>
                    <h2 className="section-h2">Our Operational <span className="gradient-text">Journey</span></h2>
                </div>
                
                <div className="workflow-grid">
                    {currentService.process.map((p, i) => (
                        <div key={i} className="process-card" data-aos="fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                            <div className="process-num">{p.step}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="detail-cta">
                <div className="cta-box" data-aos="zoom-in">
                    <div className="cta-icon-float">{currentService.icon}</div>
                    <h2>Ready to Scale Your <br/> <span className="gradient-text">Energy Assets?</span></h2>
                    <p>Connect with our technical board for a comprehensive site risk assessment and deployment plan.</p>
                    <div className="cta-btns">
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn-primary">
                             Request Site Audit <Zap size={20} />
                        </a>
                        <Link to="/service" className="btn-outline">
                            Return to Services
                        </Link>
                    </div>
                </div>
            </section>

            <style>{`
                .detail-page {
                    overflow-x: hidden;
                    width: 100%;
                }
                .detail-hero {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    padding-top: 100px;
                }
                .detail-title {
                    font-size: clamp(3rem, 8vw, 5.5rem);
                    font-weight: 800;
                    margin: 1.5rem 0;
                    letter-spacing: -2px;
                }
                .hero-divider {
                    width: 80px;
                    height: 4px;
                    background: var(--gradient-primary);
                    margin: 2rem auto;
                    border-radius: 10px;
                }
                .content-section {
                    padding: 120px 8%;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .section-h2 {
                    font-size: 3.5rem;
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    font-weight: 800;
                }
                .p-detail {
                    font-size: 1.25rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 3rem;
                }
                .stats-row {
                    display: flex;
                    gap: 3rem;
                }
                .stat-sm {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                }
                .icon-sm {
                    color: var(--primary);
                    width: 40px;
                }
                .stat-val {
                    display: block;
                    font-size: 1.8rem;
                    font-weight: 900;
                }
                .stat-lab {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    font-weight: 700;
                }
                .capabilities-grid {
                    display: grid;
                    gap: 1.5rem;
                }
                .capability-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 30px;
                    border: 1px solid var(--border);
                    display: flex;
                    gap: 1.5rem;
                    transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .capability-card:hover {
                    border-color: var(--primary);
                    transform: translateX(15px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                }
                .cap-icon-box {
                    width: 60px;
                    height: 60px;
                    background: rgba(15, 154, 42, 0.05);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    flex-shrink: 0;
                }
                .capability-card h4 {
                    font-size: 1.4rem;
                    margin-bottom: 0.5rem;
                }

                /* Showcase Section */
                .showcase-section {
                    padding: 100px 8%;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .field-img-wrapper {
                    position: relative;
                    border-radius: 50px;
                    overflow: hidden;
                    aspect-ratio: 21/9;
                    box-shadow: 0 40px 100px rgba(0,0,0,0.15);
                }
                .field-full-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1.2s ease;
                }
                .field-img-wrapper:hover .field-full-img {
                    transform: scale(1.05);
                }
                .tech-meta-badge {
                    position: absolute;
                    bottom: 40px;
                    left: 40px;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(20px);
                    padding: 2rem 3rem;
                    border-radius: 30px;
                    display: flex;
                    gap: 2.5rem;
                    align-items: center;
                    z-index: 5;
                    border: 1px solid rgba(255,255,255,0.3);
                }
                .meta-item {
                    display: flex;
                    flex-direction: column;
                }
                .meta-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--text-muted);
                    font-weight: 700;
                    margin-bottom: 5px;
                }
                .meta-val {
                    font-size: 1.1rem;
                    font-weight: 800;
                }
                .status-active {
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .status-active::before {
                    content: '';
                    width: 8px;
                    height: 8px;
                    background: var(--primary);
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                .meta-divider {
                    width: 1px;
                    height: 40px;
                    background: var(--border);
                }
                .showcase-desc {
                    margin-top: 4rem;
                    max-width: 800px;
                }
                .showcase-desc h3 {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }

                .workflow-section {
                    padding: 120px 8%;
                    background: #f8fafc;
                }
                .workflow-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .process-card {
                    background: white;
                    padding: 4rem 3rem;
                    border-radius: 40px;
                    border: 1px solid var(--border);
                    position: relative;
                }
                .process-num {
                    font-size: 5rem;
                    font-weight: 900;
                    color: var(--primary);
                    opacity: 0.05;
                    position: absolute;
                    top: 10px;
                    right: 30px;
                }
                .cta-icon-float {
                    width: 80px;
                    height: 80px;
                    background: rgba(15, 154, 42, 0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                    color: var(--primary);
                }
                .btn-primary {
                    background: var(--gradient-primary);
                    color: white;
                    padding: 1.2rem 2.8rem;
                    border-radius: 50px;
                    text-decoration: none !important;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 30px rgba(15, 154, 42, 0.2);
                    border: none;
                    cursor: pointer;
                }
                .btn-primary:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(15, 154, 42, 0.3);
                }
                .btn-outline {
                    border: 2px solid var(--border);
                    color: var(--text-dark);
                    padding: 1.2rem 2.8rem;
                    border-radius: 50px;
                    text-decoration: none !important;
                    font-weight: 700;
                    transition: 0.4s;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .btn-outline:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: white;
                    transform: translateY(-5px);
                }

                @media (max-width: 1024px) {
                    .field-img-wrapper { aspect-ratio: 16/10; }
                    .tech-meta-badge { 
                        bottom: 20px; 
                        left: 20px; 
                        right: 20px; 
                        padding: 1.5rem;
                        gap: 1rem;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .meta-divider { display: none; }
                }
            `}</style>
        </main>
    );
};

export default IndustrialServiceDetail;
