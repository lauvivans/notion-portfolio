<script setup lang="ts">
import { Text, Heading, Callout, BulletList, BulletItem, Link } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";

const tree = `packages/core/
├── store/
│   ├── store.ts        defineStore("global", ...)
│   ├── instance.ts     the Pinia instance (piniaInstance)
│   └── index.ts
└── util/local-storage/
    ├── active-tab/     getActiveTab, setActiveTab
    ├── aside/          getAsideOpen, setAsideOpen
    ├── dynamic-page-info/
    ├── tabs/           getTabs, setTabs
    ├── theme/          getTheme, setTheme
    ├── constants.ts    the keys
    └── types.d.ts`;

const keys = `kami-theme              current theme
kami-tabs               open tabs
kami-active-tab         index of the active tab
kami-aside              sidebar pinned open or closed
kami-dynamic-page-info  settings per page`;

const pageInfo = `{
  "page-id": {
    settings: {
      fontFamily: "font-roboto",
      fontSize: "font-size-default",
      pageSize: "page-default-width"
    }
  }
}`;
</script>

<template>
  <Text
    >Kami keeps everything a visitor changes in two places:
    <Link href="https://pinia.vuejs.org/">Pinia</Link> for the state of the
    current visit and
    <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
      >localStorage</Link
    >
    so it survives a reload. Nothing is sent to a server.</Text
  >
  <Callout emoji="💡"
    >The store reads localStorage once, when it starts, and the components
    write back through the setters in <code>util/local-storage/</code>. Pinia
    talks to localStorage only through those functions.</Callout
  >
  <CodeBlock :code="tree" />

  <Heading :level="3">What is stored</Heading>
  <BulletList>
    <BulletItem
      >The theme: Light, Dark, Cat Latte or Cat Mocha.</BulletItem
    >
    <BulletItem
      >The open tabs (page id, name and path) and the active one. A visitor
      can open up to 10 tabs.</BulletItem
    >
    <BulletItem>Whether the sidebar is pinned open.</BulletItem>
    <BulletItem
      >The settings of each page: font, small text and full
      width.</BulletItem
    >
  </BulletList>
  <CodeBlock :code="pageInfo" />

  <Heading :level="3">Keys</Heading>
  <Text
    >All keys live in <code>util/local-storage/constants.ts</code> and start
    with <code>kami-</code>.</Text
  >
  <CodeBlock :code="keys" />

  <Heading :level="3">Pinia store</Heading>
  <Text
    >The store is defined with <code>defineStore("global", ...)</code>. Its
    state holds the page settings, the theme, the tabs, the active tab, the
    active page, the sidebar state and the page open in a modal. Each piece
    of state has an action to change it (<code>storeTheme</code>,
    <code>storeTabs</code> and so on) and a getter to read it.</Text
  >
  <Text
    >Pinia is bundled into the package. A portfolio reads the store through
    <code>useStore</code> and installs <code>piniaInstance</code> in its
    app.</Text
  >
</template>
