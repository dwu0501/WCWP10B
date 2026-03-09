import { useState, useRef } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ExplorePage from './components/ExplorePage';
import VideoFeed from './components/VideoFeed';
<<<<<<< HEAD
import ActivityModal from './components/ActivityModal';
import LiveModal from './components/LiveModal';
=======
import ActivityCenter from './components/ActivityCenter';
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2
import WorksCited from './components/WorksCited';

function App() {
  const [feedIndex, setFeedIndex] = useState(null);
<<<<<<< HEAD
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const [isWorksCitedOpen, setIsWorksCitedOpen] = useState(false);
  const [watchData, setWatchData] = useState(null);
=======
  const [activeView, setActiveView] = useState('explore');
  const [topicWatchTimes, setTopicWatchTimes] = useState({});
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2

  const openFeed = (index) => {
    setFeedIndex(index);
    setActiveView('home');
  };

  const closeFeed = () => {
    setFeedIndex(null);
    setActiveView('explore');
  };

  const handleVideoChange = (topic, timeSpentMs) => {
    setTopicWatchTimes(prev => ({
      ...prev,
      [topic]: (prev[topic] || 0) + timeSpentMs
    }));
  };

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
<<<<<<< HEAD
      <Sidebar
        onOpenActivityCenter={() => setIsActivityOpen(true)}
        onOpenLiveCenter={() => setIsLiveOpen(true)}
        onOpenWorksCited={() => setIsWorksCitedOpen(true)}
      />
      {feedIndex === null ? (
        <ExplorePage onVideoClick={openFeed} />
      ) : (
        <VideoFeed startIndex={feedIndex} onClose={closeFeed} onFinish={handleFinishFeed} onWatchUpdate={handleWatchUpdate} />
=======
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {activeView === 'explore' && <ExplorePage onVideoClick={openFeed} />}

      {activeView === 'home' && (
        <VideoFeed
          startIndex={feedIndex || 0}
          onClose={closeFeed}
          onVideoChange={handleVideoChange}
          onShowActivity={() => setActiveView('activityCenter')}
        />
      )}

      {activeView === 'activityCenter' && (
        <ActivityCenter watchTimes={topicWatchTimes} />
      )}

      {activeView === 'worksCited' && (
        <WorksCited />
>>>>>>> 50055af094136b67f9795f5a710ca3e2083749c2
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
