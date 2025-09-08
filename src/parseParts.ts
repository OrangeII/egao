import { parts, Part, PartClass } from "./parts.js";
import path from "path";
import fs from "fs";

export interface ParsedPart {
  content: string;
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

  analyzeParts(result);

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
      content: value as string,
      source: { [key]: value },
      path: currentPath,
      cssClassName: className,
      exampleDiv,
    });
  }
}

function analyzeParts(parts: ParsedPart[]) {
  checkDuplicateContent(parts);
}

function checkDuplicateContent(parts: ParsedPart[]) {
  // waring when multiple parts have the same content
  const contentMap: Record<string, ParsedPart[]> = {};
  for (const part of parts) {
    if (!contentMap[part.content]) {
      contentMap[part.content] = [];
    }
    contentMap[part.content].push(part);
  }

  for (const [content, parts] of Object.entries(contentMap)) {
    if (parts.length > 1) {
      console.warn(`⚠️  Duplicate content found for "${content}":`);
      for (const part of parts) {
        console.warn(
          ` - ${part.cssClassName} (defined in ${part.path.join(" > ")})`
        );
      }
    }
  }
}

export function writeParsedParts(outputFilePath: string) {
  if (!outputFilePath) {
    console.error("❌ No output file path specified for parsed parts.");
    return;
  }

  //create the export path if it doesn't exist
  const exportPath = path.dirname(outputFilePath);
  if (!fs.existsSync(exportPath)) {
    console.log(`📁 Creating export directory at ${exportPath}`);
    fs.mkdirSync(exportPath, { recursive: true });
  }

  const parsedParts = parseParts();
  const content = JSON.stringify(parsedParts, null, 2);
  console.log(`✍️  Writing parsed parts to ${outputFilePath}`);
  fs.writeFileSync(outputFilePath, content, "utf8");
  console.log(`✅ Finished writing parsed parts to ${outputFilePath}`);
}
