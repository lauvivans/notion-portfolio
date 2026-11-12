<script setup lang="ts">
import { Callout, Heading, LinkMention, Divider } from "@core/index.ts";
import metadata from "@/metadata";
</script>

<template>
  <Callout emoji="💡"
    >How the library is organized, how it stores data and how it is tested
    and released.</Callout
  >

  <Heading :level="3">Patterns</Heading>
  <LinkMention :page="metadata.pages['contributing']" emoji="✨" />
  <LinkMention :page="metadata.pages['version-control']" emoji="🔀" />
  <LinkMention :page="metadata.pages['icons']" emoji="✳️" />

  <Divider />

  <Heading :level="3">Storage</Heading>
  <LinkMention :page="metadata.pages['storage']" emoji="🗄️" />

  <Divider />

  <Heading :level="3">Testing and release</Heading>
  <LinkMention :page="metadata.pages['testing']" emoji="🧪" />
  <LinkMention :page="metadata.pages['release']" emoji="🚀" />
</template>
