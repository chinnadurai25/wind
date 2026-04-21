import React, { useRef, useState, useEffect } from 'react';
import { Trash2, FileText, RefreshCw, Clock, Calendar } from 'lucide-react';
import '../styles/letterhead.css';

const AdminLetterhead = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const contentRef = useRef(null);
    const [bodyText, setBodyText] = useState('Type your letter here...');
    const [savedLetters, setSavedLetters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Dynamic API URL for production/VPS
    const API_BASE_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:5005/api' 
        : '/projects/wind/api';

    useEffect(() => {
        if (isAuthenticated) {
            fetchLetters();
        }
    }, [isAuthenticated]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        try {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setIsAuthenticated(true);
            } else {
                setLoginError(data.error || 'Login failed');
            }
        } catch (error) {
            setLoginError('Server connection error');
            console.error('Login error:', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    if (!isAuthenticated) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f0f2f5' }}>
                <div style={{ background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', width: '300px' }}>
                    <h2 style={{ textAlign: 'center', color: '#0B4C80', marginBottom: '20px' }}>Admin Login</h2>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} 
                            required 
                        />
                        {loginError && <p style={{ color: 'red', fontSize: '12px' }}>{loginError}</p>}
                        <button type="submit" className="btn btn-primary" style={{ cursor: 'pointer', background: '#0F9A2A' }}>Login</button>
                    </form>
                </div>
            </div>
        );
    }

    const fetchLetters = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;
        
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/letters`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.status === 401) {
                handleLogout();
                return;
            }
            const data = await response.json();
            console.log('Fetched letters:', data);
            setSavedLetters(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching letters:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleSave = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('token');
        try {
            const letterContent = document.querySelector('.letter-body').innerHTML;
            const footerPhone = document.querySelector('.footer-phone-info').innerHTML;
            const footerEmail = document.querySelector('.footer-email-info').innerHTML;
            const footerAddress = document.querySelector('.footer-address-info').innerHTML;
            const footerReg = document.querySelector('.footer-reg-info').innerHTML;

            const fullData = JSON.stringify({
                body: letterContent,
                phone: footerPhone,
                email: footerEmail,
                address: footerAddress,
                reg: footerReg
            });

            const response = await fetch(`${API_BASE_URL}/letters`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ content: fullData })
            });

            if (response.ok) {
                alert('Letter saved to Database!');
                fetchLetters();
            } else if (response.status === 401) {
                handleLogout();
            } else {
                alert('Failed to save letter.');
            }
        } catch (error) {
            console.error('Error saving letter:', error);
            alert('Failed to save letter. Check backend connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation(); // Prevent loading the letter when clicking delete
        if (!window.confirm('Are you sure you want to delete this draft?')) return;
        
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(`${API_BASE_URL}/letters/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.ok) {
                fetchLetters();
            } else if (response.status === 401) {
                handleLogout();
            } else {
                alert('Failed to delete letter.');
            }
        } catch (error) {
            console.error('Error deleting letter:', error);
            alert('Failed to delete letter.');
        }
    };

    const handleLoad = (content) => {
        if (!content) return;
        
        try {
            // Handle both string and object formats
            let data = typeof content === 'string' ? JSON.parse(content) : content;
            
            // If it's a double-stringified JSON, parse it again
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }

            const letterBody = document.querySelector('.letter-body');
            if (letterBody) {
                letterBody.innerHTML = data.body || (typeof data === 'string' ? data : '');
            }

            // Load footer fields
            if (data.phone && document.querySelector('.footer-phone-info')) {
                document.querySelector('.footer-phone-info').innerHTML = data.phone;
            }
            if (data.email && document.querySelector('.footer-email-info')) {
                document.querySelector('.footer-email-info').innerHTML = data.email;
            }
            if (data.address && document.querySelector('.footer-address-info')) {
                document.querySelector('.footer-address-info').innerHTML = data.address;
            }
            if (data.reg && document.querySelector('.footer-reg-info')) {
                document.querySelector('.footer-reg-info').innerHTML = data.reg;
            }
            
            // Fallbacks for older data structures
            if (data.contact) {
                const phoneElem = document.querySelector('.footer-phone-info');
                if (phoneElem) phoneElem.innerHTML = data.contact;
            }
        } catch (e) {
            console.error('Error loading letter:', e);
            const letterBody = document.querySelector('.letter-body');
            if (letterBody) {
                letterBody.innerHTML = typeof content === 'string' ? content : JSON.stringify(content);
            }
        }
    };

    return (
        <div className="admin-letterhead-page">
            <div className="toolbar no-print">
                <h2>Letter Editor</h2>
                <div className="toolbar-actions">
                    <button onClick={handleSave} className="btn btn-primary" disabled={isLoading}>
                        {isLoading ? 'Saving...' : 'Save Letter'}
                    </button>
                    <button onClick={handlePrint} className="btn btn-outline">Print Letter</button>
                    <button onClick={handleLogout} className="btn btn-outline" style={{ border: '1px solid #ff4d4f', color: '#ff4d4f' }}>Logout</button>
                </div>
            </div>

            <div className="saved-letters-toolbar no-print" style={{ 
                maxWidth: '850px', 
                margin: '0 auto 25px', 
                background: '#fff', 
                padding: '20px 30px', 
                borderRadius: '12px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                border: '1px solid #edf2f7'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #f7fafc', paddingBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FileText size={22} color="#0B4C80" />
                        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#1a202c', fontWeight: '700' }}>Saved Drafts</h3>
                    </div>
                    <button 
                        onClick={fetchLetters} 
                        className="btn-refresh" 
                        title="Refresh Drafts"
                        style={{ 
                            background: '#f8fafc', 
                            border: '1px solid #e2e8f0', 
                            borderRadius: '8px', 
                            padding: '8px', 
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.2s'
                        }}
                    >
                        <RefreshCw size={18} color="#4a5568" className={isLoading ? 'spin' : ''} />
                    </button>
                </div>

                {isLoading ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
                        <RefreshCw size={24} color="#0B4C80" className="spin" />
                        <span style={{ marginLeft: '12px', color: '#4a5568', fontWeight: '500' }}>Fetching your drafts...</span>
                    </div>
                ) : savedLetters.length > 0 ? (
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
                        gap: '15px',
                        marginTop: '10px' 
                    }}>
                        {savedLetters.map((letter, index) => (
                            <div 
                                key={letter._id || index} 
                                className="draft-card"
                                onClick={() => handleLoad(letter.content)}
                                style={{ 
                                    background: '#fff', 
                                    border: '1px solid #e2e8f0', 
                                    borderRadius: '10px', 
                                    padding: '12px 15px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4a5568', fontSize: '0.85rem' }}>
                                    <Calendar size={14} />
                                    <span>{new Date(letter.dateSaved).toLocaleDateString()}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#718096', fontSize: '0.8rem', fontWeight: '500' }}>
                                    <Clock size={14} />
                                    <span>{new Date(letter.dateSaved).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                                
                                <button 
                                    onClick={(e) => handleDelete(letter._id, e)}
                                    className="btn-delete-draft"
                                    title="Delete Draft"
                                    style={{ 
                                        position: 'absolute', 
                                        top: '10px',
                                        right: '10px',
                                        background: '#fff1f0',
                                        border: 'none',
                                        borderRadius: '6px',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    <Trash2 size={16} color="#ff4d4f" />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '40px 0', background: '#f8fafc', borderRadius: '10px', border: '2px dashed #e2e8f0' }}>
                        <FileText size={40} color="#cbd5e0" style={{ marginBottom: '10px' }} />
                        <p style={{ color: '#718096', margin: 0, fontWeight: '500' }}>No drafts found yet.</p>
                        <p style={{ color: '#a0aec0', fontSize: '0.85rem', marginTop: '5px' }}>Letters you save will appear here for easy access.</p>
                    </div>
                )}
            </div>

            <div className="letter-container">
                <div className="letterhead" ref={contentRef}>
                    {/* Header Top Shapes */}
                    <div className="header-shapes">
                        <svg viewBox="0 0 400 150" className="top-left-shape" preserveAspectRatio="none">
                            {/* Blue Shape */}
                            <path d="M0 0 L250 0 L180 80 L0 80 Z" fill="#0B4C80" />
                            {/* Green Shape */}
                            <path d="M0 0 L150 0 L250 120 L0 120 Z" fill="#0F9A2A" opacity="0.9" />
                            {/* Accent Blue */}
                            <path d="M0 80 L80 80 L0 130 Z" fill="#0B4C80" />
                        </svg>
                    </div>

                    {/* Logo Section */}
                    <div className="header-content">
                        <div className="logo-area">
                            <h1 className="logo-swe">SWE</h1>
                            <div className="logo-text-title">SANJU WIND ENERGY</div>
                            <div className="logo-text-sub">SERVICES</div>
                        </div>
                    </div>

                    {/* Watermark Background */}
                    <div className="watermark">
                        <img src="/logo.png" alt="SWE Watermark" />
                    </div>

                    {/* Editable Content */}
                    <div 
                        className="letter-body" 
                        contentEditable="true"
                        onBlur={(e) => setBodyText(e.target.innerHTML)}
                        suppressContentEditableWarning={true}
                    >
                        {/* Initial Content Placeholder */}
                        <p>Date: {new Date().toLocaleDateString()}</p>
                        <br/>
                        <p>To,</p>
                        <p>[Recipient Name]</p>
                        <p>[Company/Address]</p>
                        <br/>
                        <p><strong>Subject: [Your Subject Here]</strong></p>
                        <br/>
                        <p>Dear Sir/Madam,</p>
                        <p>Type your letter content here... You can edit this text directly.</p>
                        <br/>
                        <br/>
                        <p>Thanks & Regards,</p>
                        <p><strong>For Sanju Wind Energy Services</strong></p>
                        <br/><br/>
                        <p>Authorized Signatory</p>
                    </div>

                    {/* Footer Content */}
                    <div className="letter-footer">
                        <div className="footer-details-bar">
                            <div className="footer-row">
                                <div className="footer-item">
                                    <span className="icon">📞</span>
                                    <span className="footer-phone-info" contentEditable="true" suppressContentEditableWarning={true}>
                                        6352109398, 9524844917
                                    </span>
                                </div>
                                <div className="footer-item">
                                    <span className="icon">✉️</span>
                                    <span className="footer-email-info" contentEditable="true" suppressContentEditableWarning={true}>
                                        anandvino29@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div className="footer-row">
                                <div className="footer-item">
                                    <span className="icon">📍</span>
                                    <span className="footer-address-info" contentEditable="true" suppressContentEditableWarning={true}>
                                        81/2, Gandhi Bazar, Puliankudi Dist. Tenkasi (Tamilnadu)-627855
                                    </span>
                                </div>
                            </div>
                            <div className="footer-bottom-info footer-reg-info" contentEditable="true" suppressContentEditableWarning={true}>
                                <span>GSTIN : 33BGLPA9236L1Z7</span>
                                <span>MSME No.: UDYAM-TN-37-0043125</span>
                            </div>
                        </div>
                        {/* Footer Bottom Bar */}
                        <div className="footer-bar">
                            <div className="bar-green"></div>
                            <div className="bar-blue"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLetterhead;
