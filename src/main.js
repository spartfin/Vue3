import { createApp } from 'vue'
import App from './App.vue'
import сomponents from "@/сomponents/UI"

const app = createApp(App)

сomponents.forEach(сomponent => {
    app.component(сomponent.name, сomponent);
});

app.mount('#app')
