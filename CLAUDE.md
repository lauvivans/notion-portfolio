# Kami

A Vue component library for building a portfolio that looks and works like Notion: a sidebar with nested pages, tabs, themes and Notion-style blocks. It ships as an npm package with a CLI that creates a new portfolio from a template.

## Language

Everything in the repository and on GitHub is in English: code, docs, file names, issues, PRs, commits and reviews. See `docs/decisions/002-language-policy.md`.

## Structure

- `packages/core/`: the library, published to npm. `index.ts` lists everything the package exports.
  - `components/`: the layout pieces (`Aside`, `Header`, `Tabs`, settings and modals).
  - `@client/components/`: the blocks a portfolio uses inside its pages (text, heading, callout, lists, columns, database, links, image and others).
  - `store/`: the Pinia store, shared through `useStore`. `util/local-storage/` keeps theme, tabs, sidebar state and page settings in the browser.
  - `assets/scss/`: the styles. `_var.scss` holds the variables and `_theme.scss` the themes.
  - `@types/index.d.ts`: `IMetadata` and `PageInfo`, the shape a portfolio fills to describe its pages.
- `src/`: the local playground, run with `npm run dev`. It imports the library from `packages/core` through the `@core` alias.
- `template/`: the project the CLI copies. It has its own `package.json` and lockfile (#68). `gitignore` is renamed to `.gitignore` on copy, since npm drops dot-gitignore files from packages.
- `bin/cli.js`: the CLI. It copies `template/`, installs its dependencies and then the library.
- `tests/`: Vitest tests, with `tsconfig.vitest.json`.
- `docs/product/requirements.md`: what the library offers and its rules.
- `docs/decisions/`: one decision per file, numbered. Every spike ends with a file here.

## Stack

Vue 3, Vue Router, Pinia, Sass and TypeScript, built with Vite in library mode. Releases are published to npm with semantic-release. See `docs/decisions/001-stack-and-hosting.md`.

## Commands

- `npm run dev`: the playground in `src/`. Node version is in `.nvmrc`.
- `npm run build:pkg`: type check and build the package into `dist/`.
- `npm run lint`, `npm run lint:css` (fails until #75), `npm run format`, `npm test`.
- `npm run test:cli`: runs the CLI locally.

## Workflow

- **Base branch:** `develop`. PRs target it. `main` is the default branch and holds the published package.
- **Branch name:** `<type>/<issue>-kebab-case-name`.
- **Commits and PR title:** Conventional Commits. semantic-release reads them on `main` to pick the next version, so the type matters: `fix` is a patch, `feat` a minor, `!` or `BREAKING CHANGE` a major.
- **PR body:** ends with `Closes #<issue>`, also on fixes made after QA.
- **Merge:** squash into `develop`. Releases go from a `release/<version>` branch, cut from `develop`, into `main` with a merge commit (never squash). Head branches are deleted on merge, so a PR must never come straight from `develop`.
- **After a release:** semantic-release pushes a `chore(release)` commit to `main` (version and `CHANGELOG.md`), so merge `main` back into `develop` after every release. Never rebase `develop`.
- **Attribution:** no `Co-Authored-By` or "Generated with Claude Code" in commits and PRs.
- **Draft before creating:** show the full text of any issue and only create it after approval. Pull requests are opened directly; say when one is open, with its link. They are reviewed on GitHub before merge.
- **Dependencies:** every PR that adds or updates a dependency gets a supply chain check in its review (new packages in the lockfile, install scripts, `npm audit signatures`, publish dates, `npm audit`).

## Issues and board

- **Issues:** use the templates in `.github/ISSUE_TEMPLATE/` (bug, feature, chore, design, spike). The type goes in the label, not in the title. Documentation counts as `chore`.
- **Board:** "Kami" (GitHub Project #5 of `lauvivans`). Status: Backlog → Ready → In progress → In review → In staging → Done.
  - When starting an issue, move it to **In progress**.
  - When opening the PR, move it to **In review**.
  - When the PR is merged into `develop`, move it to **In staging**.
  - If QA fails, move it back to **In progress** and fix it in a new PR on the same issue.
  - The release to `main` closes the issue and moves it to **Done**. `develop` isn't the default branch, so `Closes #<issue>` only closes it once the release reaches `main`. A problem found after that is a new bug issue that links the original.

## Security

Never commit `.env` values, the npm token, GitHub tokens or Cloudflare account IDs. The `NPM_TOKEN` secret lives only in the repository settings. Vulnerabilities are reported privately, as described in `SECURITY.md`.
