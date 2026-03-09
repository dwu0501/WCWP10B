import { useState, useRef } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ExplorePage from './components/ExplorePage';
import VideoFeed from './components/VideoFeed';
import ActivityCenter from './components/ActivityCenter';
import WorksCited from './components/WorksCited';

function App() {
  const [feedIndex, setFeedIndex] = useState(null);
  const [activeView, setActiveView] = useState('explore');
  const [topicWatchTimes, setTopicWatchTimes] = useState({});

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

  return (
    <div className="app-shell">
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
      )}
    </div>
  );
}

export default App;
