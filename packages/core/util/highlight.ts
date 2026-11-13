import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import scss from "highlight.js/lib/languages/scss";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";

// Only the core and these languages are bundled, to keep the package small.
const languages = {
  bash,
  javascript,
  json,
  scss,
  typescript,
  xml,
};

for (const [name, language] of Object.entries(languages)) {
  hljs.registerLanguage(name, language);
}

const aliases = {
  bash: "bash",
  html: "xml",
  js: "javascript",
  json: "json",
  scss: "scss",
  ts: "typescript",
  vue: "xml",
} as const;

export type CodeLanguage = keyof typeof aliases;

// highlight.js escapes the source, so the result is safe for v-html.
export function highlight(code: string, lang: CodeLanguage): string {
  return hljs.highlight(code, { language: aliases[lang] }).value;
}
