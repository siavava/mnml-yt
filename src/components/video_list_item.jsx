import React from 'react';

function VideoListItem(props) {
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <li className="video-list-item" onClick={() => props.onVideoSelect(props.video)}>
      <img className="small-video-image" src={imgUrl} alt="video" />
      <div className="small-video-title">{props.video.snippet.title}</div>
    </li>
  );
}

export default VideoListItem;
