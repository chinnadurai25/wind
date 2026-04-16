import { ArrowRight, CheckCircle2, Shield, MapPin, Camera, Smartphone, ScanFace, Building, Settings, RefreshCcw, Lock, FileCheck } from 'lucide-react';
import { useEffect } from 'react';

const FlyPayroll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goals = [
        "Allow attendance only when employees are physically present at the correct location",
        "Prevent fake attendance such as photo, video replay, proxy, or fake GPS",
        "Automatically sync attendance data with payroll"
    ];

    const workforceCategories = [
        {
            title: "Office-Based Employees",
            icon: <Building size={40} color="var(--primary)" />,
            features: [
                { title: "Fixed Office Location", desc: "Employees work from a predefined office location with a configured geo-fence." },
                { title: "Location-Based Attendance", desc: "Attendance can be marked only when physically present inside the office boundary." }
            ],
            delay: "0.1s"
        },
        {
            title: "Field-Based Employees",
            icon: <MapPin size={40} color="var(--secondary)" />,
            features: [
                { title: "Client / Site Based Work", desc: "Employees work at customer or project locations assigned by the admin." },
                { title: "Dynamic Location Assignment", desc: "Locations can change daily or per task based on business needs." }
            ],
            delay: "0.2s"
        },
        {
            title: "Hybrid Workforce",
            icon: <Smartphone size={40} color="var(--accent)" />,
            features: [
                { title: "Office + Field Work", desc: "Employees can operate from office or field depending on assigned duties." },
                { title: "Flexible Attendance Rules", desc: "The system adapts attendance validation based on the assigned work type." },
                { title: "Admin Location Config", desc: "Office geo-fence, client sites, and task-based field assignments." }
            ],
            delay: "0.3s"
        }
    ];

    const workflows = [
        {
            title: "Office Workflow",
            steps: [
                "Reach authorized Office Location",
                "GPS & Geo-Fence Validation",
                "Live Camera Activation",
                "Liveness Detection (blink, head movement)",
                "Face Verification & Attendance Recorded"
            ],
            icon: <CheckCircle2 color="var(--primary)" />
        },
        {
            title: "Field Workflow",
            steps: [
                "Admin assigns Site or Client Location",
                "Travel to assigned Site Location",
                "GPS & Geo-Fence Validation",
                "Live Face & Liveness Detection Check",
                "Attendance Recorded with Site Details"
            ],
            icon: <ScanFace color="var(--secondary)" />
        }
    ];

    const controls = [
        {
            title: "Security Enforcement",
            icon: <Lock size={40} color="var(--secondary)" />,
            desc: "GPS validation, geo fencing, device restrictions, and controlled camera access ensure attendance data cannot be manipulated or misused."
        },
        {
            title: "Live Presence & Anti-Spoof",
            icon: <Camera size={40} color="var(--primary)" />,
            desc: "Prevents photo, video replay, proxy attendance, and other impersonation attempts using real-time camera sessions and liveness detection."
        },
        {
            title: "Automated Payroll Flow",
            icon: <RefreshCcw size={40} color="var(--accent)" />,
            desc: "Check-in/out times, late entries, and overtime rules automatically flow to payroll processing without manual entry."
        },
        {
            title: "Compliance & Audit Readiness",
            icon: <FileCheck size={40} color="var(--primary)" />,
            desc: "Detailed audit logs provide full traceability for compliance checks, internal audits, and management reviews."
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
                            <Settings size={18} /> FlyRoll Ecosystem
                        </span>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem' }}>
                            Fully Automated <br />
                            <span className="gradient-text">Attendance & Payroll</span>
                        </h1>
                        <h2 className="mb-4" style={{ fontSize: '1.4rem', fontWeight: 600, opacity: 0.9, lineHeight: 1.6 }}>
                            Office + Field Attendance Solution using GPS, Geo-fencing, Face Recognition and Liveness Detection without any biometric or IoT devices.
                        </h2>

                        <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '1.5rem', borderRadius: '20px', marginBottom: '2.5rem', borderLeft: '4px solid var(--primary)' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Purpose & Business Goals</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {goals.map((goal, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="https://flyroll.flytowardsdigitalinnovation.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Go to FlyRoll App <ArrowRight size={20} />
                            </a>
                            <a href="#contact" className="btn btn-outline" style={{ border: '1px solid var(--border)' }}>Request a Demo</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                            <div style={{ background: 'var(--text-dark)', borderRadius: '25px', padding: '2rem', color: 'white' }}>
                                <ScanFace size={60} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Solution Overview</h3>
                                <p style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                                    This solution ensures employees can mark attendance only when physically present at the correct office or field location. By combining geo-fencing, live face verification, and automated payroll integration, organizations achieve a secure, scalable, and future-ready attendance system without any hardware dependency.
                                </p>
                            </div>
                            <div className="glow-aura" style={{ background: 'var(--gradient-primary)', opacity: 0.15 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workforce Categories Section */}
            <section id="categories" style={{ background: 'rgba(255, 0, 122, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Adaptability</span>
                    <h2 className="responsive-h2">Workforce <span className="gradient-text">Categories</span></h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Designed to manage diverse work environments seamlessly.
                    </p>
                </div>

                <div className="grid">
                    {workforceCategories.map((cat, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ transitionDelay: cat.delay, padding: '3rem 2.5rem' }}>
                            <div className="mb-4">{cat.icon}</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>{cat.title}</h3>

                            {cat.features.map((feature, fIdx) => (
                                <div key={fIdx} style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>{feature.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Attendance Workflows */}
            <section id="workflows">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Step-by-Step</span>
                    <h2 className="responsive-h2">Attendance <span className="gradient-text">Workflows</span></h2>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                    {workflows.map((workflow, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ background: 'var(--bg-white)', position: 'relative' }}>
                             <h3 className="responsive-h3" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                 {workflow.icon} {workflow.title}
                             </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {workflow.steps.map((step, sIdx) => (
                                    <div key={sIdx} className="workflow-card">
                                        <div className="workflow-number">
                                            {sIdx + 1}
                                        </div>
                                        <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security & Compliance Section */}
            <section style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }} data-aos="fade-up">
                    <span className="section-tag">Enterprise Grade</span>
                    <h2 className="responsive-h2">Security, Compliance <span className="gradient-text">& Controls</span></h2>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                    {controls.map((control, idx) => (
                        <div key={idx} className="card" data-aos="fade-up" style={{ padding: '3rem 2rem' }}>
                             <div className="feature-item">
                                 <div className="feature-icon-box">
                                     {control.icon}
                                 </div>
                                 <h3 className="responsive-h3" style={{ marginBottom: '0' }}>{control.title}</h3>
                             </div>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{control.desc}</p>
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
                    <span className="section-tag">Upgrade Your Operations</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Achieve a <span className="gradient-text">Future-Ready</span> Attendance System.
                    </h2>
                    <p style={{ fontSize: '1.3rem', margin: '2rem 0 3rem' }}>
                        No biometric device needed. Just intelligent technology powering your workforce.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://flyroll.flytowardsdigitalinnovation.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                            Go to FlyRoll App <ArrowRight size={20} />
                        </a>
                        <a href="https://wa.me/919080999823" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>Book a Free Demo</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FlyPayroll;
