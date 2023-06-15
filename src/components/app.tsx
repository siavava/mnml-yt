import React, { useCallback, useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
import debounce from '../modules/debounce';

// import our new SearchBar component
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube_api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

// types
import { Video, EMPTY_VIDEO } from '../types';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState<Video>(EMPTY_VIDEO);

  const search = (query: string) => {
    youtubeSearch(query).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 200), []);

  useEffect(() => { search('autofocus'); }, []);
  return (
    <div className="main-container">
      <div className="main-video">
        <SearchBar onSearchChange={debouncedSearch} />
        <VideoDetail video={selectedVideo} />
      </div>
      <VideoList onVideoSelect={(selection: any) => setSelected(selection)} videos={videos} />
    </div>
  );
}

export default App;
