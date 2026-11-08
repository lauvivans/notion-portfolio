import PageExample from "../pages/index.vue";
import { type IMetadata } from "@lauvivans/kami";

const metadata: IMetadata = {
  user: {
    author: `My Portfolio`,
    socialMedia: "@user",
  },
  pages: {
    "page-example": {
      id: "page-example",
      title: "Hello 😊",
      isHomepage: true,
      banner: {
        author: "Danis Lou",
        link: "https://unsplash.com/photos/restaurant-with-people-dining-in-jfZfdQtcH6k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
        path: "/banners/page-example.webp",
      },
      icon: {
        author: "Paula Lee",
        link: "https://www.flaticon.com/free-sticker/drink_7465398?related_id=7465398",
        path: "/icons/page-example.png",
      },
      component: PageExample,
    },
  },
  favorites: ["page-example"],
};

export default metadata;
