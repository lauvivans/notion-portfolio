<script setup lang="ts">
import { Text, Heading, Callout, Link } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";

const enumCode = `// packages/core/enum/icons.ts
export enum Icons {
  sandwich = "eva:menu-outline",
  settings = "eva:settings-fill",
  search = "eva:search-outline",
  // ...
}`;

const usage = `<script setup lang="ts">
import Icon from "@core/@client/components/Icon.vue";
import { Icons } from "@core/enum";
<\/script>

<template>
  <Icon :icon="Icons.search" />
</template>`;

const pageIcon = `// metadata: page icons and banners are images in public/
about: {
  id: "about",
  path: "/about",
  title: "About me",
  component: About,
  icon: {
    path: "/icons/about.png",
    author: "Author name",
    link: "https://link-to-the-image",
  },
},`;
</script>

<template>
  <Heading :level="3">Interface icons</Heading>
  <Text
    >The library uses <Link href="https://icon-sets.iconify.design/eva/"
      >Eva Icons</Link
    >, rendered with
    <Link href="https://iconify.design/docs/icon-components/vue/"
      >@iconify/vue</Link
    >. Every icon the library uses is listed in the <code>Icons</code>
    enum.</Text
  >
  <CodeBlock :code="enumCode" />
  <Text
    >Inside the library, render them with the <code>Icon</code>
    component.</Text
  >
  <CodeBlock :code="usage" />
  <Callout emoji="📌"
    >To add an icon, find its name on Iconify and add it to the enum. The
    icon is fetched from the Iconify API at runtime, so nothing else needs
    installing.</Callout
  >

  <Heading :level="3">Page icons</Heading>
  <Text
    >Page icons and banners are images, set in the metadata. This site uses a
    sticker from Paula Lee's
    <Link href="https://www.flaticon.com/free-sticker/drink_7465398"
      >coffee shop pack</Link
    >
    and credits it through the <code>author</code> and
    <code>link</code> fields.</Text
  >
  <CodeBlock :code="pageIcon" />
</template>
