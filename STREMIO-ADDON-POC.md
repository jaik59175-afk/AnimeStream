# AnimeStream: Stremio addon proof of concept

## Configure

1. Start AnimeStream as usual (`npm install` if dependencies are not installed, then `npm run dev`).
2. Open **Settings** → **Stremio-compatible addon**.
3. Enter the base URL of a Stremio-compatible addon that you are authorized to use. URLs ending in `/manifest.json` are also accepted. The addon must allow browser requests from the AnimeStream origin with CORS.
4. Select **Test manifest**, then **Save addon**.
5. Open an anime's watch page and choose **Find sources**. Select a catalogue match, then choose one of the returned direct HTTP(S) streams.

The configured addon URL is stored in this browser's localStorage. Use **Remove** to clear it.

## Current boundaries

- This is a generic Stremio addon client, not a native port of the Anikage CloudStream `.cs3` plugin.
- The main catalogue and episode metadata still come from Jikan.
- The addon must expose a searchable catalogue and a stream resource for this flow to work.
- Only direct HTTP(S) stream URLs are offered to the browser player. Torrent/infoHash-only items are skipped. No stream extraction, DRM bypass, or protected-content circumvention is implemented.
- Browser support depends on the returned format and codec. A URL ending in `.m3u8` is labelled HLS, but native HLS playback is not available in every desktop browser.
- Language labels are inferred only from the addon stream's own name/title/description. If the addon does not label audio language, AnimeStream displays **Language not specified**; it cannot inspect a stream and guarantee its language.
- This environment could syntax-check the edited JavaScript/JSX and run a mocked adapter test, but it could not complete a full Vite production build because the uploaded `node_modules` was Windows-specific and package installation timed out. Run `npm ci` and `npm run build` on the Windows machine to verify locally.
