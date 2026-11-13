<script setup lang="ts">
import { Text, Heading, BulletList, TextHighlight } from "@core/index.ts";
import type { PageInfo } from "@core/index.ts";

// The database gallery renders this page in its cards and passes these.
defineProps<{ page?: PageInfo; hideDatabase?: boolean }>();
</script>

<template>
  <Text
    >An app to track the books I read, with notes and a reading goal for the
    year. <TextHighlight>Still in progress.</TextHighlight></Text
  >
  <Heading :level="3">Features</Heading>
  <BulletList :items="['Search by title or author', 'Notes per chapter', 'Yearly goal']" />
</template>
