<script setup lang="ts">
import { Text, Heading, BulletList, TextHighlight } from "@core/index.ts";
</script>

<template>
  <Text
    >An app to track the books I read, with notes and a reading goal for the
    year. <TextHighlight>Still in progress.</TextHighlight></Text
  >
  <Heading :level="3">Features</Heading>
  <BulletList :items="['Search by title or author', 'Notes per chapter', 'Yearly goal']" />
</template>
