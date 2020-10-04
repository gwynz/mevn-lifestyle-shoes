import axios from 'axios'


axios.interceptors.response.use(undefined, function (err) {
  return new Promise(function (resolve, reject) {
    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
      this.$store.dispatch(logout)
    }
    throw err;
  });
});

export default () => {
  return axios.create({
    baseURL: `http://localhost:3100`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
}