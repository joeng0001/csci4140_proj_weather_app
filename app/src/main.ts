import App from "./App.vue";
import { createApp } from "vue";
import {TroisJSVuePlugin} from 'troisjs'
createApp(App).use(TroisJSVuePlugin).mount("#app");
