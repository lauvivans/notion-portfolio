import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { Code } from "@core/index.ts";

describe("Code", () => {
  it("renders inline code inside the text", () => {
    const wrapper = mount(Code, {
      props: { inline: true },
      slots: { default: "npm run dev" },
    });

    expect(wrapper.element.tagName).toBe("CODE");
    expect(wrapper.find("pre").exists()).toBe(false);
    expect(wrapper.text()).toBe("npm run dev");
  });

  it("renders a block that keeps the line breaks", () => {
    const sample = "const a = 1;\nconsole.log(a);";
    const wrapper = mount(Code, { slots: { default: () => sample } });

    expect(wrapper.element.tagName).toBe("PRE");
    expect(wrapper.find("pre > code").element.textContent).toBe(sample);
  });

  it("highlights the block when it gets a language and escapes the source", () => {
    const sample = 'const tag = "<b>";';
    const wrapper = mount(Code, {
      props: { lang: "ts" },
      slots: { default: () => sample },
    });

    expect(wrapper.find(".hljs-keyword").text()).toBe("const");
    expect(wrapper.find("b").exists()).toBe(false);
    expect(wrapper.find("pre > code").element.textContent).toBe(sample);
  });
});
