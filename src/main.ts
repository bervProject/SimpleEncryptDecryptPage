import { createApp } from 'vue';
import { createOruga, OrugaComponentPlugins } from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import App from './App.vue';
import router from './router';
import '@oruga-ui/theme-bulma/style.css';
import 'bulma/css/bulma.min.css';

const app = createApp(App);

app.use(router);
app.use(createOruga(bulmaConfig, OrugaComponentPlugins));

app.mount('#app');
