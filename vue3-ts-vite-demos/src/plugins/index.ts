import { App, Plugin } from 'vue';

const plugins: Plugin = {
  install(app: App) {
    console.log(app);
    // Install your plugins here
  },
};

export default plugins;
