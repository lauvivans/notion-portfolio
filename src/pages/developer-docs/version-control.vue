<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Link, Code } from "@core/index.ts";

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
    merged into <Code inline>main</Code>.</Text
  >
  <Code>{{ semver }}</Code>

  <Heading :level="3">PATCH: 1.0.0 → 1.0.1</Heading>
  <BulletList>
    <BulletItem>Bug fixes, performance and small internal changes.</BulletItem>
    <BulletItem>Nothing breaks for people using the library.</BulletItem>
    <BulletItem>Commit type: <Code inline>fix: correct validation error</Code></BulletItem>
  </BulletList>

  <Heading :level="3">MINOR: 1.0.0 → 1.1.0</Heading>
  <BulletList>
    <BulletItem>New features and new blocks.</BulletItem>
    <BulletItem>Everything that worked before still works.</BulletItem>
    <BulletItem>Commit type: <Code inline>feat: add support for filters</Code></BulletItem>
  </BulletList>

  <Heading :level="3">MAJOR: 1.0.0 → 2.0.0</Heading>
  <BulletList>
    <BulletItem
      >Changes that break existing portfolios: a removed or renamed export,
      prop or CSS class.</BulletItem
    >
    <BulletItem
      >Add <Code inline>!</Code> after the type, or a
      <Code inline>BREAKING CHANGE:</Code> footer.</BulletItem
    >
  </BulletList>
  <Code>{{ breaking }}</Code>

  <Heading :level="3">Types that don't release</Heading>
  <Text
    ><Code inline>docs</Code>, <Code inline>style</Code>, <Code inline>refactor</Code>,
    <Code inline>test</Code>, <Code inline>chore</Code> and <Code inline>ci</Code>.</Text
  >

  <Heading :level="3">Example</Heading>
  <Code>{{ example }}</Code>
  <Text
    >semantic-release reads every commit since the last release and applies
    the largest bump it finds.</Text
  >
</template>
