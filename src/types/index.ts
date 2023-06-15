/**
 * @fileoverview Types for the app
 */

/**
 * @typedef {Object} Video
 * Video interface for the app
 */
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

/**
 * Default empty video object
 */
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
