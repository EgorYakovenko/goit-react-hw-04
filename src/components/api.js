import axios from 'axios';

const KEY = 'nfETKchrhu0QZJvrk5wEPWVq-5iCKjXTqUbWwdRMBwo';

async function fetchImage(searchQuery, page = 1) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      // client_id: KEY,
      query: searchQuery,
      per_page: 5,
      page,
    },
    headers: {
      Authorization: 'Client-ID nfETKchrhu0QZJvrk5wEPWVq-5iCKjXTqUbWwdRMBwo',
      'Accept-Version': 'v1',
    },
  });
  console.log(response);
  return response.data.results;
}

export default fetchImage;
