import { parts, Part } from "./parts";
import { PluginCreator, Root, Helpers } from "postcss";

/**
 * PostCSS plugin to generate kaomoji classes from parts object
 */
const buildPartClasses: PluginCreator<{}> = (opts = {}) => {
  return {
    postcssPlugin: "postcss-kaomoji",
    Once(root: Root, helpers: Helpers) {
      // Generate classes for each part type
      Object.entries(parts).forEach(([partType, variations]) => {
        buildClassRecursive(root, helpers, partType, variations);
      });
    },
  };
};

function buildClassRecursive(
  document: Root,
  helpers: Helpers,
  key: string,
  value: string | Part
): void {
  if (
    typeof value === "object" &&
    value !== null &&
    !Object.hasOwnProperty.call(value, "content")
  ) {
    Object.entries(value).forEach(([childKey, childValue]) => {
      buildClassRecursive(document, helpers, `${key}-${childKey}`, childValue);
    });
  } else {
    const className = `.${key}`;
    const rule = helpers.rule({ selector: `${className}::after` });

    if (typeof value === "object" && Object.hasOwnProperty.call(value, "content")) {
      Object.entries(value).forEach(([prop, val]) => {
        rule.append(
          helpers.decl({
            prop,
            value: prop === "content" ? `"${val}"` : `${val}`,
          })
        );
      });
    } else if (typeof value === "string") {
      rule.append(helpers.decl({ prop: "content", value: `"${value}"` }));
    }

    document.append(rule);
  }
}

buildPartClasses.postcss = true;

export = buildPartClasses;
