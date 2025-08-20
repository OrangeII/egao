import React from "react";

// Parts data structure based on your current parts.json
const partsData = [
  {
    source: { hugging: "つ" },
    path: ["arms", "hugging"],
    cssClassName: "arms-hugging",
    exampleDiv: '<div class="arms-hugging"></div>',
  },
  {
    source: { blush: { content: "⁄ ⁄ ⁄", "white-space": "pre" } },
    path: ["blush"],
    cssClassName: "blush",
    exampleDiv: '<div class="blush"></div>',
  },
  {
    source: { "round-left": "(" },
    path: ["body", "round-left"],
    cssClassName: "body-round-left",
    exampleDiv: '<div class="body-round-left"></div>',
  },
  {
    source: { "round-right": ")" },
    path: ["body", "round-right"],
    cssClassName: "body-round-right",
    exampleDiv: '<div class="body-round-right"></div>',
  },
  {
    source: { "square-left": "[" },
    path: ["body", "square-left"],
    cssClassName: "body-square-left",
    exampleDiv: '<div class="body-square-left"></div>',
  },
  {
    source: { "square-right": "]" },
    path: ["body", "square-right"],
    cssClassName: "body-square-right",
    exampleDiv: '<div class="body-square-right"></div>',
  },
  {
    source: { happy: "◕‿◕" },
    path: ["face", "happy"],
    cssClassName: "face-happy",
    exampleDiv: '<div class="face-happy"></div>',
  },
  {
    source: { sad: "◕︵◕" },
    path: ["face", "sad"],
    cssClassName: "face-sad",
    exampleDiv: '<div class="face-sad"></div>',
  },
  {
    source: { neutral: "◕_◕" },
    path: ["face", "neutral"],
    cssClassName: "face-neutral",
    exampleDiv: '<div class="face-neutral"></div>',
  },
  {
    source: { surprised: "◕o◕" },
    path: ["face", "surprised"],
    cssClassName: "face-surprised",
    exampleDiv: '<div class="face-surprised"></div>',
  },
  {
    source: { happy: "^_^" },
    path: ["eyes", "happy"],
    cssClassName: "eyes-happy",
    exampleDiv: '<div class="eyes-happy"></div>',
  },
  {
    source: { closed: "-_-" },
    path: ["eyes", "closed"],
    cssClassName: "eyes-closed",
    exampleDiv: '<div class="eyes-closed"></div>',
  },
  {
    source: { wink: "^_~" },
    path: ["eyes", "wink"],
    cssClassName: "eyes-wink",
    exampleDiv: '<div class="eyes-wink"></div>',
  },
  {
    source: { raised: "╯" },
    path: ["arms", "raised"],
    cssClassName: "arms-raised",
    exampleDiv: '<div class="arms-raised"></div>',
  },
  {
    source: { lowered: "╰" },
    path: ["arms", "lowered"],
    cssClassName: "arms-lowered",
    exampleDiv: '<div class="arms-lowered"></div>',
  },
  {
    source: { star: "✦" },
    path: ["star"],
    cssClassName: "star",
    exampleDiv: '<div class="star"></div>',
  },
  {
    source: { sparkle: "✨" },
    path: ["sparkle"],
    cssClassName: "sparkle",
    exampleDiv: '<div class="sparkle"></div>',
  },
  {
    source: { sweat: "💧" },
    path: ["sweat"],
    cssClassName: "sweat",
    exampleDiv: '<div class="sweat"></div>',
  },
];

const groups = ["body", "face", "eyes", "arms"];

export default function PartsDisplay() {
  const renderPartSection = (group: string) => {
    const groupParts = partsData.filter((part) =>
      part.path.some((pathItem) => pathItem === group)
    );

    if (groupParts.length === 0) return null;

    return (
      <section key={group} id={group} style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>
          {group.charAt(0).toUpperCase() + group.slice(1)}
        </h2>
        {groupParts.map((part, index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            <h3>{part.cssClassName}</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <pre>
                  <code className="language-html">{part.exampleDiv}</code>
                </pre>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "3rem",
                }}
              >
                <div
                  className={part.cssClassName}
                  style={{ fontSize: "1.5rem" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  const renderAccessoriesSection = () => {
    const accessories = partsData.filter(
      (part) => !groups.some((group) => part.path.includes(group))
    );

    if (accessories.length === 0) return null;

    return (
      <section id="accessories" style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Accessories</h2>
        {accessories.map((part, index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            <h3>{part.cssClassName}</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <pre>
                  <code className="language-html">{part.exampleDiv}</code>
                </pre>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "3rem",
                }}
              >
                <div
                  className={part.cssClassName}
                  style={{ fontSize: "1.5rem" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };

  return (
    <div>
      {groups.map((group) => renderPartSection(group))}
      {renderAccessoriesSection()}
    </div>
  );
}
