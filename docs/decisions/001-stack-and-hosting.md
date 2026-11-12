# 001 · Stack and hosting

- **Date:** 2026-11-07
- **Origin:** maintenance plan for the rename to Kami ([#53](https://github.com/lauvivans/kami/issues/53), [#58](https://github.com/lauvivans/kami/issues/58))
- **Status:** accepted

## Question

What is Kami built with, how does it reach the people who use it, and where does the demo run?

## Short answer

- **Vue 3 + Vite in library mode.** The library is written in TypeScript with Vue single-file components and Sass, and built into ES modules, type declarations and one CSS file.
- **Distributed as an npm package.** `vue` and `vue-router` stay out of the bundle, so the portfolio and the library share one copy of each. Pinia is bundled into the package, and a portfolio reads the store through `useStore`.
- **A CLI creates new portfolios.** `create-kami` copies `template/`, installs its dependencies and then installs the library.
- **Releases with semantic-release.** A merge into `main` runs the release workflow, which reads the Conventional Commits, bumps the version, writes `CHANGELOG.md`, publishes to npm and creates the GitHub release.
- **The documentation site and the demo run on Cloudflare Pages, at kami.arualvivan.com.** The site is the app in `src/`, built with Kami itself. The demo is a section of the same site (`/demo`), so both share one build, one sidebar and one set of tabs. It is a static build, so it needs no server. Kami doesn't use the EC2, which only Yoko uses.

## Why

- **The content is static.** Each page is a Vue component that the portfolio owner writes, listed in a metadata object. There is no backend, no database and no request at runtime, so a static host is enough.
- **A package keeps updates in one place.** A portfolio created with the CLI gets new components and fixes with an `npm update`, without copying code by hand.
- **Same platform as Gaku and Haru.** The Cloudflare account and the deploy setup already exist there.
- **One site for docs and demo.** Two Kami apps on the same domain would share the `kami-*` keys in localStorage, so a tab opened in the docs would show up in the demo and lead to a 404. A demo section inside the docs avoids that without changing the library.
- **The docs use the library they describe.** Every page of the site is a Kami page, so a broken block shows up in the docs before it reaches a portfolio.
- **semantic-release fits a library.** Every merge into `main` produces a version that follows the commits, so a breaking change can't go out as a patch by accident.

## Consequences

- Anything the library exports is public API. Removing or renaming an export, a prop or a CSS class used by portfolios is a breaking change and needs a major version.
- The template depends on the published package, so a change in the library reaches the template only after a release.
- The template has its own `package.json` and lockfile, kept up to date separately from the root (#68).
- The demo deploy and the move of the release workflow to the Yoko model are in [#58](https://github.com/lauvivans/kami/issues/58): `develop` deploys staging, `main` releases the package and deploys production.
