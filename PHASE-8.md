# AnimeStream — Phase 8

## What's new
- **Continue Watching** opens the last watched episode directly from the home row.
- **Real progress indicators** show the saved percentage and update as the demo player plays.
- **Resume controls** on the anime details page return to the most recently watched episode.
- **Season & related-title links** use Jikan relation metadata to show prequels, sequels, parent stories and side stories.
- **PWA foundation** adds a web manifest, app icon, production-only service worker registration and an offline app-shell fallback.
- **Install prompt** appears when the browser exposes its install prompt.
- **Mobile polish** for the install control and related-title cards.

## Install/update
1. Extract the ZIP.
2. Replace the contents of your existing `AnimeStream` project with these files (keep a backup first).
3. In the project folder run `npm install` if needed, then `npm run dev`.
4. Open the local Vite URL as before.

PWA installation is available only when browser requirements are met (normally HTTPS, or localhost in development). The service worker is intentionally registered in production builds only, to avoid stale caching while using Vite's development server. Offline mode caches the app shell, not Jikan catalogue data or video streams.

## Playback note
The player continues to use the included CC0 demo video. This phase does not add unauthorized stream extraction; real playback can be connected to a source the operator is authorized to use.
