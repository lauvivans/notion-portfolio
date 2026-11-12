<script setup lang="ts">
// Site-only block: the library has no code block yet.
// `callout` reuses the theme background the library sets for callouts.
defineProps<{ code: string }>();
</script>

<template>
  <pre class="callout code-block"><code>{{ code }}</code></pre>
</template>

<style scoped lang="scss">
.code-block {
  overflow-x: auto;

  padding: calc($DEFAULT_SPACING * 2);

  font-family: $mono;
  font-size: $fs-small;
  white-space: pre;
}
</style>
