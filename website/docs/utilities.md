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

In layered compositions, they can precisely position elements.

<div className="grid-two-column">
  <div>
    ```html title="without spaces"
    <div class="kaomoji">
      <div id="face" class="kaomoji layer bounce">
        <div class="face-happy"></div>
      </div>
      <div id="body" class="kaomoji layer bounce delay-50">
        <div class="body-round-left"></div>
        <div class="body-round-right"></div>
      </div>
      <div id="hands" class="kaomoji layer bounce delay-100">
        <div class="arms-hugging"></div>
        <div class="arms-hugging"></div>
      </div>
    </div>
    ```
  </div>

  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <div class="kaomoji" style={{ width: "6em" }}>
      <div id="face" class="kaomoji layer ">
        <div class="face-happy"></div>
      </div>
      <div id="body" class="kaomoji layer">
        <div class="body-round-left"></div>
        <div class="body-round-right"></div>
      </div>
      <div id="hands" class="kaomoji layer">
        <div class="arms-hugging"></div>
        <div class="arms-hugging"></div>
      </div>
    </div>
  </div>

  <div>
    ```html title="with spaces"
    <div class="kaomoji">
      <div id="face" class="kaomoji layer bounce">
      <div class="space-1"></div>
        <div class="face-happy"></div>
      </div>
      <div id="body" class="kaomoji layer bounce delay-50">
        <div class="body-round-left"></div>
        <div class="space-3"></div>
        <div class="space-0-5"></div>
        <div class="body-round-right"></div>
      </div>
      <div id="hands" class="kaomoji layer bounce delay-100">
        <div class="space-0-25"></div>
        <div class="arms-hugging"></div>
        <div class="space-2"></div>
        <div class="space-1"></div>
        <div class="arms-hugging"></div>
      </div>
    </div>
    ```
  </div>
  
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <div class="kaomoji" style={{ width: "6em" }}>
      <div id="face" class="kaomoji layer">
        <div class="space-1"></div>
        <div class="face-happy"></div>
      </div>
      <div id="body" class="kaomoji layer ">
        <div class="body-round-left"></div>
        <div class="space-3"></div>
        <div class="space-0-5"></div>
        <div class="body-round-right"></div>
      </div>
      <div id="hands" class="kaomoji layer">
        <div class="space-0-25"></div>
        <div class="arms-hugging"></div>
        <div class="space-2"></div>
        <div class="space-1"></div>
        <div class="arms-hugging"></div>
      </div>
    </div>
  </div>
</div>

## Flipping

These utility classes allow you to flip elements horizontally or vertically.

### Classes

| Class Name | Description                    |
| ---------- | ------------------------------ |
| `flip-h`   | Flips an element horizontally. |
| `flip-v`   | Flips an element vertically.   |

### Example

This is useful when a kaomoji part is only available for one side.

<div className="grid-two-column">
  <div>
    ```html
    <div class="kaomoji">
      <div class="arms-hugging flip-h"></div>
      <div class="space-quarter"></div>
      <div class="face-happy"></div>
      <div class="space-quarter"></div>
      <div class="arms-hugging"></div>
    </div>
    ```
  </div>

  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <div class="kaomoji">
      <div class="arms-hugging flip-h"></div>
      <div class="space-quarter"></div>
      <div class="face-happy"></div>
      <div class="space-quarter"></div>
      <div class="arms-hugging"></div>
    </div>
  </div>
</div>
