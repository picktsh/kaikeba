export default function({ $axios, store }) {
  // onRequest是@nuxtjs/axios模块提供的帮助方法
  $axios.onRequest(config => {
    // 附加令牌
    if (store.state.user.token) {
      config.headers.Authorization = "Bearer " + store.state.user.token;
    }
    return config;
  });
}