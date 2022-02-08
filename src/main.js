import { createApp } from 'vue'
import App from './App.vue'
import сomponents from "@/сomponents/UI"
import router from './router/router';

const app = createApp(App)

сomponents.forEach(сomponent => {
    app.component(сomponent.name, сomponent);
});

app
    .use(router)
    .mount('#app');
