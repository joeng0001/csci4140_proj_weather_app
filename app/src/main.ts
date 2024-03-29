import App from "./App.vue";
import { createApp } from "vue";
import Tres from '@tresjs/core'
import router from '@/router'
createApp(App).use(Tres).use(router).mount("#app");
