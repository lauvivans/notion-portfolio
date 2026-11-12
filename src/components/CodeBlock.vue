<script setup lang="ts">
// Site-only block: the library has no code block yet.
// `callout` picks up the background the dark themes set for callouts.
// The light theme sets none, so `$gray` is the base.
defineProps<{ code: string }>();
</script>

<template>
  <pre class="callout code-block"><code>{{ code }}</code></pre>
</template>

<style scoped lang="scss">
.code-block {
  overflow-x: auto;

  padding: calc($DEFAULT_SPACING * 2);

  background-color: $gray;

  font-family: $mono;
  font-size: $fs-small;
  white-space: pre;
}
</style>
