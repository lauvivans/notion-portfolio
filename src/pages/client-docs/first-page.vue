<script setup lang="ts">
import { Text, Heading, Callout, BulletList, BulletItem, LinkMention } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";
import metadata from "@/metadata";
import { aboutPage as page, aboutMetadata as meta } from "@/code-samples";
</script>

<template>
  <Heading :level="3">1. Write the page</Heading>
  <Text
    >Create a Vue component in <code>src/pages/</code> and build its content
    with Kami's blocks.</Text
  >
  <CodeBlock :code="page" />

  <Heading :level="3">2. Add it to the metadata</Heading>
  <Text
    >Every page needs an entry in <code>metadata.pages</code>. The key and the
    <code>id</code> must match.</Text
  >
  <CodeBlock :code="meta" />

  <Heading :level="3">Page fields</Heading>
  <BulletList>
    <BulletItem
      ><code>id</code>, <code>path</code>, <code>title</code> and
      <code>component</code> are required.</BulletItem
    >
    <BulletItem
      ><code>isHomepage</code> marks the page shown at
      <code>/</code>.</BulletItem
    >
    <BulletItem
      ><code>pages</code> lists the ids of the sub-pages, and
      <code>parentPage</code> points a sub-page to its parent. The sidebar
      and the breadcrumb follow them.</BulletItem
    >
    <BulletItem
      ><code>banner</code> and <code>icon</code> take an image path from
      <code>public/</code>, plus an optional author and link for the
      credit.</BulletItem
    >
    <BulletItem
      ><code>databaseInfo</code> shows properties under the title, like the
      properties of a Notion database item.</BulletItem
    >
  </BulletList>
  <Text
    ><code>metadata.favorites</code> lists the pages shown under Favorites in
    the sidebar. Pages without a parent are listed under Private.</Text
  >

  <Callout emoji="👀"
    >The Blocks page in the demo shows every block with the code that renders
    it.</Callout
  >
  <LinkMention :page="metadata.pages['blocks']" emoji="🧱" />

  <Text>Next step:</Text>
  <LinkMention :page="metadata.pages['first-deploy']" emoji="✅" />
</template>
