# MK Schicksale Content Studio

Sanity backend for MK Schicksale

## Tech Stack

- **Sanity Studio v4** - Content management system
- **TypeScript** - Type-safe development
- **React 18** - UI framework

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy studio
npm run deploy
```

## Environment Variables

- `SANITY_STUDIO_GOOGLE_MAPS_API_KEY` - Google Maps API key for location input

## Migration Notes

This project was migrated from Sanity v2 to v4:
- Replaced `sanity.json` with `sanity.config.ts`
- Updated all plugins to v4 compatible versions
- Converted all JavaScript files to TypeScript
- Updated desk structure and schema APIs
- Migrated from parts-based system to direct imports
- Updated React to v18
- Removed deprecated dependencies
