import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ExplorePage from './components/ExplorePage';
import VideoFeed from './components/VideoFeed';

function App() {
  const [feedIndex, setFeedIndex] = useState(null);

  const openFeed = (index) => setFeedIndex(index);
  const closeFeed = () => setFeedIndex(null);

  return (
    <div className="app-shell">
      <Sidebar />
      {feedIndex === null ? (
        <ExplorePage onVideoClick={openFeed} />
      ) : (
        <VideoFeed startIndex={feedIndex} onClose={closeFeed} />
      )}
    </div>
  );
}

export default App;
