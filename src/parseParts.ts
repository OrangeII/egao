import { parts, Part, PartClass } from "./parts.js";
import path from "path";
import fs from "fs";

export interface ParsedPart {
  source: Record<string, Part | string | PartClass>;
  path: string[];
  cssClassName: string;
  exampleDiv: string;
}

/**
 * read the parts object declared in parts.ts an recursively builds an array of ParsedPart
 */
export function parseParts(): ParsedPart[] {
  const result: ParsedPart[] = [];
  for (const [key, value] of Object.entries(parts)) {
    parsePartsRec(key, value, [], result);
  }
  return result.sort((a, b) => a.cssClassName.localeCompare(b.cssClassName));
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

export function writeParsedParts(outputFilePath: string) {
  if (!outputFilePath) return;

  //create the export path if it doesn't exist
  const exportPath = path.dirname(outputFilePath);
  if (!fs.existsSync(exportPath)) {
    fs.mkdirSync(exportPath, { recursive: true });
  }

  const parsedParts = parseParts();
  const content = JSON.stringify(parsedParts, null, 2);
  fs.writeFileSync(outputFilePath, content, "utf8");
}
