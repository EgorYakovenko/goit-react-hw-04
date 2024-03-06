import axios from 'axios';

async function fetchImage(searchQuery, page = 1) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: searchQuery,
      per_page: 20,
      page,
    },
    headers: {
      Authorization: 'Client-ID nfETKchrhu0QZJvrk5wEPWVq-5iCKjXTqUbWwdRMBwo',
      'Accept-Version': 'v1',
    },
  });

  return response.data.results;
}

export default fetchImage;
