import { useState, useEffect } from 'react';
import { videos } from '../data/videos';
import VideoPost from './VideoPost';
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react';
import './VideoFeed.css';

export default function VideoFeed({ startIndex = 0, onClose, onFinish, onWatchUpdate }) {
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const [watchTimes, setWatchTimes] = useState({});

    // Track time spent on the current video, push updates to parent
    useEffect(() => {
        const videoId = videos[activeIndex].id;
        const interval = setInterval(() => {
            setWatchTimes(prev => {
                const updated = { ...prev, [videoId]: (prev[videoId] || 0) + 1 };
                if (onWatchUpdate) onWatchUpdate(updated);
                return updated;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleNext = () => {
        if (activeIndex < videos.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            // Reached the end, trigger activity center transition
            if (onFinish) onFinish(watchTimes);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };

    return (
        <div className="video-feed-container">
            {/* Background blur/dark area */}
            <div className="video-feed-bg" />

            {/* Top-left close button */}
            <button className="video-feed-close" onClick={onClose} aria-label="Close">
                <ArrowLeft size={24} color="white" strokeWidth={2.5} />
            </button>

            {/* Up/Down Navigation Controls */}
            <div className="feed-nav-controls">
                <button
                    className="feed-nav-btn"
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                >
                    <ChevronUp size={24} color="white" />
                </button>
                <button
                    className="feed-nav-btn"
                    onClick={handleNext}
                >
                    <ChevronDown size={24} color="white" />
                </button>
            </div>

            {/* Currently Active Post */}
            <div className="feed-post-wrapper">
                <VideoPost video={videos[activeIndex]} isActive={true} />
            </div>
        </div>
    );
}
