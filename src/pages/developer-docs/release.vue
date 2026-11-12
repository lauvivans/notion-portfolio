<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Callout } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";

const flow = `feature branch ──squash──▶ develop ──▶ release/<version> ──merge──▶ main
                                                                  │
                                       semantic-release ◀─────────┘
                                       npm + GitHub release + CHANGELOG`;
</script>

<template>
  <Heading :level="3">Branches</Heading>
  <CodeBlock :code="flow" />
  <BulletList>
    <BulletItem
      >Feature branches are squashed into <code>develop</code>.</BulletItem
    >
    <BulletItem
      >A release goes from a <code>release/&lt;version&gt;</code> branch, cut
      from <code>develop</code>, into <code>main</code> with a merge
      commit.</BulletItem
    >
    <BulletItem
      >After a release, <code>main</code> is merged back into
      <code>develop</code>, since semantic-release pushes a commit with the
      new version and the changelog.</BulletItem
    >
  </BulletList>

  <Heading :level="3">GitHub Actions</Heading>
  <BulletList>
    <BulletItem
      ><code>ci.yml</code> runs on every PR: type check, lint, format check on
      the changed files, tests and the package build.</BulletItem
    >
    <BulletItem
      ><code>release.yml</code> runs on every push to <code>main</code>: it
      builds the package, checks its contents and runs semantic-release,
      which publishes to npm and creates the GitHub release.</BulletItem
    >
  </BulletList>

  <Heading :level="3">This site</Heading>
  <Text
    >This documentation and the demo are the app in <code>src/</code>, built
    with <code>npm run build</code> and hosted on Cloudflare Pages.</Text
  >
  <Callout emoji="📌"
    >Both workflows read the Node version from <code>.nvmrc</code>.</Callout
  >
</template>
