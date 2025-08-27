---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

Welcome to **Egao**, a CSS library to create kaomoji.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

<Tabs>
<TabItem value="npm" label="npm">

You can install egao via npm.

```bash
npm install egao
```

Then you can import it css files.

```css
@import url("node_modules/egao/dist/egao.css");
```

</TabItem>
<TabItem value="cdn" label="CDN">

You can use the unpkg CDN to include egao directly in your HTML.

```html
<link rel="stylesheet" href="https://unpkg.com/egao" />
```

</TabItem>
</Tabs>

## Basic Usage

The `kaomoji` class will stack elements horizontally.

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginTop: "1rem",
  }}
>
  <div>
    ```html
    <div class="kaomoji">
      <div class="body-round-left"></div>
      <div class="arms-hugging"></div>
      <div class="face-happy"></div>
      <div class="body-round-right"></div>
      <div class="arms-hugging"></div>
    </div>
    ```
  </div>
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <div className="kaomoji">
      <div className="body-round-left"></div>
      <div className="arms-hugging"></div>
      <div className="face-happy"></div>
      <div className="body-round-right"></div>
      <div className="arms-hugging"></div>
    </div>
  </div>
</div>

## Layering elements

You can use the `layer` class to overlap elements.

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginTop: "1rem",
  }}
>
  <div>
    ```html
    <div class="kaomoji">
      <div class="body-round-left"></div>
      <div class="arms-hugging"></div>
      <div class="kaomoji">
        <div class="face-happy"></div>
        <div class="kaomoji layer">
          <div class="blush"></div>
          <div class="space-1"></div>
          <div class="blush"></div>
        </div>
      </div>
      <div class="body-round-right"></div>
      <div class="arms-hugging"></div>
    </div>
    ```
  </div>
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <div className="kaomoji">
      <div className="body-round-left"></div>
      <div className="arms-hugging"></div>
      <div className="kaomoji">
        <div className="face-happy"></div>
        <div className="kaomoji layer">
          <div className="blush"></div>
          <div className="space-1"></div>
          <div className="blush"></div>
        </div>
      </div>
      <div className="body-round-right"></div>
      <div className="arms-hugging"></div>
    </div>
  </div>
</div>

## Gouping elements

`kaomoji` and `layer` can be combined to create animation groups.

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginTop: "1rem",
  }}
>
  <div>
    ```html
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
  </div>
</div>

## Styling elements

Of course you can style and animate individual elements as well.

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginTop: "1rem",
  }}
>
  <div>
    ```html
    <div class="kaomoji">
      <div class="body-round-left"></div>
      <div class="arms-hugging attack"></div>
      <div class="kaomoji">
        <div class="face-happy"></div>
        <div class="kaomoji layer">
          <div class="blush" style="color: salmon"></div>
          <div class="space-1"></div>
          <div class="blush" style="color: salmon"></div>
        </div>
      </div>
      <div class="body-round-right"></div>
      <div class="arms-hugging attack delay-70"></div>
      <div class="stagger">🥁</div>
    </div>
    ```
  </div>
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <div class="kaomoji">
      <div class="body-round-left"></div>
      <div class="arms-hugging attack"></div>
      <div class="kaomoji">
        <div class="face-happy"></div>
        <div class="kaomoji layer">
          <div class="blush" style={{ color: "salmon" }}></div>
          <div class="space-1"></div>
          <div class="blush" style={{ color: "salmon" }}></div>
        </div>
      </div>
      <div class="body-round-right"></div>
      <div class="arms-hugging attack delay-70"></div>
      <div class="stagger">🥁</div>
    </div>
  </div>
</div>
Note this library doesn't provide styles or animations so you'll need to add your
own.
<span class="kaomoji">
  <span class="body-round-left"></span>
  <span class="face-smile-awkward"></span>
  <span class="space-0-25"></span>
  <span class="sweat"></span>
  <span class="space-0-25"></span>
  <span class="body-round-right"></span>
</span>
