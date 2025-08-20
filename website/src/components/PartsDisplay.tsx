import React from "react";
import parts from "@site/static/data/parts.json";

// load parts data from parts.json
const partsData = parts;

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
            <h4>{part.cssClassName}</h4>
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
                  <code className="">{part.exampleDiv}</code>
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
