import { createApp } from 'vue'
import App from './App.vue'
import store from './store'; // Importa tu store desde el archivo store.js

createApp(App)
  .use(store) // Usa el store en tu aplicación
  .mount('#app');
