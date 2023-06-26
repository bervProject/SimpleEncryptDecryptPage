import { createApp } from 'vue';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import App from './App.vue';
import router from './router';
import store from './store';
import '@oruga-ui/theme-bulma/dist/bulma.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Oruga, bulmaConfig);

app.mount('#app');
