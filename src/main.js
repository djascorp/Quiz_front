import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';
import Antdv from "ant-design-vue";

// importing AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(AOS.init());
app.use(Antdv)
app.mount('#app')
