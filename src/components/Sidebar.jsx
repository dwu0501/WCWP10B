import { useState } from 'react';
import { Home, Search, Compass, Users, Upload, User, MoreHorizontal } from 'lucide-react';
import './Sidebar.css';

function CustomLiveIcon({ size, strokeWidth }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
            <polyline points="17 2 12 7 7 2"></polyline>
            <line x1="8" y1="16" x2="8" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="10"></line>
            <line x1="16" y1="16" x2="16" y2="14"></line>
        </svg>
    );
}

const navItems = [
    { id: 'home', icon: Home, label: 'For You' },
    { id: 'explore', icon: Compass, label: 'Explore' },
    { id: 'following', icon: Users, label: 'Following' },
<<<<<<< HEAD
    { id: 'live', icon: CustomLiveIcon, label: 'LIVE' },
    { id: 'upload', icon: Upload, label: 'Upload' },
    { id: 'profile', icon: User, label: 'Profile' },
];

export default function Sidebar({ onOpenActivityCenter, onOpenLiveCenter, onOpenWorksCited }) {
=======
    { id: 'worksCited', icon: Radio, label: 'Works Cited' },
    { id: 'activityCenter', icon: Upload, label: 'Activity Center' },
    { id: 'profile', icon: User, label: 'Profile' },
];

export default function Sidebar({ activeView, setActiveView }) {
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2
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
<<<<<<< HEAD
                        className={`sidebar-item ${active === id ? 'active' : ''}`}
                        onClick={() => {
                            setActive(id);
                            if (id === 'live') onOpenLiveCenter();
                        }}
=======
                        className={`sidebar-item ${activeView === id ? 'active' : ''}`}
                        onClick={() => setActiveView(id)}
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2
                    >
                        <span className="sidebar-item-icon">
                            <Icon size={22} strokeWidth={activeView === id ? 2.5 : 1.8} />
                        </span>
                        {label}
                    </button>
                ))}

                <button
                    className="sidebar-item"
                    onClick={() => {
                        setActive('activity');
                        onOpenActivityCenter();
                    }}
                    style={{ marginTop: 8 }}
                >
                    <span className="sidebar-item-icon">
                        <Upload size={22} color="#fe2c55" strokeWidth={2.5} />
                    </span>
                    <span style={{ fontWeight: 700, color: '#fe2c55' }}>Activity Center</span>
                </button>
            </nav>

            <div className="sidebar-divider" />

            {/* Gen Z Mental Health / LIVE Section */}
            <div className="sidebar-live-section" id="sidebar-live-section">
                <div className="activity-live-badge">LIVE Now</div>
                <h4 className="activity-title">Gen Z Mental Health & Anxiety</h4>
                <p className="activity-desc">
                    Around 50% of Gen Z-ers experience some sort of anxiety driven by economic instability and future uncertainty. Find out more.
                </p>
                <div className="activity-question-box">
                    <p className="activity-q-label">LIVE Discussion Topic:</p>
                    <p className="activity-question">"What conditions cause a person to be trapped on the internet?"</p>
                </div>
                <button className="activity-btn" onClick={onOpenLiveCenter}>Join LIVE Discussion</button>
            </div>

            <div className="sidebar-divider" />

            {/* Login */}
            <div className="sidebar-login-section">
                <p className="sidebar-login-hint">
                    Log in to follow creators, like videos, and view comments.
                </p>
                <button className="sidebar-login-btn">Log in</button>
            </div>

            <div className="sidebar-divider" />

            {/* Works Cited Section */}
            <div className="sidebar-works-cited">
                <div className="sidebar-item works-cited-btn" onClick={onOpenWorksCited} style={{ cursor: 'pointer' }}>
                    <span className="sidebar-item-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="2" />
                            <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
                            <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
                            <path d="M20.07 4.93a10 10 0 0 1 0 14.14" />
                            <path d="M3.93 19.07a10 10 0 0 1 0-14.14" />
                        </svg>
                    </span>
                    Works Cited
                </div>
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
