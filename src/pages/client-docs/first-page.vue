<script setup lang="ts">
import { Text, Heading, Callout, BulletList, BulletItem, LinkMention, Code } from "@core/index.ts";
import metadata from "@/metadata";
import { aboutPage as page, aboutMetadata as meta } from "@/code-samples";
</script>

<template>
  <Heading :level="3">1. Write the page</Heading>
  <Text
    >Create a Vue component in <Code inline>src/pages/</Code> and build its content
    with Kami's blocks.</Text
  >
  <Code>{{ page }}</Code>

  <Heading :level="3">2. Add it to the metadata</Heading>
  <Text
    >Every page needs an entry in <Code inline>metadata.pages</Code>. The key and the
    <Code inline>id</Code> must match.</Text
  >
  <Code>{{ meta }}</Code>

  <Heading :level="3">Page fields</Heading>
  <BulletList>
    <BulletItem
      ><Code inline>id</Code>, <Code inline>path</Code>, <Code inline>title</Code> and
      <Code inline>component</Code> are required.</BulletItem
    >
    <BulletItem
      ><Code inline>isHomepage</Code> marks the page shown at
      <Code inline>/</Code>.</BulletItem
    >
    <BulletItem
      ><Code inline>pages</Code> lists the ids of the sub-pages, and
      <Code inline>parentPage</Code> points a sub-page to its parent. The sidebar
      and the breadcrumb follow them.</BulletItem
    >
    <BulletItem
      ><Code inline>banner</Code> and <Code inline>icon</Code> take an image path from
      <Code inline>public/</Code>, plus an optional author and link for the
      credit.</BulletItem
    >
    <BulletItem
      ><Code inline>databaseInfo</Code> shows properties under the title, like the
      properties of a Notion database item.</BulletItem
    >
  </BulletList>
  <Text
    ><Code inline>metadata.favorites</Code> lists the pages shown under Favorites in
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
