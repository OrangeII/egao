import parseParts, { ParsedPart } from "./parseParts.js";
import { PluginCreator, Root, Helpers } from "postcss";

/**
 * PostCSS plugin to generate kaomoji classes from parts object
 */
const buildPartClasses: PluginCreator<{}> = (_opts = {}) => {
  return {
    postcssPlugin: "postcss-kaomoji",
    Once(root: Root, helpers: Helpers) {
      const parsedParts = parseParts();
      for (const parsedPart of parsedParts) {
        buildCssClass(parsedPart, root, helpers);
      }
    },
  };
};
buildPartClasses.postcss = true;
export default buildPartClasses;

function buildCssClass(parsedPart: ParsedPart, root: Root, helpers: Helpers) {
  const className = `.${parsedPart.cssClassName}`;
  const rule = helpers.rule({ selector: `${className}::after` });
  const source = parsedPart.source[Object.keys(parsedPart.source)[0]];
  if (typeof source === "object" && "content" in source) {
    Object.entries(source).forEach(([prop, val]) => {
      rule.append(
        helpers.decl({
          prop,
          value: prop === "content" ? `"${val}"` : `${val}`,
        })
      );
    });
  } else if (typeof source === "string") {
    rule.append(helpers.decl({ prop: "content", value: `"${source}"` }));
  }
  root.append(rule);
}
