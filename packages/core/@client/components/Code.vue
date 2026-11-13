<script setup lang="ts">
// Inline: <Code inline>npm run dev</Code>
// Block: <Code lang="ts">{{ sample }}</Code>. Pass multi-line code through
// {{ }}, since Vue collapses the whitespace of text written in the slot.
// Without `lang`, the block shows plain text.
import { useSlots } from "vue";
import { highlight, type CodeLanguage } from "@core/util/highlight";

const props = defineProps<{ inline?: boolean; lang?: CodeLanguage }>();
const slots = useSlots();

function slotText(): string {
  return (slots.default?.() ?? [])
    .map((node) => (typeof node.children === "string" ? node.children : ""))
    .join("");
}
</script>

<template>
  <code v-if="props.inline" class="code code--inline"><slot /></code>
  <pre
    v-else-if="props.lang"
    class="code code--block"
  ><code v-html="highlight(slotText(), props.lang)"></code></pre>
  <pre v-else class="code code--block"><code><slot /></code></pre>
</template>

<style scoped lang="scss">
.code {
  font-family: $mono;
  font-weight: $fw-500;
  font-size: $fs-small;

  &--inline {
    padding: calc($DEFAULT_SPACING / 9) calc($DEFAULT_SPACING / 2);
    border-radius: $radius-small;

    color: $latte-red;
    background-color: $black-1;
  }

  &--block {
    --code-keyword: #{$code-keyword};
    --code-string: #{$code-string};
    --code-function: #{$code-function};
    --code-number: #{$code-number};
    --code-comment: #{$code-comment};

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

// GitHub's code colors. The dark themes force `span` colors with
// !important, so these need it too.
.code--block {
  :deep(.hljs-keyword),
  :deep(.hljs-selector-tag),
  :deep(.hljs-name) {
    color: var(--code-keyword) !important;
  }

  :deep(.hljs-string),
  :deep(.hljs-regexp),
  :deep(.hljs-attribute) {
    color: var(--code-string) !important;
  }

  :deep(.hljs-title),
  :deep(.hljs-section),
  :deep(.hljs-built_in) {
    color: var(--code-function) !important;
  }

  :deep(.hljs-number),
  :deep(.hljs-literal),
  :deep(.hljs-type),
  :deep(.hljs-attr),
  :deep(.hljs-selector-class) {
    color: var(--code-number) !important;
  }

  :deep(.hljs-comment),
  :deep(.hljs-meta) {
    color: var(--code-comment) !important;
  }

  :deep(.hljs-comment) {
    font-style: italic;
  }
}
</style>

<style lang="scss">
// Unscoped: a scoped style can't target the theme class on <body>.
// `.code.code--block` outranks the scoped `.code--block[data-v-…]`.
.dark-theme,
.cat-mocha {
  .code.code--block {
    --code-keyword: #{$code-keyword-dark};
    --code-string: #{$code-string-dark};
    --code-function: #{$code-function-dark};
    --code-number: #{$code-number-dark};
    --code-comment: #{$code-comment-dark};
  }
}
</style>
