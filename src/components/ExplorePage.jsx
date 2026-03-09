import { useState } from 'react';
import { Heart, Play, Monitor, Smartphone } from 'lucide-react';
import { videos } from '../data/videos';
import './ExplorePage.css';

const CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'funny', label: 'Funny' },
    { id: 'news', label: 'News' },
    { id: 'sports', label: 'Sports' }
];

export default function ExplorePage({ onVideoClick }) {
    const [activeTab, setActiveTab] = useState('all');

    const exploreVideos = videos.filter(v => v.id !== 10);
    const filteredVideos = activeTab === 'all'
        ? exploreVideos
        : exploreVideos.filter(v => v.category === activeTab);

    return (
        <div className="explore-page">
            {/* ── Tab Bar ──────────────────────────── */}
            <div className="explore-tabs-bar">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.id}
                        className={`explore-tab ${activeTab === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(cat.id)}
                    >
                        {cat.label}
                    </button>
                ))}

                <div className="explore-tabs-spacer" />

                <div className="explore-tabs-icons">
                    <button className="top-icon-btn" aria-label="Monitor view">
                        <Monitor size={18} />
                    </button>
                    <button className="top-icon-btn" aria-label="Mobile view">
                        <Smartphone size={18} />
                    </button>
                </div>

                <button className="explore-login-btn">Log in</button>
            </div>

            {/* ── Grid ─────────────────────────────── */}
            <div className="explore-content">
                <div className="explore-grid">
                    {filteredVideos.map((video, index) => (
                        <VideoCard
                            key={video.id}
                            video={video}
                            onClick={() => onVideoClick?.(videos.indexOf(video))}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function VideoCard({ video, onClick }) {
    return (
        <div className="video-card" onClick={onClick}>
            {/* Thumbnail */}
            <div className="video-card-thumb" style={{ overflow: 'hidden' }}>
                <video
                    className="video-card-bg"
                    src={`${video.videoSrc}#t=0.5`}
                    muted
                    playsInline
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'inherit' }}
                />
                {/* Hover overlay with play button */}
                <div className="video-card-overlay">
                    <div className="play-icon-circle">
                        <Play size={18} fill="white" color="white" />
                    </div>
                </div>
                {/* Like count */}
                <div className="video-card-likes">
                    <Heart size={13} fill="white" color="white" />
                    {video.likes}
                </div>
            </div>

            {/* Username */}
            <div className="video-card-meta">
                <div className="video-card-author">
                    <div
                        className="mini-avatar"
                        style={{ background: video.avatarColor }}
                    >
                        {video.username[1]?.toUpperCase()}
                    </div>
                    <span className="video-card-username">{video.username}</span>
                </div>
            </div>
        </div>
    );
}
