# AnimeStream — Phase 7

## Watch Experience + Provider Boundary

Phase 7 upgrades the watch page without bundling third-party stream extraction.

### Added
- Real HTML5 video player shell using a CC0 demo video.
- Play/pause, ±10 second seek, mute, progress bar, time display and fullscreen controls.
- Episode previous/next controls.
- Watch-side episode browser with 100-episode ranges.
- Mobile episode drawer.
- Local per-anime/per-episode playback position storage.
- Episode selection remains connected to local watch history.
- `src/providers.js` defines a provider-neutral playback contract and demo playback source.
- Settings now explain the demo/authorized playback boundary.

### Legal/architecture boundary
The player is intentionally provider-neutral. It does not extract third-party streams, bypass ads/redirects, or ship unauthorized playback sources. A future authorized provider can return a video URL and MIME type to the player contract.
