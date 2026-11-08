import "@core/assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import metadata from "./metadata";
import loadTest from "./load-test";
import { createRoutes } from "./routes";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

if (import.meta.env.DEV) {
  loadTest();
}

const router = createRouter({
  history: createWebHistory(),
  routes: createRoutes(Object.values(metadata.pages)),
});

app.use(router);
app.mount("#app");
