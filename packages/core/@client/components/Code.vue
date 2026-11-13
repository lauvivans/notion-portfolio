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
@mixin syntax(
  $keyword,
  $string,
  $number,
  $comment,
  $function,
  $type,
  $tag,
  $attribute,
  $builtin,
  $meta
) {
  :deep(.hljs-keyword),
  :deep(.hljs-selector-tag) {
    color: $keyword !important;
  }

  :deep(.hljs-string),
  :deep(.hljs-regexp) {
    color: $string !important;
  }

  :deep(.hljs-number),
  :deep(.hljs-literal) {
    color: $number !important;
  }

  :deep(.hljs-comment) {
    color: $comment !important;
    font-style: italic;
  }

  :deep(.hljs-title),
  :deep(.hljs-section) {
    color: $function !important;
  }

  :deep(.hljs-type),
  :deep(.hljs-selector-class),
  :deep(.hljs-attr) {
    color: $type !important;
  }

  :deep(.hljs-name) {
    color: $tag !important;
  }

  :deep(.hljs-attribute),
  :deep(.hljs-variable),
  :deep(.hljs-params) {
    color: $attribute !important;
  }

  :deep(.hljs-built_in) {
    color: $builtin !important;
  }

  :deep(.hljs-meta) {
    color: $meta !important;
  }
}

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

    @include syntax(
      $latte-mauve,
      $latte-green,
      $latte-peach,
      $latte-overlay0,
      $latte-blue,
      $latte-yellow,
      $latte-blue,
      $latte-maroon,
      $latte-red,
      $latte-pink
    );
  }
}

:global(.dark-theme) .code--block,
:global(.cat-mocha) .code--block {
  @include syntax(
    $mocha-mauve,
    $mocha-green,
    $mocha-peach,
    $mocha-overlay0,
    $mocha-blue,
    $mocha-yellow,
    $mocha-blue,
    $mocha-maroon,
    $mocha-red,
    $mocha-pink
  );
}
</style>
