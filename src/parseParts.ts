import { parts, Part } from "./parts.js";

interface ParsedPart {
  source: Part;
  path: string[];
  cssClass: string;
  exampleDiv: string;
}

/**
 * read the parts object declared in parts.ts an recursively builds an array of ParsedPart
 */
export default function parseParts(): ParsedPart[] {
  const result: ParsedPart[] = [];
  parsePartsRec("", parts, [], result);
  return result;
}

function parsePartsRec(key: string, value: Part, path: string[], result: ParsedPart[]) {

}