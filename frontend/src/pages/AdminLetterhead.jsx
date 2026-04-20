import React, { useRef, useState, useEffect } from 'react';
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
        : '/wind/api';

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
        try {
            const response = await fetch(`${API_BASE_URL}/letters`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.status === 401) {
                handleLogout();
                return;
            }
            const data = await response.json();
            setSavedLetters(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching letters:', error);
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
            const footerContact = document.querySelector('.footer-contact-info').innerHTML;
            const footerAddress = document.querySelector('.footer-address-info').innerHTML;
            const footerReg = document.querySelector('.footer-reg-info').innerHTML;

            const fullData = JSON.stringify({
                body: letterContent,
                contact: footerContact,
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

    const handleLoad = (content) => {
        try {
            const data = JSON.parse(content);
            if (data.body) {
                document.querySelector('.letter-body').innerHTML = data.body;
                if (data.contact) document.querySelector('.footer-contact-info').innerHTML = data.contact;
                if (data.address) document.querySelector('.footer-address-info').innerHTML = data.address;
                if (data.reg) document.querySelector('.footer-reg-info').innerHTML = data.reg;
            } else {
                document.querySelector('.letter-body').innerHTML = content;
            }
        } catch (e) {
            const letterBody = document.querySelector('.letter-body');
            if (letterBody) {
                letterBody.innerHTML = content;
            }
        }
    };

    return (
        <div className="admin-letterhead-page">
            <div className="toolbar no-print">
                <h2>Letter Editor</h2>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button onClick={handleSave} className="btn btn-primary" disabled={isLoading}>
                        {isLoading ? 'Saving...' : 'Save Letter'}
                    </button>
                    <button onClick={handlePrint} className="btn btn-outline">Print Letter</button>
                    <button onClick={handleLogout} className="btn btn-outline" style={{ border: '1px solid #ff4d4f', color: '#ff4d4f' }}>Logout</button>
                </div>
            </div>

            {savedLetters.length > 0 && (
                <div className="saved-letters-toolbar no-print" style={{ maxWidth: '800px', margin: '0 auto 20px', background: '#fff', padding: '15px 30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                    <h3>Saved Drafts</h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                        {savedLetters.map((letter, index) => (
                            <button key={letter._id || index} onClick={() => handleLoad(letter.content)} className="btn btn-outline" style={{ padding: '5px 15px', fontSize: '14px' }}>
                                Draft {new Date(letter.dateSaved).toLocaleDateString()} {new Date(letter.dateSaved).toLocaleTimeString()}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="letter-container">
                <div className="letterhead" ref={contentRef}>
                    {/* Header Top Shapes */}
                    <div className="header-shapes">
                        <svg viewBox="0 0 200 100" className="top-left-shape">
                            <polygon points="0,0 200,0 120,60 0,60" fill="#0B4C80" />
                            <polygon points="0,0 100,0 180,50 0,100" fill="#0F9A2A" />
                            <polygon points="0,60 80,60 0,100" fill="#0B4C80" />
                        </svg>
                    </div>

                    {/* Logo Section */}
                    <div className="header-content">
                        <div className="logo-area">
                            <h1 className="logo-swe">
                                <span className="s">S</span><span className="w">W</span><span className="e">E</span>
                            </h1>
                            <div className="logo-text-title">SANJU WIND ENERGY</div>
                            <div className="logo-text-sub">SERVICES</div>
                        </div>
                    </div>

                    {/* Watermark Background */}
                    <div className="watermark">
                        <div className="watermark-swe">
                            <span className="s">S</span><span className="w">W</span><span className="e">E</span>
                        </div>
                        <div className="watermark-title">SANJU WIND ENERGY</div>
                        <div className="watermark-sub">SERVICES</div>
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
                        <div className="footer-details">
                            <div className="footer-contact footer-contact-info" contentEditable="true" suppressContentEditableWarning={true}>
                                <span>📞 6352109398, 9524844917</span>
                                <span>✉️ anandvino29@gmail.com</span>
                            </div>
                            <div className="footer-address footer-address-info" contentEditable="true" suppressContentEditableWarning={true}>
                                📍 81/2, Gandhi Bazar, Puliankudi Dist. Tenkasi (Tamilnadu)-627855
                            </div>
                            <div className="footer-reg footer-reg-info" contentEditable="true" suppressContentEditableWarning={true}>
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
