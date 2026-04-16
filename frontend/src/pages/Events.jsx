import { Calendar, MapPin, ArrowRight, Video, Users } from 'lucide-react';
import { useEffect } from 'react';

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const upcomingEvents = [
        {
            title: "Digital Marketing Summit 2026",
            date: "October 15, 2026",
            location: "Virtual / Online",
            type: "Webinar",
            icon: <Video size={30} color="var(--primary)" />,
            description: "Join our top experts as they unravel the latest trends in digital marketing, SEO updates, and AI-driven campaigns."
        },
        {
            title: "Tech Innovators Meetup",
            date: "November 05, 2026",
            location: "Chennai IT Park, India",
            type: "In-Person",
            icon: <MapPin size={30} color="var(--secondary)" />,
            description: "An exclusive gathering for tech enthusiasts, founders, and developers focusing on scalable web architectures and cloud solutions."
        },
        {
            title: "WhatsApp Marketing Masterclass",
            date: "December 12, 2026",
            location: "Virtual / Online",
            type: "Workshop",
            icon: <Video size={30} color="var(--accent)" />,
            description: "A deep dive hands-on workshop on leveraging WhatsApp Business API to automate customer engagement and skyrocket sales."
        }
    ];

    return (
        <main>
            <div className="mesh-bg"></div>
            
            <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', paddingTop: '140px' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }} data-aos="fade-up">
                    <span className="section-tag" style={{ justifyContent: 'center', display: 'flex', gap: '8px' }}>
                        <Calendar size={18} /> Our Events
                    </span>
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                        Connect, Learn, and Grow <br />
                        <span className="gradient-text">With Sanju Wind Energy</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', marginInline: 'auto', maxWidth: '700px' }}>
                        Stay ahead of the curve. Join our webinars, workshops, and meetups designed to empower businesses and tech professionals with actionable insights and cutting-edge digital strategies.
                    </p>
                </div>
            </section>

            <section id="upcoming-events" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="max-w-1200" style={{ margin: '0 auto', padding: '0 2rem' }}>
                    <div className="grid">
                        {upcomingEvents.map((event, idx) => (
                            <div key={idx} className="card" data-aos="fade-up" style={{ padding: '3rem', borderLeft: `4px solid ${idx % 3 === 0 ? 'var(--primary)' : idx % 3 === 1 ? 'var(--secondary)' : 'var(--accent)'}`, transitionDelay: `${0.1 * (idx + 1)}s` }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                                    <div style={{ background: 'rgba(0, 242, 255, 0.05)', padding: '1rem', borderRadius: '15px' }}>
                                        {event.icon}
                                    </div>
                                    <span style={{ fontSize: '0.9rem', fontWeight: 600, background: 'rgba(0, 0, 0, 0.05)', padding: '0.4rem 1rem', borderRadius: '20px' }}>{event.type}</span>
                                </div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: 'var(--text-dark)' }}>{event.title}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Calendar size={16} /> {event.date}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <MapPin size={16} /> {event.location}
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>{event.description}</p>
                                <button className="btn btn-outline" style={{ width: '100%' }}>Register Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Events;
