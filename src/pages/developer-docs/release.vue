<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Callout, Code } from "@core/index.ts";

const flow = `feature branch ──squash──▶ develop ──▶ release/<version> ──merge──▶ main
                                                                  │
                                       semantic-release ◀─────────┘
                                       npm + GitHub release + CHANGELOG`;
</script>

<template>
  <Heading :level="3">Branches</Heading>
  <Code>{{ flow }}</Code>
  <BulletList>
    <BulletItem
      >Feature branches are squashed into <Code inline>develop</Code>.</BulletItem
    >
    <BulletItem
      >A release goes from a <Code inline>release/&lt;version&gt;</Code> branch, cut
      from <Code inline>develop</Code>, into <Code inline>main</Code> with a merge
      commit.</BulletItem
    >
    <BulletItem
      >After a release, <Code inline>main</Code> is merged back into
      <Code inline>develop</Code>, since semantic-release pushes a commit with the
      new version and the changelog.</BulletItem
    >
  </BulletList>

  <Heading :level="3">GitHub Actions</Heading>
  <BulletList>
    <BulletItem
      ><Code inline>ci.yml</Code> runs on every PR: type check, lint, format check on
      the changed files, tests and the package build.</BulletItem
    >
    <BulletItem
      ><Code inline>release.yml</Code> runs on every push to <Code inline>main</Code>: it
      builds the package, checks its contents and runs semantic-release,
      which publishes to npm and creates the GitHub release.</BulletItem
    >
  </BulletList>

  <Heading :level="3">This site</Heading>
  <Text
    >This documentation and the demo are the app in <Code inline>src/</Code>, built
    with <Code inline>npm run build</Code> and hosted on Cloudflare Pages.</Text
  >
  <Callout emoji="📌"
    >Both workflows read the Node version from <Code inline>.nvmrc</Code>.</Callout
  >
</template>
