import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) setActiveDropdown(null);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 968) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === name ? null : name);
        }
    };

    return (
        <nav>
            <Link to="/" className="logo">
                <img src="/logo.png" alt="Sanju Wind Energy Logo" style={{ height: '80px', width: 'auto' }} />
            </Link>

            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <li onClick={closeMenu}><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li onClick={closeMenu}><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>

                <li className={`dropdown ${activeDropdown === 'services' ? 'mobile-active' : ''}`}>
                    <Link to="/service" onClick={(e) => toggleDropdown('services', e)}>
                        Service <ChevronDown size={12} strokeWidth={3} className={activeDropdown === 'services' ? 'rotate' : ''} />
                    </Link>
                    <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                        <li onClick={closeMenu}><Link to="/service">Installation & Maintenance</Link></li>
                        <li onClick={closeMenu}><Link to="/service">Blade Repair Work</Link></li>
                        <li onClick={closeMenu}><Link to="/service">Rope Access Work</Link></li>
                        <li onClick={closeMenu}><Link to="/service">HSE Safety Services</Link></li>
                    </ul>
                </li>

                <li onClick={closeMenu}><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
                <li onClick={closeMenu}><Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin Page</Link></li>
                
                <li className="nav-btn-mobile" onClick={closeMenu}>
                    <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
                </li>
            </ul>

            <Link to="/contact" className="btn btn-primary nav-btn-desktop" style={{ padding: '0.6rem 2rem', fontSize: '0.85rem' }}>
                Enquire Now
            </Link>
        </nav>
    );
};

export default Navbar;
