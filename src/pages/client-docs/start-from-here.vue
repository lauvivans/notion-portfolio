<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Link, LinkMention } from "@core/index.ts";
import metadata from "@/metadata";

// vue-tsc 3.3 misreads a URL passed to a component in the template and
// breaks the type check of every expression after it, so URLs live here.
const vueUrl = "https://vuejs.org/";
const nodeUrl = "https://nodejs.org/";
</script>

<template>
  <Text
    >Kami is built on <Link :href="vueUrl">Vue.js</Link>. Your
    portfolio is a Vue app, so knowing the basics of single-file components
    helps.</Text
  >

  <Heading :level="3">What you need</Heading>
  <BulletList>
    <BulletItem
      >A current LTS version of
      <Link :href="nodeUrl">Node.js</Link>, which comes with
      npm.</BulletItem
    >
    <BulletItem>A terminal and a code editor.</BulletItem>
    <BulletItem
      >Git and a GitHub account, if you want to deploy from a
      repository.</BulletItem
    >
  </BulletList>

  <Heading :level="3">How a Kami portfolio works</Heading>
  <BulletList>
    <BulletItem>Each page is a Vue component in <code>src/pages/</code>.</BulletItem>
    <BulletItem
      >A metadata object in <code>src/metadata/index.ts</code> lists the pages,
      their titles, banners, icons and sub-pages.</BulletItem
    >
    <BulletItem
      >Kami builds the sidebar, the tabs, the breadcrumb and the routes from
      that object.</BulletItem
    >
    <BulletItem
      >There is no backend. Visitor preferences (theme, open tabs, page
      settings) stay in their browser.</BulletItem
    >
  </BulletList>

  <Text>Next step:</Text>
  <LinkMention :page="metadata.pages['setup']" emoji="📦" />
</template>
