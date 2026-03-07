import { useState } from 'react';
import { Home, Search, Compass, Users, Radio, Upload, User, MoreHorizontal } from 'lucide-react';
import './Sidebar.css';

const navItems = [
    { id: 'home', icon: Home, label: 'For You' },
    { id: 'explore', icon: Compass, label: 'Explore', active: true },
    { id: 'following', icon: Users, label: 'Following' },
    { id: 'live', icon: Radio, label: 'LIVE' },
    { id: 'upload', icon: Upload, label: 'Upload' },
    { id: 'profile', icon: User, label: 'Profile' },
];

export default function Sidebar() {
    const [active, setActive] = useState('explore');

    return (
        <aside className="sidebar">
            {/* Logo */}
            <a className="sidebar-logo" href="#">
                <div className="logo-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" fill="#010101" />
                    </svg>
                </div>
                <span className="logo-text">TikTok</span>
            </a>

            {/* Search */}
            <div className="sidebar-search">
                <Search size={15} className="search-icon" />
                <input type="text" placeholder="Search" />
            </div>

            {/* Nav */}
            <nav className="sidebar-nav">
                {navItems.map(({ id, icon: Icon, label }) => (
                    <button
                        key={id}
                        className={`sidebar-item ${active === id ? 'active' : ''}`}
                        onClick={() => setActive(id)}
                    >
                        <span className="sidebar-item-icon">
                            <Icon size={22} strokeWidth={active === id ? 2.5 : 1.8} />
                        </span>
                        {label}
                    </button>
                ))}
            </nav>

            <div className="sidebar-divider" />

            {/* Login */}
            <div className="sidebar-login-section">
                <p className="sidebar-login-hint">
                    Log in to follow creators, like videos, and view comments.
                </p>
                <button className="sidebar-login-btn">Log in</button>
            </div>

            <div className="sidebar-divider" />

            {/* Footer */}
            <footer className="sidebar-footer">
                <div>
                    <a href="#">Company</a> · <a href="#">Program</a>
                </div>
                <div>
                    <a href="#">Terms &amp; Policies</a>
                </div>
                <div className="footer-copy">© 2026 TikTok</div>
            </footer>
        </aside>
    );
}
