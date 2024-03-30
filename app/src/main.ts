import App from "./App.vue";
import { createApp } from "vue";
import Tres from '@tresjs/core'
import router from '@/router'
import {createPinia} from 'pinia'
import emitter from "@/helper/emitter";
createApp(App).use(Tres).use(router).use(createPinia()).mount("#app");
