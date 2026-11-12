<script setup lang="ts">
import { Text, Heading, BulletList, BulletItem, Link } from "@core/index.ts";
import CodeBlock from "@/components/CodeBlock.vue";

const commands = `npm test             # run all tests once
npm run test:watch   # rerun on every change`;
</script>

<template>
  <Text
    >Tests run with <Link href="https://vitest.dev/">Vitest</Link>,
    <Link href="https://test-utils.vuejs.org/">Vue Test Utils</Link> and
    happy-dom as the browser environment. They live in <code>tests/</code>,
    with their own <code>tsconfig.vitest.json</code>.</Text
  >
  <CodeBlock :code="commands" />

  <Heading :level="3">What is covered</Heading>
  <BulletList>
    <BulletItem
      ><code>routes.test.ts</code>: one route per page, the active page on
      enter and unknown paths sent to the 404 page.</BulletItem
    >
    <BulletItem
      ><code>store.test.ts</code>: defaults, the saved theme, tabs and the
      settings of each page.</BulletItem
    >
    <BulletItem
      ><code>theme.test.ts</code>: applying, switching and saving the
      theme.</BulletItem
    >
  </BulletList>

  <Heading :level="3">When they run</Heading>
  <BulletList>
    <BulletItem
      >On commit, the pre-commit hook runs <code>vitest related</code> on the
      staged files.</BulletItem
    >
    <BulletItem
      >On every PR, CI runs the type check, lint, format check, the tests and
      the package build.</BulletItem
    >
  </BulletList>
</template>
