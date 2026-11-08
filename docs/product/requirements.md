# Product requirements

What Kami offers and the rules it follows.

## General

- Kami is a Vue library for building a portfolio that looks and works like Notion. The idea came from Nitin Ranganath's VS Code Portfolio.
- A portfolio is a Vue app. Its owner writes each page as a Vue component and lists the pages in a metadata object (`IMetadata`). There is no CMS and no backend: the content lives in the portfolio's code.
- The library is in English. See [decision 002](../decisions/002-language-policy.md).
- It works on a phone and on a computer. On small screens the tabs move to the bottom of the screen.
- Preferences (theme, open tabs, sidebar state and page settings) are kept in the browser's local storage, with keys prefixed `kami-`. Nothing is sent to a server.

## Creating a portfolio

- `npx create-kami <name>` creates a folder with the template, installs its dependencies and installs the library. The name defaults to `my-portfolio`.
- If the folder already exists, the CLI stops with an error and changes nothing.
- The template comes with one example page, a banner and an icon, so `npm run dev` shows a working portfolio right away.

## Pages and metadata

- `metadata.user` holds the author's name and social handle, shown at the top of the sidebar.
- `metadata.pages` lists the pages by id. Each page (`PageInfo`) has a path, a title and its component, and can have:
  - a banner and an icon, each with the image path and optional author and link for the credit;
  - `pages`, the ids of its sub-pages, and `parentPage`, the id of its parent;
  - `isHomepage`, for the page shown at `/`;
  - `databaseInfo`, properties shown under the title (an icon and one or more values), like the properties of a Notion database item.
- `metadata.favorites` lists the page ids shown under Favorites in the sidebar.
- Every page shows its banner, icon, title and properties above its content, through `MainLayout`.
- A path that matches no page shows the 404 page, with a button back to the previous page.

## Layout

- **Sidebar (`Aside`):** the author, Search and Settings, then two groups of pages: Favorites and Private. Pages with sub-pages expand to show them. The sidebar can be pinned open or closed, and when closed it opens on hover.
- **Tabs (`Tabs`):** like Notion Desktop. A visitor can open up to 10 tabs, switch between them and close them. The open tabs and the active one survive a reload.
- **Header (`Header`):** the breadcrumb of the current page and a button that opens the page settings.
- **Search:** the entry in the sidebar opens an empty modal. Search isn't built yet.

## Themes and settings

- Four themes, picked in Settings in the sidebar: Light (default), Dark, Catppuccin Latte and Catppuccin Mocha (shown as "Cat Latte" and "Cat Mocha"). The choice applies to the whole portfolio.
- Each page has its own settings, from the header button:
  - font: Default (Roboto), Serif (Roboto Serif) or Mono (Roboto Mono);
  - small text, on or off;
  - full width, on or off.

## Blocks

The components a page uses for its content, named after Notion's blocks:

- **Text:** `Text`, `Heading` (levels 1 to 4) and `TextHighlight`.
- **Callout:** a box with an emoji and text.
- **Lists:** `BulletList` and `BulletItem`, `ToDoList` and `ToDoItem` (with a checked state), and `ToggleList`, which shows and hides its content with the icons given to it.
- **Layout:** `Columns` with 2 to 5 `Column`s and an optional size for each, `Divider` and `Empty` (blank space).
- **Links:** `Link` (inline), `LinkMention` (an emoji and the name of a page or an external link) and `Bookmark` (a card with title, subtitle and URL).
- **Media:** `Image`.
- **Database:** a list of pages shown as a gallery of cards. Clicking a card opens the page in a modal, with a link to its full page. The card preview can be the page's cover. The table layout isn't built yet (#49).
- **Loader:** a loading indicator.

## Public API

- The package exports the layout components, the blocks, `MainLayout`, `NotFoundPage`, `useStore`, `piniaInstance`, `useAside`, `useDisplay`, `isTouchDevice`, and the types `IMetadata` and `PageInfo`. The full list is in `packages/core/index.ts`.
- The styles ship in one CSS file, `dist/kami.css`, which the portfolio imports once.
- Changing any of these in a way that breaks an existing portfolio needs a major version. See [decision 001](../decisions/001-stack-and-hosting.md).
