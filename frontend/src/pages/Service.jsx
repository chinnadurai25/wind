import { Wrench, Hammer, ShieldCheck, Activity, Navigation, ArrowRight, Settings } from 'lucide-react';

const Service = () => {
    const services = [
        {
            num: "01",
            title: "Installation & Maintenance",
            subtitle: "Lifecycle Support",
            desc: "Specialized on-site installation and routine maintenance protocols to ensure your wind energy assets operate with maximum reliability and zero performance lag.",
            icon: <Wrench size={40} />,
            image: "windmill.jpg",
            tags: ["Turbine Installation", "Routine Maintenance", "Efficiency Tuning"],
            link: "/service/installation",
            delay: "0s"
        },
        {
            num: "02",
            title: "Blade Repair Work",
            subtitle: "Aerodynamic Precision",
            desc: "High-precision structural and aerodynamic repair services for turbine blades, restoring original efficiency and ensuring long-term structural integrity in harsh environments.",
            icon: <Hammer size={40} />,
            image: "windmill1.jpg",
            tags: ["Blade Inspection", "Composite Repair", "Refurbishment"],
            link: "/service/blade-repair",
            delay: "0.1s"
        },
        {
            num: "03",
            title: "Rope Access Work",
            subtitle: "High-Altitude Access",
            desc: "Certified high-altitude technician support utilizing advanced IRATA-standard rope access techniques for safe and efficient turbine inspection and repair in hard-to-reach areas.",
            icon: <Navigation size={40} />,
            image: "windmill2.jpg",
            tags: ["Tower Inspection", "Climbing Support", "Safe Access"],
            link: "/service/rope-access",
            delay: "0.2s"
        },
        {
            num: "04",
            title: "HSE Safety Services",
            subtitle: "Safety & Compliance",
            desc: "Comprehensive Health, Safety, and Environment management systems specifically designed for the wind energy sector to ensure global safety compliance and risk mitigation.",
            icon: <ShieldCheck size={40} />,
            image: "service1.jpg",
            tags: ["Safety Audits", "HSE Compliance", "Risk Management"],
            link: "/service/hse-safety",
            delay: "0.3s"
        }
    ];

    return (
        <main className="service-page">
            <div className="mesh-bg"></div>

            {/* Premium Header */}
            <section className="service-hero">
                <div className="max-w-1000" data-aos="fade-up">
                    <span className="section-tag" style={{ margin: '0 auto 1.5rem' }}>Core Industrial Solutions</span>
                    <h1 className="hero-title">
                        Excellence in <br />
                        Wind <span className="gradient-text">Energy Solutions</span>
                    </h1>
                    <p className="hero-desc">
                        Sanju Wind Energy Services provides world-class technical support and specialized maintenance for the renewable energy sector, ensuring the sustainability and performance of wind assets.
                    </p>
                </div>
            </section>

            {/* Staggered Narrative Rows */}
            <div className="service-container">
                {services.map((item, idx) => (
                    <section key={idx} className={`service-row ${idx % 2 !== 0 ? 'row-reverse' : ''}`} id={`service-${item.num}`}>
                        <div className="service-image-side" data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}>
                            <div className="parallax-img-box">
                                <img src={item.image} alt={item.title} className="service-main-img" />
                                <div className="floating-badge">
                                    <div className="badge-icon">{item.icon}</div>
                                    <div className="badge-text">{item.subtitle}</div>
                                </div>
                            </div>
                        </div>

                        <div className="service-content-side" data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}>
                            <div className="ghost-number">{item.num}</div>
                            <h2 className="service-row-title">{item.title}</h2>
                            <p className="service-row-desc">{item.desc}</p>
                            
                            <div className="tag-group">
                                {item.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="service-tag-item">{tag}</span>
                                ))}
                            </div>

                            {item.link && (
                                <a href={item.link} className="btn-service">
                                    Service Details <ArrowRight size={18} />
                                </a>
                            )}
                        </div>
                    </section>
                ))}
            </div>

            <style>{`
                .service-page {
                    overflow-x: hidden;
                }
                .service-hero {
                    padding: 180px 8% 100px;
                    text-align: center;
                }
                .hero-desc {
                    font-size: 1.3rem;
                    color: var(--text-muted);
                    max-width: 750px;
                    margin: 0 auto;
                    line-height: 1.8;
                }
                .service-container {
                    padding-bottom: 120px;
                }
                .service-row {
                    display: flex;
                    align-items: center;
                    gap: 6rem;
                    padding: 100px 8%;
                    max-width: 1400px;
                    margin: 0 auto;
                    min-height: 80vh;
                }
                .row-reverse {
                    flex-direction: row-reverse;
                }
                .service-image-side {
                    flex: 1;
                    position: relative;
                }
                .parallax-img-box {
                    position: relative;
                    border-radius: 40px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
                }
                .service-main-img {
                    width: 100%;
                    height: 550px;
                    object-fit: cover;
                    transform: scale(1.02);
                    transition: transform 0.8s ease;
                }
                .service-row:hover .service-main-img {
                    transform: scale(1.1);
                }
                .floating-badge {
                    position: absolute;
                    bottom: 40px;
                    left: 40px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    padding: 1rem 1.5rem;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
                    border: 1px solid var(--border);
                }
                .badge-icon {
                    color: var(--primary);
                    background: rgba(15, 154, 42, 0.1);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                }
                .badge-text {
                    font-weight: 800;
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .service-content-side {
                    flex: 1;
                    position: relative;
                }
                .ghost-number {
                    position: absolute;
                    top: -60px;
                    left: -20px;
                    font-size: 10rem;
                    font-weight: 900;
                    color: var(--primary);
                    opacity: 0.04;
                    font-family: 'Outfit';
                    z-index: -1;
                    line-height: 1;
                }
                .service-row-title {
                    font-size: 3.5rem;
                    margin-bottom: 2rem;
                    font-weight: 800;
                }
                .service-row-desc {
                    font-size: 1.25rem;
                    color: var(--text-muted);
                    line-height: 1.8;
                    margin-bottom: 2.5rem;
                }
                .tag-group {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 3rem;
                }
                .service-tag-item {
                    padding: 0.5rem 1.2rem;
                    background: rgba(15, 154, 42, 0.05);
                    border: 1px solid rgba(15, 154, 42, 0.1);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    color: var(--primary);
                }
                .btn-service {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 1rem 2rem;
                    background: var(--text-dark);
                    color: white;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    transition: all 0.4s ease;
                }
                .btn-service:hover {
                    background: var(--primary);
                    transform: translateX(10px);
                }

                @media (max-width: 1024px) {
                    .service-row {
                        flex-direction: column !important;
                        gap: 3rem;
                        padding: 60px 5%;
                        text-align: center;
                    }
                    .service-main-img {
                        height: 350px;
                    }
                    .service-row-title {
                        font-size: 2.5rem;
                    }
                    .tag-group {
                        justify-content: center;
                    }
                    .ghost-number {
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 7rem;
                    }
                    .floating-badge {
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 20px;
                        width: max-content;
                    }
                }
            `}</style>
        </main>
    );
};

export default Service;
