import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Music2, CheckCircle2, Code, Link2 } from 'lucide-react';
import './VideoPost.css';

export default function VideoPost({ video, isActive }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
        <div className="two-col-post">
            {/* LEFT: Video Player */}
            <div className="post-video-section">
                <div className="video-blur-bg" style={{ background: video.gradient }} />

                {video.videoSrc ? (
                    <video
                        src={video.videoSrc}
                        className="main-video-player"
                        controls
                        autoPlay
                        loop
                        muted={false}
                    />
                ) : (
                    <div className="main-video-player placeholder-player" style={{ background: video.gradient }}>
                        <div className="play-indicator">
                            <PlayIcon />
                        </div>
                    </div>
                )}
            </div>

            {/* RIGHT: Info & Comments Panel */}
            <div className="post-info-section">
                {/* Header (User Info) */}
                <div className="info-header">
                    <div className="creator-profile">
                        <div className="creator-avatar" style={{ background: video.avatarColor }}>
                            {video.username[1].toUpperCase()}
                        </div>
                        <div className="creator-details">
                            <span className="creator-username">
                                {video.username.replace('@', '')} <CheckCircle2 size={16} fill="#20D5EC" color="white" />
                            </span>
                            <span className="creator-name">{video.displayName} · 11-2</span>
                        </div>
                    </div>
                    <button className="follow-btn-solid">Follow</button>
                </div>

                {/* Caption / Description */}
                <div className="info-caption">
                    <p>{video.description}</p>
                    <div className="original-sound">
                        <Music2 size={14} /> original sound - {video.displayName}
                    </div>
                </div>

                {/* Stats Row */}
                <div className="info-stats-row">
                    <div className="stats-group">
                        <button className={`stat-btn ${liked ? 'active' : ''}`} onClick={() => setLiked(!liked)}>
                            <div className="stat-icon-bg"><Heart size={20} fill={liked ? '#fe2c55' : '#161823'} color="rgba(0,0,0,0)" /></div>
                            <span>{liked ? addK(video.likes) : video.likes}</span>
                        </button>
                        <button className="stat-btn">
                            <div className="stat-icon-bg"><MessageCircle size={20} fill="#161823" color="rgba(0,0,0,0)" /></div>
                            <span>{video.comments}</span>
                        </button>
                        <button className={`stat-btn ${saved ? 'active-yellow' : ''}`} onClick={() => setSaved(!saved)}>
                            <div className="stat-icon-bg"><Bookmark size={20} fill={saved ? '#ffe234' : '#161823'} color="rgba(0,0,0,0)" /></div>
                            <span>{video.shares}</span> {/* Saving as shares to match screenshot */}
                        </button>
                    </div>

                    <div className="share-group">
                        <div className="share-icon"><Share2 size={16} color="white" fill="#fe2c55" /></div>
                        <div className="share-icon twitter"><Share2 size={16} color="white" fill="#1da1f2" /></div>
                        <div className="share-icon copy"><Link2 size={16} color="black" /></div>
                    </div>
                </div>

                {/* Copy Link Input */}
                <div className="copy-link-box">
                    <input type="text" readOnly value={`https://www.tiktok.com/@${video.username.replace('@', '')}/video/7062479...`} />
                    <button>Copy link</button>
                </div>

                {/* Tabs */}
                <div className="comments-tabs">
                    <button className="tab-active">Comments ({video.comments})</button>
                    <button>Creator videos</button>
                </div>

                {/* Comments List (Empty if indicated) */}
                <div className="comments-list">
                    {video.emptyComments ? (
                        <div className="empty-comments">
                            <p>No comments yet.</p>
                            <p className="empty-sub">Be the first to comment.</p>
                        </div>
                    ) : (
                        <div className="comment-thread">
                            {/* Dummy mock comment */}
                            <div className="comment-avatar" style={{ background: '#f48fb1' }}>A</div>
                            <div className="comment-content">
                                <span className="comment-user">Ash ♥</span>
                                <p className="comment-text">"Are you scrolling instead of sleeping again?"</p>
                                <div className="comment-meta">
                                    <span>2025-10-25</span>
                                    <span>Reply</span>
                                </div>
                            </div>
                            <div className="comment-like">
                                <Heart size={16} color="#8a8b91" />
                                <span>164.1K</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Login to comment Footer */}
                <div className="comment-footer">
                    <button className="login-comment-btn">Log in to comment</button>
                </div>
            </div>
        </div>
    );
}

function PlayIcon() {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="28" fill="rgba(0,0,0,0.4)" backdropFilter="blur(8px)" />
            <path d="M40 30L24 40V20L40 30Z" fill="white" />
        </svg>
    );
}

function addK(str) {
    return str;
}
