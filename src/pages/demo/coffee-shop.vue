<script setup lang="ts">
import { Text, Heading, ToDoList, Bookmark } from "@core/index.ts";
import type { PageInfo } from "@core/index.ts";

// The database gallery renders this page in its cards and passes these.
defineProps<{ page?: PageInfo; hideDatabase?: boolean }>();
</script>

<template>
  <Text
    >A website for a neighborhood coffee shop: the menu, opening hours and a
    page for events.</Text
  >
  <Heading :level="3">Tasks</Heading>
  <ToDoList
    :items="[
      { name: 'Menu page', isChecked: true },
      { name: 'Opening hours', isChecked: true },
      { name: 'Events calendar', isChecked: false },
    ]"
  />
  <Heading :level="3">Links</Heading>
  <Bookmark title="Vue.js" subtitle="The framework used to build it" link="https://vuejs.org/" />
</template>
