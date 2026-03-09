import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ExplorePage from './components/ExplorePage';
import VideoFeed from './components/VideoFeed';
import ActivityModal from './components/ActivityModal';
import LiveModal from './components/LiveModal';
import WorksCited from './components/WorksCited';

function App() {
  const [feedIndex, setFeedIndex] = useState(null);
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isWorksCitedOpen, setIsWorksCitedOpen] = useState(false);
  const [watchData, setWatchData] = useState(null);

  const openFeed = (index) => setFeedIndex(index);
  const closeFeed = () => setFeedIndex(null);

  const handleFinishFeed = (times) => {
    setWatchData(times);
    setFeedIndex(null);
    setIsActivityOpen(true);
  };

  const handleWatchUpdate = (times) => {
    setWatchData(times);
  };

  return (
    <div className="app-shell">
      <Sidebar
        onOpenActivityCenter={() => setIsActivityOpen(true)}
        onOpenLiveCenter={() => setIsLiveOpen(true)}
        onOpenWorksCited={() => setIsWorksCitedOpen(true)}
      />
      {feedIndex === null ? (
        <ExplorePage onVideoClick={openFeed} />
      ) : (
        <VideoFeed startIndex={feedIndex} onClose={closeFeed} onFinish={handleFinishFeed} onWatchUpdate={handleWatchUpdate} />
      )}

      {isActivityOpen && (
        <ActivityModal
          watchData={watchData}
          onClose={() => setIsActivityOpen(false)}
          onOpenLive={() => {
            setIsActivityOpen(false);
            setIsLiveOpen(true);
          }}
        />
      )}
      {isLiveOpen && <LiveModal onClose={() => setIsLiveOpen(false)} />}
      {isWorksCitedOpen && <WorksCited onClose={() => setIsWorksCitedOpen(false)} />}
    </div>
  );
}

export default App;
