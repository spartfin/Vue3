import { createApp } from 'vue'
import App from '@/App.vue'
import сomponents from "@/сomponents/UI"
import router from '@/router/router';
import directives from "@/directives"
import store from '@/store';

const app = createApp(App)

сomponents.forEach(сomponent => {
    app.component(сomponent.name, сomponent);
});

directives.forEach(directive => {
    app.directive(directive.name, directive);
});

app
    .use(router)
    .use(store)
    .mount('#app');
