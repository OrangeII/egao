import React, { useMemo, useState } from "react";
import { renderToString } from "react-dom/server";
import { Highlight } from "prism-react-renderer";
import parts from "@site/static/data/parts.json";
import { PartDisplay, type Part } from "./GroupDisplay";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";

function findParts(input: string): Part[] {
  const foundParts: Part[] = [];
  const inputCharacters = input.split("");
  for (const char of inputCharacters) {
    const matchingParts = parts.filter(
      (part) => part.content === char
    ) as Part[];
    foundParts.push(...matchingParts);
  }
  return foundParts;
}

interface ExamplePart {
  type: "part" | "missing";
  part: Part | string;
}

function mergeParts(
  reference: string,
  parts: Part[],
  missingParts: string[]
): ExamplePart[] {
  const result: ExamplePart[] = [];
  const referenceChars = reference.split("");
  for (const char of referenceChars) {
    const part = parts.find((p) => p.content === char);
    if (part) {
      result.push({ type: "part", part });
    } else if (missingParts.includes(char)) {
      result.push({ type: "missing", part: char });
    }
  }
  return result;
}

export default function PartsFinder() {
  const [input, setInput] = useState("");

  const foundParts = useMemo(() => {
    return findParts(input);
  }, [input]);

  const missingParts = useMemo(() => {
    const inputCharacters = input.split("");
    const missingChars = inputCharacters.filter((char) => {
      return !parts.some((part) => part.content === char);
    });
    return Array.from(new Set(missingChars));
  }, [input]);

  return (
    <div>
      <input
        type="text"
        placeholder="paste your kaomoji here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-text"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      {foundParts.length ? <h2>Found Parts</h2> : null}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(max(250px, 45%), 1fr))",
          gap: "1rem",
        }}
      >
        {foundParts.map((part, index) => (
          <PartDisplay key={index} part={part} index={index} />
        ))}
      </div>
      {missingParts.length ? (
        <>
          <h2>Missing Parts</h2>
          <ul>
            {missingParts.map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </>
      ) : null}
      {input ? (
        <>
          <h2>Example</h2>
          <ExampleDisplay
            input={input}
            parts={foundParts}
            missingParts={missingParts}
          />
        </>
      ) : null}
    </div>
  );
}

function ExampleDisplay({
  input,
  missingParts,
  parts,
}: {
  input: string;
  missingParts: string[];
  parts: Part[];
}) {
  const { colorMode } = useColorMode();
  const { prism } = useThemeConfig();
  const theme = colorMode === "dark" ? prism.darkTheme : prism.theme;
  const exampleParts = mergeParts(input, parts, missingParts);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <Highlight
        language="html"
        code={renderToString(<Example exampleParts={exampleParts} />)}
        theme={theme}
      >
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Example exampleParts={exampleParts} />
      </div>
    </div>
  );
}

function Example({ exampleParts }: { exampleParts: ExamplePart[] }) {
  return (
    <div className="kaomoji">
      {exampleParts.map((examplePart, index) =>
        examplePart.type === "part" ? (
          <div
            className={(examplePart.part as Part).cssClassName}
            key={index}
          ></div>
        ) : (examplePart.part as string) === " " ? (
          <span key={index}>&nbsp;</span>
        ) : (
          <div key={index}>{examplePart.part as string}</div>
        )
      )}
    </div>
  );
}
