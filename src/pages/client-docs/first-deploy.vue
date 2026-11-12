<script setup lang="ts">
import { Text, Heading, Callout, Link } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";

const build = `npm run build`;
const git = `git add .
git commit -m "<your-message>"
git push -u origin main`;
</script>

<template>
  <Heading :level="3">Build for production</Heading>
  <Text
    >The build bundles and minifies your code into the <code>dist/</code>
    folder. That folder is your whole site.</Text
  >
  <CodeBlock :code="build" />

  <Heading :level="3">Push your changes</Heading>
  <Text>If the build runs fine, commit and push.</Text>
  <CodeBlock :code="git" />

  <Heading :level="3">Host it</Heading>
  <Text
    >A Kami portfolio is a static site, so any static host works. Point the
    host to your repository, set the build command to
    <code>npm run build</code> and the output folder to
    <code>dist</code>.</Text
  >
  <Callout emoji="⚠️"
    >Kami uses browser history routes, like <code>/about</code>. The host must
    answer every path with <code>index.html</code>, or a reload on a sub-page
    returns 404. Cloudflare Pages does this when the site has no
    <code>404.html</code>; other hosts need a rewrite rule.</Callout
  >
  <Text
    >This site runs on
    <Link href="https://developers.cloudflare.com/pages/">Cloudflare Pages</Link
    >.</Text
  >
</template>
