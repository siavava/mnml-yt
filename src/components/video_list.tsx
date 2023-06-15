import React from 'react';
import VideoListItem from './video_list_item';

import { Video } from '../types';

interface VideoListProps {
  videos: Video[];
  onVideoSelect: (video: Video) => void;
}

function VideoList({ videos, onVideoSelect }: VideoListProps) {
  const videoItems = videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />;
  });

  return (
    <ul id="video-list">
      {videoItems}
    </ul>
  );
}

export default VideoList;
