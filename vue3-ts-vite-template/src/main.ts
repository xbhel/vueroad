import { createApp } from 'vue';
import './style.css';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import plugins from './plugins';

createApp(App).use(plugins).mount('#app');
