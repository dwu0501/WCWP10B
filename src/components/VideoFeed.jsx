import { useState } from 'react';
import { videos } from '../data/videos';
import VideoPost from './VideoPost';
import { ArrowLeft, ChevronUp, ChevronDown } from 'lucide-react';
import './VideoFeed.css';

export default function VideoFeed({ startIndex = 0, onClose }) {
    const [activeIndex, setActiveIndex] = useState(startIndex);

    // We want individual posts to fill the screen right-to-left. 
    // VideoFeed manages traversing the array.

    const handleNext = () => {
        if (activeIndex < videos.length - 1) setActiveIndex(activeIndex + 1);
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
                    disabled={activeIndex === videos.length - 1}
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
