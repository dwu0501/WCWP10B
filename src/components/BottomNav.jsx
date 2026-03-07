import { useState } from 'react';
import { Home, Search, Plus, MessageCircle, User } from 'lucide-react';
import './BottomNav.css';

const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'discover', icon: Search, label: 'Discover' },
    { id: 'add', icon: null, label: '' },
    { id: 'inbox', icon: MessageCircle, label: 'Inbox' },
    { id: 'profile', icon: User, label: 'Profile' },
];

export default function BottomNav() {
    const [active, setActive] = useState('home');

    return (
        <nav className="bottom-nav">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`bottom-tab ${tab.id === 'add' ? 'add-tab' : ''} ${active === tab.id ? 'active' : ''}`}
                    onClick={() => tab.id !== 'add' && setActive(tab.id)}
                    aria-label={tab.label || 'Create'}
                >
                    {tab.id === 'add' ? (
                        <span className="add-btn">
                            <span className="add-btn-inner">
                                <Plus size={20} strokeWidth={3} color="#fff" />
                            </span>
                        </span>
                    ) : (
                        <>
                            <tab.icon size={24} strokeWidth={active === tab.id ? 2.5 : 1.8} />
                            <span className="tab-label">{tab.label}</span>
                        </>
                    )}
                </button>
            ))}
        </nav>
    );
}
