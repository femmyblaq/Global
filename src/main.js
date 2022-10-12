import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import loader from "vue-ui-preloader";

createApp(App).use(store).use(router).use(loader).mount("#app");
