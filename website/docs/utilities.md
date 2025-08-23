---
id: utilities
title: Utilities
sidebar_position: 2
---

import { SpacingTable } from '@site/src/components/SpacingTable';

# Utilities

## Spacing

These utility classes add horizontal space between elements. The amount of space is relative to the `--base-space` CSS variable, which defaults to `0.6em`.

### Classes

<SpacingTable />

### Example

```html
<div class="kaomoji">
  <div class="arms-hugging"></div>
  <div class="space-quarter"></div>
  <div class="body-round-left"></div>
  <div class="face-happy"></div>
  <div class="body-round-right"></div>
  <div class="space-quarter"></div>
  <div class="arms-hugging"></div>
</div>
```

In layered compositions, they can precisely position elements.

```html
<div class="kaomoji" style="width: 6em;">
  <div id="face" class="kaomoji layer">
    <!-- Use space to center the face -->
    <div class="space"></div>
    <div class="face-happy"></div>
  </div>
  <div id="body" class="kaomoji layer">
    <div class="body-round-left"></div>
    <!-- Use multiple spaces to separate body parts -->
    <div class="space-triple"></div>
    <div class="space-half"></div>
    <div class="body-round-right"></div>
  </div>
</div>
```

## Flipping

These utility classes allow you to flip elements horizontally or vertically. This is useful for creating symmetrical kaomoji by reusing elements.

### Classes

- `.flip-h`: Flips an element horizontally.
- `.flip-v`: Flips an element vertically.

### Example

Instead of creating separate classes for left and right parts (e.g., `arm-left`, `arm-right`), you can reuse a single class and flip it.

```html
<div class="kaomoji">
  <!-- Left arm -->
  <div class="arms-up"></div>
  <div class="space-quarter"></div>
  <!-- Face -->
  <div class="face-happy"></div>
  <div class="space-quarter"></div>
  <!-- Right arm (flipped version of the left) -->
  <div class="arms-up flip-h"></div>
</div>
```
