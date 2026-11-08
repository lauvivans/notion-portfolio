import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";
import { shallowMount, type VueWrapper } from "@vue/test-utils";
import { useStore } from "@core/store";
import { MainLayout } from "@core/layouts";
import { LOCAL_STORAGE_THEME } from "@core/util/local-storage/constants";

const store = useStore;
let wrapper: VueWrapper;

beforeEach(() => {
  localStorage.clear();
  store.$reset();
  wrapper = shallowMount(MainLayout, {
    props: {
      activePage: { id: "home", path: "/", title: "Home", component: {} },
    },
    global: { stubs: { RouterView: true } },
  });
});

afterEach(() => {
  wrapper.unmount();
});

describe("theme switch", () => {
  it("applies the store theme to the body on mount", () => {
    expect(document.body.className).toBe("light-theme");
  });

  it("swaps the body class when the theme changes", async () => {
    store.storeTheme("cat-mocha");
    await nextTick();
    expect(document.body.className).toBe("cat-mocha");
  });

  it("saves the theme when the page unloads", () => {
    store.storeTheme("dark-theme");
    window.dispatchEvent(new Event("beforeunload"));
    expect(localStorage.getItem(LOCAL_STORAGE_THEME)).toBe("dark-theme");
  });
});
