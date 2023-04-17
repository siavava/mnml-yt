import React, { useCallback, useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
import debounce from '../modules/debounce';

// import our new SearchBar component
import SearchBar from './search_bar';
import youtubeSearch from '../services/youtube_api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

function App(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelected] = useState(null);

  const search = (text) => {
    youtubeSearch(text).then((result) => {
      setVideos(result);
      setSelected(result[0]);
    });
  };

  const debouncedSearch = useCallback(debounce(search, 1000), []);

  useEffect(() => { search('pixar'); }, []);
  return (
    <div>
      <SearchBar onSearchChange={debouncedSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList onVideoSelect={(selection) => setSelected(selection)} videos={videos} />
    </div>
  );
}

export default App;
