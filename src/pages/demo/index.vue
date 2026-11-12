<script setup lang="ts">
import { Text, Callout, Heading, Database, LinkMention, Columns, Column, BulletList } from "@core/index.ts";
import metadata from "@/metadata";

const projects = [metadata.pages["coffee-shop"], metadata.pages["bookshelf"]].filter(
  (page) => page !== undefined,
);
</script>

<template>
  <Callout emoji="👋"
    >This is an example portfolio built with Kami. Open the pages, switch the
    theme in Settings and change the font or width from the button at the top
    right.</Callout
  >

  <Heading :level="2">Hi, I'm a developer</Heading>
  <Text
    >I build small web apps and write about what I learn along the way. Below
    are some of the projects I worked on.</Text
  >

  <Columns :numberOfColumns="2">
    <Column>
      <Heading :level="4">What I do</Heading>
      <BulletList :items="['Front-end with Vue', 'Design systems', 'Accessibility']" />
    </Column>
    <Column>
      <Heading :level="4">Currently</Heading>
      <BulletList :items="['Learning Rust', 'Reading about typography', 'Open to projects']" />
    </Column>
  </Columns>

  <Database layout="gallery" title="Projects" :pages="projects" />

  <Heading :level="3">All the blocks</Heading>
  <Text>Every block Kami offers, with the code that renders it:</Text>
  <LinkMention :page="metadata.pages['blocks']" emoji="🧱" />
</template>
