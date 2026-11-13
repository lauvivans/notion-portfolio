<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Link, Code } from "@core/index.ts";

const repo = "https://github.com/lauvivans/kami/blob/develop";

const start = `git clone https://github.com/lauvivans/kami.git
cd kami
npm install
npm run dev`;

const tree = `packages/core/          the library published to npm
├── components/         Aside, Header, Tabs, settings, modals
├── @client/components/ the blocks used inside pages
├── store/              the Pinia store (useStore)
├── util/local-storage/ theme, tabs, sidebar and page settings
├── assets/scss/        variables, themes and mixins
├── @types/             IMetadata and PageInfo
└── index.ts            everything the package exports
src/                    this documentation site
template/               the project the CLI copies
bin/cli.js              the CLI (create-kami)
tests/                  Vitest tests`;
</script>

<template>
  <Heading :level="3">Run it locally</Heading>
  <Text
    ><Code inline>npm run dev</Code> starts this site, which imports the library from
    <Code inline>packages/core</Code> through the <Code inline>@core</Code> alias. A change
    in a block shows up here right away.</Text
  >
  <Code lang="bash">{{ start }}</Code>

  <Heading :level="3">Structure</Heading>
  <Code>{{ tree }}</Code>

  <Heading :level="3">Rules</Heading>
  <BulletList>
    <BulletItem
      >Everything in the repository is in English: code, docs, issues, PRs and
      commits.</BulletItem
    >
    <BulletItem
      >PRs target <Code inline>develop</Code>. Branch names follow
      <Code inline>&lt;type&gt;/&lt;issue&gt;-kebab-case-name</Code>.</BulletItem
    >
    <BulletItem
      >Anything exported from <Code inline>packages/core/index.ts</Code> is public
      API. Breaking it needs a major version.</BulletItem
    >
    <BulletItem
      >A pre-commit hook runs ESLint, Prettier and the related tests on the
      staged files. CI runs the same checks on every PR.</BulletItem
    >
  </BulletList>

  <Heading :level="3">More</Heading>
  <BulletList>
    <BulletItem
      ><Link :href="`${repo}/CLAUDE.md`">CLAUDE.md</Link>: the full
      workflow, from branch to release.</BulletItem
    >
    <BulletItem
      ><Link :href="`${repo}/docs/product/requirements.md`"
        >Product requirements</Link
      >: what the library offers and its rules.</BulletItem
    >
    <BulletItem
      ><Link :href="`${repo}/docs/decisions`">Decisions</Link>: why the
      project is built the way it is.</BulletItem
    >
  </BulletList>
</template>
