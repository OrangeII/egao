# egao (つ￣ ▽ ￣)つ

A CSS library to create kaomoji.

## Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd egao

# Install dependencies
npm install

# Install website dependencies (for documentation)
npm run docs:install
```

### Usage

Include the built CSS file in your HTML:

```html
<link rel="stylesheet" href="dist/egao.css" />
```

### Development

```bash
# Start development server with live reload and documentation
npm run dev
```

The dev server will start the documentation website at `http://localhost:3000` and automatically:

- Watch for changes in TypeScript source files and rebuild
- Watch for changes in CSS and parts definitions
- Sync generated CSS and data with the documentation site
- Refresh the browser on changes

## Usage

### Basic Kaomoji Structure

```html
<div class="kaomoji">
  <div class="body-round-left"></div>
  <div class="arms-hugging"></div>
  <div class="face-happy"></div>
  <div class="body-round-right"></div>
  <div class="arms-hugging"></div>
</div>
```

This creates: `(つ￣ ▽ ￣)つ`

CSS classes are automatically generated from the parts definition in `src/parts.ts`. The library uses a TypeScript-based build system that processes the parts configuration and generates corresponding CSS classes using PostCSS plugins.

### Layout Classes

#### Horizontal Stacking

Use the `kaomoji` class to arrange elements horizontally:

```html
<div class="kaomoji">
  <div class="face-happy"></div>
  <div class="space-1"></div>
  <div class="face-happy"></div>
</div>
```

#### Layering

Use the `layer` class to overlap elements:

```html
<div class="kaomoji">
  <div class="face-happy"></div>
  <div class="kaomoji layer">
    <div class="blush-content"></div>
    <div class="space-1"></div>
    <div class="blush-content"></div>
  </div>
</div>
```

## Configuration

### Adding New Parts

Edit `src/parts.ts` to add new kaomoji components. The build system will automatically generate corresponding CSS classes:

```typescript
const parts: Parts = {
  body: {
    round: {
      left: "(",
      right: ")",
    },
  },
  arms: {
    hugging: "つ",
  },
  face: {
    happy: "￣ ▽ ￣",
  },
};
```

This automatically generates CSS classes like:

- `.body-round-left` → `(`
- `.body-round-right` → `)`
- `.arms-hugging` → `つ`
- `.face-happy` → `￣ ▽ ￣`

### Build System

The project uses a custom PostCSS-based build system:

- **TypeScript compilation**: Source files in `src/` are compiled to `build/`
- **CSS generation**: PostCSS plugins (`buildPartClasses` and `buildSpacingClasses`) process `src/main.css`
- **Output**: Final CSS is generated in `dist/egao.css`
- **Documentation sync**: Generated CSS and part data are automatically synced to the documentation website

### Architecture

- `src/parts.ts` - Main parts configuration
- `src/buildPartClasses.ts` - PostCSS plugin to generate part classes
- `src/buildSpacingClasses.ts` - PostCSS plugin to generate spacing utilities
- `src/main.css` - Base CSS that gets processed with generated classes
- `postcss.config.js` - PostCSS configuration with custom plugins
- `website/` - Docusaurus documentation site with live examples
