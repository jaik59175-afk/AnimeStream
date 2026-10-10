# AnimeStream Phase 7.3

Fixes based on Phase 7.2 feedback:
- Player height is capped to fit the laptop viewport without requiring fullscreen.
- Space toggles play/pause while the watch page is active and prevents browser page-down behavior.
- Left/right arrow keys seek -/+10 seconds anywhere on the watch page, except while typing or using form controls.
- Seek uses the video's actual duration when available and works even before duration state updates.
- M toggles mute.

Run with `npm install` then `npm run dev`.
