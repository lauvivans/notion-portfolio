<script setup lang="ts">
import { Text, Callout, Heading, LinkMention, Divider, Link } from "@core/index.ts";
import metadata from "@/metadata";
</script>

<template>
  <Text
    >Kami is a Vue library for building a portfolio that looks and works like
    Notion: a sidebar with nested pages, tabs, themes and Notion-style blocks.
    This site is built with Kami itself.</Text
  >
  <Callout emoji="💡"
    >The idea came from Nitin Ranganath's VS Code Portfolio. Each page is a Vue
    component, and the blocks inside it are the ones you would use in
    Notion.</Callout
  >

  <Heading :level="3">Documentation</Heading>
  <LinkMention :page="metadata.pages['client-docs']" emoji="📘" />
  <Text>For people building their own portfolio with Kami.</Text>
  <LinkMention :page="metadata.pages['developer-docs']" emoji="🛠️" />
  <Text>For people working on the library itself.</Text>

  <Divider />

  <Heading :level="3">Demo</Heading>
  <LinkMention :page="metadata.pages['demo']" emoji="✨" />
  <Text
    >An example portfolio with every block, a gallery database and the four
    themes. Open Settings in the sidebar to switch themes.</Text
  >

  <Divider />

  <Heading :level="3">Links</Heading>
  <Text
    >Source code on <Link href="https://github.com/lauvivans/kami">GitHub</Link
    >. Package on
    <Link href="https://www.npmjs.com/package/@lauvivans/kami">npm</Link>.</Text
  >
</template>
