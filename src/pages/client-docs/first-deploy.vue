<script setup lang="ts">
import { Text, Heading, Callout, Link, Code } from "@core/index.ts";

const build = `npm run build`;
const git = `git add .
git commit -m "<your-message>"
git push -u origin main`;
</script>

<template>
  <Heading :level="3">Build for production</Heading>
  <Text
    >The build bundles and minifies your code into the <Code inline>dist/</Code>
    folder. That folder is your whole site.</Text
  >
  <Code>{{ build }}</Code>

  <Heading :level="3">Push your changes</Heading>
  <Text>If the build runs fine, commit and push.</Text>
  <Code>{{ git }}</Code>

  <Heading :level="3">Host it</Heading>
  <Text
    >A Kami portfolio is a static site, so any static host works. Point the
    host to your repository, set the build command to
    <Code inline>npm run build</Code> and the output folder to
    <Code inline>dist</Code>.</Text
  >
  <Callout emoji="⚠️"
    >Kami uses browser history routes, like <Code inline>/about</Code>. The host must
    answer every path with <Code inline>index.html</Code>, or a reload on a sub-page
    returns 404. Cloudflare Pages does this when the site has no
    <Code inline>404.html</Code>; other hosts need a rewrite rule.</Callout
  >
  <Text
    >This site runs on
    <Link href="https://developers.cloudflare.com/pages/">Cloudflare Pages</Link
    >.</Text
  >
</template>
