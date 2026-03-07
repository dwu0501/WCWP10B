import './PhoneFrame.css';
import TopNav from './TopNav';
import VideoFeed from './VideoFeed';
import BottomNav from './BottomNav';

export default function PhoneFrame({ startIndex = 0, onClose }) {
    return (
        <div className="phone-frame">
            <div className="phone-screen">
                <TopNav onBack={onClose} />
                <VideoFeed startIndex={startIndex} />
                <BottomNav />
            </div>
        </div>
    );
}
