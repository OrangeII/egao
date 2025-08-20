# Migration from Eleventy to Docusaurus

## What's Changed

- **New Documentation Site**: The documentation has been migrated from Eleventy to Docusaurus
- **Location**: Documentation files are now in the `website/` directory
- **New Scripts**: Added npm scripts to manage the Docusaurus site

## New Directory Structure

```
website/                    # Docusaurus documentation site
├── docs/                  # Documentation pages
│   ├── getting-started.md # Getting started guide
│   └── parts.md          # Kaomoji parts reference
├── src/
│   └── components/       # React components
├── static/
│   └── css/             # Static CSS files
└── docusaurus.config.ts # Site configuration
```

## Available Scripts

- `npm run docs:start` - Start the development server
- `npm run docs:build` - Build the documentation site for production
- `npm run docs:serve` - Serve the built site locally
- `npm run docs:dev` - Build the library and start the docs server
- `npm run sync-docs-css` - Copy the built CSS to the documentation site

## Migration Benefits

1. **Better Developer Experience**: Hot reloading, better search, and modern tooling
2. **React Components**: Can create interactive documentation with React
3. **Better SEO**: Docusaurus provides better SEO out of the box
4. **GitHub Pages Ready**: Easy deployment to GitHub Pages
5. **Versioning**: Built-in support for documentation versioning
6. **Mobile Responsive**: Better mobile experience

## Development Workflow

1. Make changes to your CSS library in `src/`
2. Run `npm run build` to build the library and sync CSS
3. Run `npm run docs:start` to start the documentation server
4. View your changes at `http://localhost:3000/egao/`

## Deployment

For GitHub Pages deployment:

1. Build the site: `npm run docs:build`
2. The built files will be in `website/build/`
3. Deploy using GitHub Actions or manually push to `gh-pages` branch

## Configuration

The site is configured in `website/docusaurus.config.ts` with:

- Site title: "Egao"
- Base URL: "/egao/" (for GitHub Pages)
- Repository: "OrangeII/egao"

## Customization

- **Styling**: Edit `website/src/css/custom.css`
- **Components**: Add React components in `website/src/components/`
- **Pages**: Add new pages in `website/src/pages/`
- **Documentation**: Add new docs in `website/docs/`
