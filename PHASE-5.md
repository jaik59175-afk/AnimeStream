# AnimeStream — Phase 5

Phase 5 keeps the Phase 4 visual system and adds a live anime metadata layer.

## Added
- Live top-anime catalogue using Jikan API
- Live anime search
- Live anime details
- Paginated episode metadata loaded on demand
- Episode API pages keep long-running shows from rendering hundreds of episodes at once
- Local Library + History preserved
- Provider-neutral watch page placeholder
- Loading, retry and API error states

## Run
```powershell
npm install
npm run dev
```

The browser needs internet access for live catalogue/search data. If the API is unavailable, the Home page falls back to a small demo catalogue.

## Provider boundary
The watch page intentionally does not include third-party stream extraction or ad/redirect bypass logic. A future authorized provider can be connected through the app's provider boundary.
