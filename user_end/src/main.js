import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./assets/icons/iconfont.css";
import "./assets/homepage/iconfont/iconfont.css";
import Vant from "vant";
import "vant/lib/index.css";
// 全局配置axios，并使用ajax作为别名
Vue.prototype.ajax = axios.create({
  timeout: 3000,
  responseType: "json",
  //公共地址
  baseURL: "http://127.0.0.1:8081",
  //编码规格
  responseEncoding: "utf8",
});


Vue.config.productionTip = false;
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
