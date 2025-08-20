import { parts, Part, PartClass } from "./parts.js";

export interface ParsedPart {
  source: Record<string, Part | string | PartClass>;
  path: string[];
  cssClassName: string;
  exampleDiv: string;
}

/**
 * read the parts object declared in parts.ts an recursively builds an array of ParsedPart
 */
export default function parseParts(): ParsedPart[] {
  const result: ParsedPart[] = [];
  for (const [key, value] of Object.entries(parts)) {
    parsePartsRec(key, value, [], result);
  }
  return result;
}

function parsePartsRec(
  key: string,
  value: Part | string,
  path: string[],
  result: ParsedPart[]
) {
  const currentPath = [...path, key];
  //if value is of type part and does not have 'content' property
  if (typeof value === "object" && !("content" in value)) {
    for (const [childKey, childValue] of Object.entries(value)) {
      parsePartsRec(childKey, childValue, currentPath, result);
    }
  } else {
    const className = `${currentPath.join("-")}`;
    const exampleDiv = `<div class="${className}"></div>`;
    result.push({
      source: { [key]: value },
      path: currentPath,
      cssClassName: className,
      exampleDiv,
    });
  }
}

parseParts();
