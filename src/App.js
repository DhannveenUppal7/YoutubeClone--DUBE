import { useState } from 'react';
import youtube from './apis/youtube';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

function App() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    }).then((response) => {
      setVideos(response.data.items);

    });
    setselectedVideo(null);

  }

  const onVideoSelect = (video) => {
    setselectedVideo(video);
  }

  if(!selectedVideo){
    return (
      <>
        <div className="ui container">
          <SearchBar onSubmit={onTermSubmit} />
          <VideoDetail video={selectedVideo} />
          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
        
      </>
    );
  }

  return (
    
    <div className="ui container">


      <SearchBar onSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />

          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
