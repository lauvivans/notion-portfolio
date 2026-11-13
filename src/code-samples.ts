// Code samples with a <script> tag or import lines. Vite's dependency scan
// reads .vue files with a regex and would take them for real code and try to
// resolve their imports, so they live in a .ts file.

export const aboutPage = `<!-- src/pages/about.vue -->
<script setup lang="ts">
import { Text, Heading, Callout } from "@lauvivans/kami";
</script>

<template>
  <Heading :level="2">About me</Heading>
  <Text>I build websites with Vue.</Text>
  <Callout emoji="☕">Currently open to new projects.</Callout>
</template>`;

export const aboutMetadata = `// src/metadata/index.ts
import type { IMetadata } from "@lauvivans/kami";
import Home from "../pages/index.vue";
import About from "../pages/about.vue";

const metadata: IMetadata = {
  user: { author: "Your Name", socialMedia: "@you" },
  pages: {
    home: {
      id: "home",
      path: "/",
      title: "Hello",
      isHomepage: true,
      component: Home,
      pages: ["about"],
    },
    about: {
      id: "about",
      path: "/about",
      title: "About me",
      component: About,
      parentPage: "home",
      icon: { path: "/icons/about.png" },
    },
  },
  favorites: ["home"],
};

export default metadata;`;

export const iconUsage = `<script setup lang="ts">
import Icon from "@core/@client/components/Icon.vue";
import { Icons } from "@core/enum";
</script>

<template>
  <Icon :icon="Icons.search" />
</template>`;
