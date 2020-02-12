import Vue from "vue";
import { AxiosInstance } from "axios";
import VueRouter from "vue-router";
import { Store } from "vuex";

// 声明后缀.vue文件处理
declare module '*.vue' {
  // import Vue from 'vue'
  export default Vue
}


// 模块扩展vue
declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance;
  }
}


// 扩展ComponentOptions
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    store?: Store<any>;
  }
}