import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Section from './components/Section.vue';
import AboutContent from './components/AboutContent.vue';
import TeamContent from './components/TeamContent.vue';
import SponsorsContent from './components/SponsorsContent.vue';
import Footer from './components/Footer.vue';

const app = createApp(App);

app.component('NavBar', NavBar);
app.component('Hero', Hero);
app.component('Section', Section);
app.component('AboutContent', AboutContent);
app.component('TeamContent', TeamContent);
app.component('SponsorsContent', SponsorsContent);
app.component('Footer', Footer);
app.use(ElementPlus);

app.mount('#app');
