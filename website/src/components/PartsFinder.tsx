import React, { useMemo, useState } from "react";
import parts from "@site/static/data/parts.json";
import { PartDisplay, type Part } from "./GroupDisplay";

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
    </div>
  );
}

function ExampleDisplay({ parts }: { missingParts: string[]; parts: Part[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginTop: "1rem",
      }}
    ></div>
  );
}
