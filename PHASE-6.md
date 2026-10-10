# AnimeStream — Phase 6

Phase 6 hardens the live catalogue and rebuilds the long-running-series episode browser.

## Added
- Robust Jikan request queue with request spacing, retry/backoff and timeout handling
- Development proxy for Jikan so localhost requests are more reliable
- Episode-page caching so switching back to a range does not refetch it
- 100-episode range selector with previous/next controls
- Proper support for shows with hundreds or thousands of episodes
- Clear page/range loading and error states
- Fixed npm dependency mismatch by removing an unused `latest` React Vite plugin dependency
- Phase 5 visual system and local Library/History preserved

## Run
```powershell
npm install
npm run dev
```

Then open `http://localhost:5173/`.

## Playback boundary
The watch screen remains provider-neutral. This phase does not add third-party stream extraction, ad/redirect bypass, or unauthorized playback.
