import axios from 'axios';
import $ from 'jquery';

const API_URL = 'https://www.googleapis.com/youtube/v3/search';
// const API_KEY = 'AIzaSyA6MikRWLRfQqIaoLMuxcsGI9b8NczdP6Q';
const API_KEY = 'AIzaSyBI85DjUwwtapFNrlKtv-IOQUytfGVZxHU';

/**
 * @param {string} query - The search query.
 * @returns {Promise} - The promise for the API call.
 * @description - This function makes a call to the YouTube API
 * and returns a promise for the response.
 * @see https://developers.google.com/youtube/v3/docs/search/list
 */
const youtubeSearch = async (query: string) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: query,
    type: 'video',
  };

  try {
    const response = await axios.get(API_URL, { params });
    return response.data.items;

    // This is for testing so the API doesn't run out!
    // return $.getJSON('/src/services/test_data.json');
  } catch (error) {
    console.error(`youtube api error: ${error}`);
    throw error;
  }
};

export default youtubeSearch;
