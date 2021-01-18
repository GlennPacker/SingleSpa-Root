import { registerApplication, start } from "single-spa";

registerApplication({
  name: "nav",
  app: () => System.import("nav"),
  activeWhen: "/",
});

registerApplication({
  name: "@vue-mf/dogs-dashboard",
  app: () => System.import("@vue-mf/dogs-dashboard"),
  activeWhen: "/view-doggos",
});

registerApplication({
  name: "basic",
  app: () => System.import("basic"),
  activeWhen: "/basic-page",
});

registerApplication({
  name: "anr",
  app: () => System.import("anr"),
  activeWhen: "/state-share",
});

start();
