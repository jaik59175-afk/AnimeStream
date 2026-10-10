# Phase 9.1 — Repository-first setup

## What changed

- First-time launch now opens a repository setup screen instead of the AnimeStream home page.
- The repository URL defaults to the Phisher CloudStream `repo.json` URL and can be edited.
- The app fetches the repository manifest and its `pluginLists`, then displays the extensions found in those lists.
- Anikage is preselected when its name appears in the fetched extension list.
- The user must choose an extension and confirm before entering the home page.
- Repository and selected-extension details are saved in local browser storage. The Repositories navigation item and Settings page allow the user to revisit the setup.
- The UI is responsive for desktop Chrome and Android Chrome.

## Important runtime limitation

A CloudStream repository manifest only describes repositories and their plugins. It does not contain an anime catalogue. The Anikage `.cs3` package targets CloudStream's runtime and cannot execute inside a React browser app by importing the package. Therefore this phase implements the requested repository → extension selection → app flow, but does not yet make Anikage's own catalogue or playback available. Until a compatible CloudStream provider runtime/bridge is connected, the visible catalogue remains Jikan metadata. The app displays this limitation rather than claiming Anikage is already providing the anime list.

## Run on Windows

1. Extract the project ZIP.
2. Install a current Node.js LTS version.
3. Open a terminal in the `AnimeStream` project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the localhost URL printed by Vite in Chrome.

For Android Chrome, the development server must be reachable over the same network or the deployed app must be served over HTTPS. PWA installation requires a supported browser and secure context.
