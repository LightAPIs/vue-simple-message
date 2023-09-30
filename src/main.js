import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import messageUI from './components/index';

const app = createApp(App);
app.use(messageUI);
app.mount('#app');
