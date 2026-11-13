import "@core/assets/scss/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import metadata from "./metadata";
import { createRoutes } from "./routes";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes: createRoutes(Object.values(metadata.pages)),
});

app.use(router);
app.mount("#app");
