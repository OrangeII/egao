# egao (つ￣ ▽ ￣)つ

A CSS library to create kaomoji, written in TypeScript

## Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd egao

# Install dependencies
npm install
```

### Development

```bash
# Start development server with live reload (TypeScript)
npm run dev

# Build TypeScript and CSS
npm run build

# Build only TypeScript
npm run build:ts
```

The dev server will start at `http://localhost:3000` and automatically:

- Watch for changes in TypeScript and CSS source files
- Rebuild TypeScript and CSS when needed
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

### Layout Classes

#### Horizontal Stacking

Use the `kaomoji` class to arrange elements horizontally:

```html
<div class="kaomoji">
  <div class="face-happy"></div>
  <div class="space"></div>
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
    <div class="space"></div>
    <div class="blush-content"></div>
  </div>
</div>
```

### Spacing Utilities

- `.space` - Base spacing (0.6em)
- `.space-double` - Double spacing (1.2em)
- `.space-triple` - Triple spacing (1.8em)
- `.space-half` - Half spacing (0.3em)
- `.space-quarter` - Quarter spacing (0.15em)

## Configuration

### Adding New Parts

Edit `src/parts.ts` to add new kaomoji components:

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
    raised: "ﾉ",
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
