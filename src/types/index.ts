


interface Video {
  id: {
    videoId: string;
  };
  etag: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  }
}

const EMPTY_VIDEO: Video = {
  id: {
    videoId: '',
  },
  etag: '0',
  snippet: {
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
      },
    },
  },
};

export { Video, EMPTY_VIDEO}
