import React from "react";
import parts from "@site/static/data/parts.json";
import { Highlight } from "prism-react-renderer";
import { useColorMode } from "@docusaurus/theme-common";
import { useThemeConfig } from "@docusaurus/theme-common";

const groups = ["body", "face", "eyes", "arms", "mouth"];

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
  const { colorMode } = useColorMode();
  const { prism } = useThemeConfig();
  const theme = colorMode === "dark" ? prism.darkTheme : prism.theme;

  return (
    <div key={index} style={{ marginBottom: "1.5rem" }}>
      <p>
        <code>{part.cssClassName}</code>
        <span
          className={part.cssClassName}
          style={{ marginLeft: "1rem" }}
        ></span>
      </p>
      <Highlight language="html" code={part.exampleDiv} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
