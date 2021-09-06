import { createApp } from 'vue';
import App from './App.vue';

import '@hai2007/style/normalize.css';

import router from "./router";

createApp(App).use(router).mount('#app');
