import React from "react";
import parts from "@site/static/data/parts.json";

const partsData = parts;
const groups = ["body", "face", "eyes", "arms"];

// Type definition for a part
interface Part {
  cssClassName: string;
  exampleDiv: string;
  path: string[];
}

// PartDisplay component - renders a single part with its example and preview
function PartDisplay({ part, index }: { part: Part; index: number }) {
  return (
    <div key={index} style={{ marginBottom: "1.5rem" }}>
      <p>{part.cssClassName}</p>
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
          <div className={part.cssClassName}></div>
        </div>
      </div>
    </div>
  );
}

// GroupsDisplay component - renders a group of parts or accessories
function GroupsDisplay({
  groupName,
  groupParts,
  isAccessories = false,
}: {
  groupName: string;
  groupParts: Part[];
  isAccessories?: boolean;
}) {
  if (groupParts.length === 0) return null;

  const displayName = isAccessories
    ? "Accessories"
    : groupName.charAt(0).toUpperCase() + groupName.slice(1);

  return (
    <section
      id={isAccessories ? "accessories" : groupName}
      style={{ marginBottom: "2rem" }}
    >
      <h2 style={{ marginBottom: "1rem" }}>{displayName}</h2>
      {groupParts.map((part, index) => (
        <PartDisplay key={index} part={part} index={index} />
      ))}
    </section>
  );
}

// Main PartsDisplay component
export default function PartsDisplay() {
  const getGroupParts = (group: string) => {
    return partsData.filter((part) =>
      part.path.some((pathItem) => pathItem === group)
    );
  };

  const getAccessories = () => {
    return partsData.filter(
      (part) => !groups.some((group) => part.path.includes(group))
    );
  };

  return (
    <div>
      {groups.map((group) => (
        <GroupsDisplay
          key={group}
          groupName={group}
          groupParts={getGroupParts(group)}
        />
      ))}
      <GroupsDisplay
        groupName="accessories"
        groupParts={getAccessories()}
        isAccessories={true}
      />
    </div>
  );
}
