import { API_KEY, API } from 'react-native-dotenv'

const axios = require('axios');

export const fetchData = {
  OpenGet: async function(country, method) {
    return await axios
      .get(`${API}/2.0/?method=${method}&country=${country}&api_key=${API_KEY}&format=json`)
      .then((res) => createOkResponse(res))
      .catch((err) => createErrorResponse(err));
  }
};

const createOkResponse = response => {
  return {
    ok: response.status === 200,
    data: response.data.res,
  };
};

const createErrorResponse = err => {
  return {
    ok: false,
    error: err,
  };
};
