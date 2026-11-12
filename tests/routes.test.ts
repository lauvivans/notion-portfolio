import { beforeEach, describe, expect, it } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";
import { useStore } from "@core/store";
import type { PageInfo } from "@core/@types";
import { createRoutes } from "@/routes";

const pages: PageInfo[] = [
  { id: "home", path: "/", title: "Home", component: {} },
  { id: "about", path: "/about", title: "About", component: {} },
];

const store = useStore;
const makeRouter = () =>
  createRouter({ history: createMemoryHistory(), routes: createRoutes(pages) });

beforeEach(() => {
  localStorage.clear();
  store.$reset();
});

describe("routes", () => {
  it("creates one named route per page", () => {
    const router = makeRouter();
    expect(router.hasRoute("home")).toBe(true);
    expect(router.hasRoute("about")).toBe(true);
  });

  it("marks the page as active on enter", async () => {
    const router = makeRouter();
    await router.push("/about");
    expect(store.activePage.id).toBe("about");
  });

  it("sends unknown paths to NotFound with the previous path", async () => {
    const router = makeRouter();
    await router.push("/about");
    await router.push("/missing");
    expect(router.currentRoute.value.name).toBe("NotFound");
    expect(router.currentRoute.value.meta.previousRoute).toBe("/about");
  });
});
