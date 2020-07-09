import axios from 'axios';
axios.defaults.baseURL = `https://autumnfish.cn/`;

// const axiosUrl = `https://autumnfish.cn/`;
export function getSearchList(keywords) {
  return axios.get(`search`, {
    params: {
      keywords
    }
  })
}