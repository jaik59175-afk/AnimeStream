# AnimeStream — Phase 3

Included from Phase 2:
- Home, Search, Details, Watch, Library and History
- LocalStorage library/history
- Responsive mobile navigation
- Episode range navigation (1–100, 101–200, etc.)
- 25-episode pages inside each range

Phase 3 foundation:
- Provider contract in `src/providers/types.js`
- Demo provider adapter in `src/providers/demoProvider.js`
- UI remains provider-agnostic so an authorized catalogue API can be connected later

## Run

```powershell
npm install
npm run dev
```

The demo provider intentionally does not extract or bypass third-party streams.
