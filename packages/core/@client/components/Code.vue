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

  &--inline {
    padding: calc($DEFAULT_SPACING / 9) calc($DEFAULT_SPACING / 2);
    border-radius: $radius-small;

    color: $latte-red;
    background-color: $black-1;
  }

  &--block {
    overflow-x: auto;

    margin: $DEFAULT_SPACING 0;
    padding: calc($DEFAULT_SPACING * 3) calc($DEFAULT_SPACING * 2);
    border-radius: $radius;

    line-height: 1.5;
    white-space: pre;
    tab-size: 2;

    background-color: $gray;
  }
}
</style>
