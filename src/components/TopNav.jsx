import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './TopNav.css';

export default function TopNav({ onBack }) {
    const [active, setActive] = useState('for-you');

    return (
        <nav className="top-nav">
            <div className="top-nav-inner">
                {onBack && (
                    <button className="top-nav-back-btn" onClick={onBack} aria-label="Go back">
                        <ArrowLeft size={28} color="white" strokeWidth={2.5} />
                    </button>
                )}

                <button
                    className={`nav-tab ${active === 'following' ? 'active' : ''}`}
                    onClick={() => setActive('following')}
                >
                    Following
                </button>
                <div className="nav-divider" />
                <button
                    className={`nav-tab ${active === 'for-you' ? 'active' : ''}`}
                    onClick={() => setActive('for-you')}
                >
                    For You
                </button>
            </div>
        </nav>
    );
}
