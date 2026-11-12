import type { RouteRecordRaw } from "vue-router";
import { MainLayout, NotFoundPage, useStore, type PageInfo } from "@core/index.ts";

export function createRoutes(pages: PageInfo[]): RouteRecordRaw[] {
  const mainChildren: RouteRecordRaw[] = pages.map((page) => ({
    path: page.path,
    component: page.component,
    name: page.id,
    beforeEnter: () => {
      useStore.storeActivePage(page);
    },
  }));

  return [
    {
      path: "/:pathMatch(.*)",
      component: NotFoundPage,
      name: "NotFound",
      beforeEnter: (to, from) => {
        to.meta.previousRoute = from.path;
      },
    },
    {
      path: "/",
      component: MainLayout,
      children: mainChildren,
    },
  ];
}
