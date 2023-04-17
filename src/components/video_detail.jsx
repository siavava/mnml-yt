import React from 'react';

function VideoDetail({ video }) {
  // if video is null then it is still loading!
  if (!video) {
    return <div>Loading...</div>;
  }

  // otherwise, render the video
  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="youtube detail" className="embed-responsive-item" src={url} />
      </div>
      <div className="video-detail-text">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
