import { createApp } from "vue";
import App from "./App.vue";

createApp(App, {
  data() {
    return {
      counter: 0,
    };
  },
}).mount("#app");
