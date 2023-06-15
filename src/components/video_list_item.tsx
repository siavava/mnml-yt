import React from 'react';

import { Video } from '../types';

interface VideoListItemProps {
  video: Video;
  onVideoSelect: (video: Video) => void;
}

function VideoListItem({ video, onVideoSelect }: VideoListItemProps) {
  const imgUrl = video?.snippet.thumbnails.default.url;

  return (
    <li className="video-list-item" onClick={() => onVideoSelect(video)}>
      <img className="small-video-image" src={imgUrl} alt="video" />
      <div className="small-video-title">{video.snippet.title}</div>
    </li>
  );
}

export default VideoListItem;
