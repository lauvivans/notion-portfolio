<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Link, Code } from "@core/index.ts";

const commands = `npm test             # run all tests once
npm run test:watch   # rerun on every change`;
</script>

<template>
  <Text
    >Tests run with <Link href="https://vitest.dev/">Vitest</Link>,
    <Link href="https://test-utils.vuejs.org/">Vue Test Utils</Link> and
    happy-dom as the browser environment. They live in <Code inline>tests/</Code>,
    with their own <Code inline>tsconfig.vitest.json</Code>.</Text
  >
  <Code>{{ commands }}</Code>

  <Heading :level="3">What is covered</Heading>
  <BulletList>
    <BulletItem
      ><Code inline>routes.test.ts</Code>: one route per page, the active page on
      enter and unknown paths sent to the 404 page.</BulletItem
    >
    <BulletItem
      ><Code inline>store.test.ts</Code>: defaults, the saved theme, tabs and the
      settings of each page.</BulletItem
    >
    <BulletItem
      ><Code inline>theme.test.ts</Code>: applying, switching and saving the
      theme.</BulletItem
    >
  </BulletList>

  <Heading :level="3">When they run</Heading>
  <BulletList>
    <BulletItem
      >On commit, the pre-commit hook runs <Code inline>vitest related</Code> on the
      staged files.</BulletItem
    >
    <BulletItem
      >On every PR, CI runs the type check, lint, format check, the tests and
      the package build.</BulletItem
    >
  </BulletList>
</template>
