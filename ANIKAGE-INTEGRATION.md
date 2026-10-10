# Anikage integration status

## Current status

AnimeStream now has an optional frontend adapter for a compatible playback bridge and a per-anime/per-episode field for direct video URLs you are authorized to use. This is **not a native Anikage integration**.

A CloudStream `.cs3` package targets the CloudStream runtime; React/Vite cannot load that package as a browser module. A compatible bridge or a license-compliant port of the extension's source is required before Anikage can provide playback in this web app.

## Optional bridge contract

Copy `.env.example` to `.env.local` and set `VITE_ANIKAGE_BRIDGE_URL` to the base URL of a bridge you control. The frontend requests:

`GET {VITE_ANIKAGE_BRIDGE_URL}/playback?animeId=...&title=...&episode=...`

Expected JSON response:

```json
{
  "url": "https://authorized.example/video.mp4",
  "type": "video/mp4"
}
```

The bridge must return a media URL that the user is authorized to access and that the browser can play. It must implement appropriate CORS headers for the frontend origin. This project does not include a bridge server or third-party stream extraction.

## Manual source option

On the watch page, enter a direct HTTP(S) media URL that you are authorized to use and select **Save source**. It is saved locally for the current anime ID and episode number. **Clear source** removes that saved URL. The CC0 flower video remains a demo only when no bridge is configured and no custom URL is saved.

## Repositories to inspect before claiming full integration

- https://github.com/phisher98/cloudstream-extensions-phisher
- https://raw.githubusercontent.com/phisher98/cloudstream-extensions-phisher/refs/heads/builds/repo.json
- https://github.com/recloudstream/extensions
- https://raw.githubusercontent.com/recloudstream/extensions/master/repo.json

Before implementing a native source adapter, verify Anikage's current source, license, runtime dependencies, and playback behavior. Do not infer compatibility from the published `.cs3` package alone.

## Stremio-compatible addon proof of concept

The web app can optionally connect to a user-supplied Stremio-compatible addon from **Settings → Stremio-compatible addon**. The frontend validates the addon's `manifest.json`, searches declared catalogues, and requests streams for a selected catalogue item. It only offers direct HTTP(S) URLs to the HTML video player; torrent/infoHash-only entries are intentionally skipped. The addon must permit requests from the AnimeStream origin via CORS, and its URLs must be ones the user is authorized to access.

This is a generic Stremio addon client, **not a port of the Anikage CloudStream plugin**. The Phisher `.cs3` package still cannot run inside React, and no addon URL has been preconfigured or live-tested. A source label is only used to display a language choice when the addon's own name/title/description labels it; unknown labels remain `Language not specified`.
