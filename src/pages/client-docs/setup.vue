<script setup lang="ts">
import { Text, Heading, Callout, LinkMention } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";
import metadata from "@/metadata";

const create = `npx create-kami my-portfolio`;
const run = `cd my-portfolio
npm run dev`;
const tree = `my-portfolio/
├── public/
│   ├── banners/        page banners
│   └── icons/          page icons
├── src/
│   ├── metadata/
│   │   └── index.ts    the list of pages
│   ├── pages/          one Vue component per page
│   ├── App.vue         sidebar, tabs and header
│   └── main.ts         routes and styles
└── package.json`;
</script>

<template>
  <Heading :level="3">Create the project</Heading>
  <Text
    >The CLI copies the template into a new folder, installs its dependencies
    and installs Kami. The folder name defaults to
    <code>my-portfolio</code>.</Text
  >
  <CodeBlock :code="create" />
  <Callout emoji="⚠️"
    >If the folder already exists, the CLI stops with an error and changes
    nothing.</Callout
  >

  <Heading :level="3">Run it</Heading>
  <CodeBlock :code="run" />
  <Text
    >Open the address Vite prints. The template comes with one page, a banner
    and an icon, so you see a working portfolio right away.</Text
  >

  <Heading :level="3">What's inside</Heading>
  <CodeBlock :code="tree" />
  <Text
    >The styles come from one CSS file, imported once in
    <code>src/main.ts</code>: <code>@lauvivans/kami/dist/kami.css</code>.</Text
  >

  <Text>Next step:</Text>
  <LinkMention :page="metadata.pages['first-page']" emoji="🔨" />
</template>
