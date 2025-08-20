---
id: getting-started
title: Getting Started
sidebar_position: 1
---

# Getting Started

Welcome to **Egao**, a CSS library to create kaomoji.

## Installation

Include the CSS file in your HTML:

```html
<link rel="stylesheet" href="path/to/egao.css" />
```

## Basic Usage

<div className="star"></div>

The `kaomoji` class will stack elements horizontally.

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
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
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="kaomoji">
      <div className="body-round-left"></div>
      <div className="arms-hugging"></div>
      <div className="face-happy"></div>
      <div className="body-round-right"></div>
      <div className="arms-hugging"></div>
    </div>
  </div>
</div>

## Layering Elements

You can use the `layer` class to overlap elements.

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem'}}>
  <div>
    ```html
    <div class="kaomoji">
      <div class="body-round-left"></div>
      <div class="arms-hugging"></div>
      <div class="kaomoji">
        <div class="face-happy"></div>
        <div class="kaomoji layer">
          <div class="blush"></div>
          <div class="space"></div>
          <div class="blush"></div>
        </div>
      </div>
      <div class="body-round-right"></div>
      <div class="arms-hugging"></div>
    </div>
    ```
  </div>
  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="kaomoji">
      <div className="body-round-left"></div>
      <div className="arms-hugging"></div>
      <div className="kaomoji">
        <div className="face-happy"></div>
        <div className="kaomoji layer">
          <div className="blush"></div>
          <div className="space"></div>
          <div className="blush"></div>
        </div>
      </div>
      <div className="body-round-right"></div>
      <div className="arms-hugging"></div>
    </div>
  </div>
</div>
