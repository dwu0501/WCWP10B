<<<<<<< HEAD
import { useState, useEffect } from 'react';
=======
import { useState, useEffect, useRef, useCallback } from 'react';
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2
import { videos } from '../data/videos';
import VideoPost from './VideoPost';
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react';
import './VideoFeed.css';

<<<<<<< HEAD
export default function VideoFeed({ startIndex = 0, onClose, onFinish, onWatchUpdate }) {
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const [watchTimes, setWatchTimes] = useState({});
=======
export default function VideoFeed({ startIndex = 0, onClose, onVideoChange, onShowActivity }) {
    const [activeIndex, setActiveIndex] = useState(startIndex);
    const startViewTime = useRef(Date.now());
    const wheelTimeout = useRef(null);

    // Effect to handle time tracking per video category
    useEffect(() => {
        // Reset start timer when active index changes
        startViewTime.current = Date.now();

        return () => {
            // When we advance to the NEXT index (or unmount), calculate how long we spent on the current one
            const timeSpentMs = Date.now() - startViewTime.current;
            const currentVideo = videos[activeIndex];

            if (currentVideo && currentVideo.category && onVideoChange) {
                // Pass the topic and timeSpent back up to App.jsx global state
                onVideoChange(currentVideo.category, timeSpentMs);
            }
        };
    }, [activeIndex, onVideoChange]);
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2

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

<<<<<<< HEAD
    const handleNext = () => {
        if (activeIndex < videos.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            // Reached the end, trigger activity center transition
            if (onFinish) onFinish(watchTimes);
        }
    };
=======
    const handleNext = useCallback(() => {
        if (activeIndex === 10 && onShowActivity) {
            onShowActivity();
        } else if (activeIndex < videos.length - 1) {
            setActiveIndex(prev => prev + 1);
        }
    }, [activeIndex, onShowActivity]);
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2

    const handlePrev = useCallback(() => {
        if (activeIndex > 0) setActiveIndex(prev => prev - 1);
    }, [activeIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') handleNext();
            if (e.key === 'ArrowUp') handlePrev();
        };

        const handleWheel = (e) => {
            // Debounce wheel scroll
            if (wheelTimeout.current) return;
            if (e.deltaY > 50) {
                handleNext();
                wheelTimeout.current = setTimeout(() => wheelTimeout.current = null, 800);
            } else if (e.deltaY < -50) {
                handlePrev();
                wheelTimeout.current = setTimeout(() => wheelTimeout.current = null, 800);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('wheel', handleWheel);
            if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
        };
    }, [handleNext, handlePrev]);

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
