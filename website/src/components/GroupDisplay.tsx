import React from "react";
import parts from "@site/static/data/parts.json";

const groups = ["body", "face", "eyes", "arms"];

// Type definition for a part
interface Part {
  cssClassName: string;
  exampleDiv: string;
  path: string[];
}

function getGroupParts(group: string) {
  return parts.filter((part) => part.path.includes(group));
}

function getAccessoryParts() {
  return parts.filter(
    (part) => !groups.some((group) => part.path.includes(group))
  );
}

export function AccessoriesDisplay() {
  const groupParts = getAccessoryParts();
  if (groupParts.length === 0) {
    return <div>No accessory parts</div>;
  }

  return (
    <div>
      {groupParts.map((part, index) => (
        <PartDisplay key={index} part={part} index={index} />
      ))}
    </div>
  );
}

export function GroupDisplay({ group }: { group: string }) {
  const groupParts = getGroupParts(group);
  if (groupParts.length === 0) {
    return <div>No {group} parts</div>;
  }

  return (
    <div>
      {groupParts.map((part, index) => (
        <PartDisplay key={index} part={part} index={index} />
      ))}
    </div>
  );
}

function PartDisplay({ part, index }: { part: Part; index: number }) {
  return (
    <div key={index} style={{ marginBottom: "1.5rem" }}>
      <p>
        <code>{part.cssClassName}</code>
        <span
          className={part.cssClassName}
          style={{ marginLeft: "1rem" }}
        ></span>
      </p>
      <div>
        <pre>
          <code className="language-html">{part.exampleDiv}</code>
        </pre>
      </div>
    </div>
  );
}
