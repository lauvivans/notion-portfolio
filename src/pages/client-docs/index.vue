<script setup lang="ts">
import { Callout, Heading, LinkMention } from "@core/index.ts";
import metadata from "@/metadata";
</script>

<template>
  <Callout emoji="💡"
    >Create your portfolio as a set of pages, each one a Vue component built
    with Notion-style blocks. These guides go from an empty folder to a
    deployed site.</Callout
  >

  <Heading :level="3">Starters</Heading>
  <LinkMention :page="metadata.pages['start-from-here']" emoji="🔭" />
  <LinkMention :page="metadata.pages['setup']" emoji="📦" />
  <LinkMention :page="metadata.pages['first-page']" emoji="🔨" />
  <LinkMention :page="metadata.pages['first-deploy']" emoji="✅" />
</template>
