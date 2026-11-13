<script setup lang="ts">
// Inline: <Code inline>npm run dev</Code>
// Block: <Code>{{ sample }}</Code>. Pass multi-line code through {{ }},
// since Vue collapses the whitespace of text written in the slot.
const props = defineProps<{ inline?: boolean }>();
</script>

<template>
  <code v-if="props.inline" class="code code--inline"><slot /></code>
  <pre v-else class="code code--block"><code><slot /></code></pre>
</template>

<style scoped lang="scss">
.code {
  font-family: $mono;
  font-size: $fs-small;

  background-color: $gray;

  &--inline {
    padding: 0 calc($DEFAULT_SPACING / 3);
  }

  &--block {
    overflow-x: auto;

    padding: calc($DEFAULT_SPACING * 2);

    white-space: pre;
  }
}
</style>
