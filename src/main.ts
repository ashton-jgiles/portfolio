import { createApp } from "vue";
import router from "./router/router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./assets/main.css";
import App from "./App.vue";

createApp(App).use(router).use(Antd).mount("#app");
