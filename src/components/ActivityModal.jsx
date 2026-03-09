import { X, Clock } from 'lucide-react';
import { videos } from '../data/videos';
import './ActivityModal.css';

export default function ActivityModal({ onClose, watchData, onOpenLive }) {
    const categoryTimes = { funny: 0, news: 0, sports: 0 };

    if (watchData && Object.keys(watchData).length > 0) {
        for (const [id, time] of Object.entries(watchData)) {
            const vid = videos.find(v => v.id.toString() === id.toString());
            if (vid && vid.category !== 'all') {
                categoryTimes[vid.category] = (categoryTimes[vid.category] || 0) + time;
            }
        }
    }

    const categoryLabels = {
        funny: { label: 'Comedy & Trending', emoji: '😂' },
        news: { label: 'Doomscrolling & Current Events', emoji: '📰' },
        sports: { label: 'Mental Health & Anxiety', emoji: '🏆' },
    };

    const totalTime = Object.values(categoryTimes).reduce((a, b) => a + b, 0);

    return (
        <div className="activity-modal-overlay" onClick={onClose}>
            <div className="activity-modal-content" onClick={e => e.stopPropagation()}>
                <button className="activity-modal-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="activity-modal-header">
                    <h2>Activity Center: Gen Z Mental Health</h2>
                    <p className="subtitle">Exploring the underlying engines of our scroll.</p>
                </div>

                <div className="activity-modal-body">
                    <div className="magic-mirror-block">
                        <h2 className="magic-title">Your "Magic Mirror"</h2>
                        <div className="magic-quote">
                            "What really traps me in TikTok is the content tailored to the niche I like... non-actions affect your FYP. These include factors like the time a user spends on a video which is the implicit body language that the algorithm learns from."
                        </div>
                    </div>

                    <div className="algorithm-analysis-block">
                        <h3 className="alg-title">Algorithm Analysis</h3>
                        <p className="alg-subtitle">Watch some videos to generate your profile.</p>

                        <div className="category-scores-grid">
                            {Object.entries(categoryLabels).map(([cat, { label, emoji }]) => {
                                const time = categoryTimes[cat] || 0;
                                const pct = totalTime > 0 ? Math.round((time / totalTime) * 100) : 0;
                                return (
                                    <div key={cat} className="category-score-card">
                                        <div className="cat-emoji">{emoji}</div>
                                        <div className="cat-label">{label}</div>
                                        <div className="cat-time">{time}s watched</div>
                                        <div className="cat-bar-bg">
                                            <div
                                                className="cat-bar-fill"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <div className="cat-pct">{pct}%</div>
                                    </div>
                                );
                            })}
                        </div>

                        {watchData && Object.keys(watchData).length > 0 && (
                            <div className="stats-list-container">
                                <h4 style={{ color: '#fff', marginBottom: 10 }}><Clock size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: 4 }} /> Implicit Body Language Log:</h4>
                                <ul className="stats-list">
                                    {Object.entries(watchData).map(([id, time]) => {
                                        const videoInfo = videos.find(v => v.id.toString() === id.toString());
                                        return (
                                            <li key={id}>
                                                <strong>{videoInfo ? videoInfo.displayName : `Video ${id}`}</strong>: {time} seconds
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="redirect-live-section">
                        <p>Want to discuss this further?</p>
                        <button
                            className="activity-btn"
                            style={{ marginTop: 10, alignSelf: 'center' }}
                            onClick={onOpenLive}
                        >
                            Join the LIVE Discussion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
