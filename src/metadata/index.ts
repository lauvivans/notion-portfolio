import type { IMetadata, PageInfo } from "@core/index";
import Home from "../pages/home.vue";
import ClientDocs from "../pages/client-docs/index.vue";
import StartFromHere from "../pages/client-docs/start-from-here.vue";
import Setup from "../pages/client-docs/setup.vue";
import FirstPage from "../pages/client-docs/first-page.vue";
import FirstDeploy from "../pages/client-docs/first-deploy.vue";
import DeveloperDocs from "../pages/developer-docs/index.vue";
import Contributing from "../pages/developer-docs/contributing.vue";
import VersionControl from "../pages/developer-docs/version-control.vue";
import IconsPage from "../pages/developer-docs/icons.vue";
import Storage from "../pages/developer-docs/storage.vue";
import Testing from "../pages/developer-docs/testing.vue";
import Release from "../pages/developer-docs/release.vue";
import Demo from "../pages/demo/index.vue";
import Blocks from "../pages/demo/blocks.vue";
import CoffeeShop from "../pages/demo/coffee-shop.vue";
import Bookshelf from "../pages/demo/bookshelf.vue";

const coffeeIcon: PageInfo["icon"] = {
  author: "Paula Lee",
  path: "/icons/page-example.png",
  link: "https://www.flaticon.com/free-sticker/drink_7465398?related_id=7465398",
};

const restaurantBanner: PageInfo["banner"] = {
  author: "Danis Lou",
  path: "/banners/page-example.webp",
  link: "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
};

const metadata: IMetadata = {
  user: {
    author: "Kami",
    socialMedia: "@lauvivans",
  },
  pages: {
    home: {
      id: "home",
      path: "/",
      title: "Kami",
      isHomepage: true,
      banner: restaurantBanner,
      icon: coffeeIcon,
      component: Home,
    },
    "client-docs": {
      id: "client-docs",
      path: "/client-docs",
      title: "Client docs",
      icon: coffeeIcon,
      component: ClientDocs,
      pages: ["start-from-here", "setup", "first-page", "first-deploy"],
    },
    "start-from-here": {
      id: "start-from-here",
      path: "/client-docs/start-from-here",
      title: "Start from here",
      component: StartFromHere,
      parentPage: "client-docs",
    },
    setup: {
      id: "setup",
      path: "/client-docs/setup",
      title: "Setup",
      component: Setup,
      parentPage: "client-docs",
    },
    "first-page": {
      id: "first-page",
      path: "/client-docs/first-page",
      title: "Building your first page",
      component: FirstPage,
      parentPage: "client-docs",
    },
    "first-deploy": {
      id: "first-deploy",
      path: "/client-docs/first-deploy",
      title: "Your first deploy",
      component: FirstDeploy,
      parentPage: "client-docs",
    },
    "developer-docs": {
      id: "developer-docs",
      path: "/developer-docs",
      title: "Developer docs",
      icon: coffeeIcon,
      component: DeveloperDocs,
      pages: [
        "contributing",
        "version-control",
        "icons",
        "storage",
        "testing",
        "release",
      ],
    },
    contributing: {
      id: "contributing",
      path: "/developer-docs/contributing",
      title: "Contributing",
      component: Contributing,
      parentPage: "developer-docs",
    },
    "version-control": {
      id: "version-control",
      path: "/developer-docs/version-control",
      title: "Version control",
      component: VersionControl,
      parentPage: "developer-docs",
    },
    icons: {
      id: "icons",
      path: "/developer-docs/icons",
      title: "Icons",
      component: IconsPage,
      parentPage: "developer-docs",
    },
    storage: {
      id: "storage",
      path: "/developer-docs/storage",
      title: "Storage",
      component: Storage,
      parentPage: "developer-docs",
    },
    testing: {
      id: "testing",
      path: "/developer-docs/testing",
      title: "Testing",
      component: Testing,
      parentPage: "developer-docs",
    },
    release: {
      id: "release",
      path: "/developer-docs/release",
      title: "Release and deploy",
      component: Release,
      parentPage: "developer-docs",
    },
    demo: {
      id: "demo",
      path: "/demo",
      title: "Demo",
      banner: restaurantBanner,
      icon: coffeeIcon,
      component: Demo,
      pages: ["blocks", "coffee-shop", "bookshelf"],
    },
    blocks: {
      id: "blocks",
      path: "/demo/blocks",
      title: "Blocks",
      component: Blocks,
      parentPage: "demo",
    },
    "coffee-shop": {
      id: "coffee-shop",
      path: "/demo/coffee-shop",
      title: "Coffee shop website",
      banner: restaurantBanner,
      icon: coffeeIcon,
      component: CoffeeShop,
      parentPage: "demo",
      databaseInfo: {
        Created: { icon: "clock", value: "March 2026" },
        Languages: { icon: "code", value: ["Vue", "TypeScript"] },
        Status: { icon: "check", value: "Done" },
      },
    },
    bookshelf: {
      id: "bookshelf",
      path: "/demo/bookshelf",
      title: "Bookshelf app",
      component: Bookshelf,
      parentPage: "demo",
      databaseInfo: {
        Created: { icon: "clock", value: "July 2026" },
        Languages: { icon: "code", value: ["JavaScript", "Sass"] },
        Status: { icon: "check", value: "In progress" },
      },
    },
  },
  favorites: ["home", "client-docs", "demo"],
};

export default metadata;
