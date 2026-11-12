<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Link } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";

const semver = `1.0.0
│ │ └── PATCH: bug fixes (backward compatible)
│ └──── MINOR: new features (backward compatible)
└────── MAJOR: changes that break compatibility`;

const breaking = `git commit -m "feat!: drop support for Node 12"`;

const example = `# Commit history
fix: correct validation        # → 1.0.1
feat: add a new block          # → 1.1.0
feat!: remove the old API      # → 2.0.0`;
</script>

<template>
  <Text
    >Kami follows <Link href="https://semver.org/">Semantic Versioning</Link>.
    The version is picked by
    <Link href="https://semantic-release.gitbook.io/">semantic-release</Link>
    from the
    <Link href="https://www.conventionalcommits.org/">Conventional Commits</Link>
    merged into <code>main</code>.</Text
  >
  <CodeBlock :code="semver" />

  <Heading :level="3">PATCH: 1.0.0 → 1.0.1</Heading>
  <BulletList>
    <BulletItem>Bug fixes, performance and small internal changes.</BulletItem>
    <BulletItem>Nothing breaks for people using the library.</BulletItem>
    <BulletItem>Commit type: <code>fix: correct validation error</code></BulletItem>
  </BulletList>

  <Heading :level="3">MINOR: 1.0.0 → 1.1.0</Heading>
  <BulletList>
    <BulletItem>New features and new blocks.</BulletItem>
    <BulletItem>Everything that worked before still works.</BulletItem>
    <BulletItem>Commit type: <code>feat: add support for filters</code></BulletItem>
  </BulletList>

  <Heading :level="3">MAJOR: 1.0.0 → 2.0.0</Heading>
  <BulletList>
    <BulletItem
      >Changes that break existing portfolios: a removed or renamed export,
      prop or CSS class.</BulletItem
    >
    <BulletItem
      >Add <code>!</code> after the type, or a
      <code>BREAKING CHANGE:</code> footer.</BulletItem
    >
  </BulletList>
  <CodeBlock :code="breaking" />

  <Heading :level="3">Types that don't release</Heading>
  <Text
    ><code>docs</code>, <code>style</code>, <code>refactor</code>,
    <code>test</code>, <code>chore</code> and <code>ci</code>.</Text
  >

  <Heading :level="3">Example</Heading>
  <CodeBlock :code="example" />
  <Text
    >semantic-release reads every commit since the last release and applies
    the largest bump it finds.</Text
  >
</template>
