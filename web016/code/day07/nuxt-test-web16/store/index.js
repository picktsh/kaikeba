export const actions = {
  nuxtServerInit({ commit }, { app }) {
    // nuxt-universal-cookie用法如下
    // app是server实例也就是koa实例
    const token = app.$cookies.get("token");
    // 表名是登录用户
    if (token) {
      console.log("nuxtServerInit: token:"+token);
      commit("user/init", token);
    }
  }
};