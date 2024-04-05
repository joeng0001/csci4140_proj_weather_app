import App from "./App.vue";
import { createApp } from "vue";
import Tres from '@tresjs/core'
import router from '@/router'
import {createPinia} from 'pinia'
import emitter from "@/helper/emitter";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
const app=createApp(App)
app.use(Tres).use(router).use(createPinia()).use(createVuestic())
// app.config.globalProperties.url=""
app.mount("#app");

