# AnimeStream Phase 6.1

## Fix: Jikan proxy timeout

The previous Phase 6 used a Vite development proxy for Jikan. On some networks the local Node/Vite process cannot reach `api.jikan.moe`, producing `ETIMEDOUT` proxy errors.

This build removes the Vite proxy and lets the browser request the public Jikan API directly. The app retains request spacing, retry/backoff, timeout handling, and episode caching.

If the browser itself cannot reach Jikan, the app should show its catalogue fallback/error state instead of crashing.
