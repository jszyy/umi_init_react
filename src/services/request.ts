import axios from 'axios';

export const request = (url: string, params: {}) => {
  return axios({
    method: 'get',
    url: url,
  });
};
