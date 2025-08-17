const { parts } = require("./parts.js");

/**
 * PostCSS plugin to generate kaomoji classes from parts object
 */
module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-kaomoji",
    Once(root, postcss) {
      // Generate classes for each part type
      Object.entries(parts).forEach(([partType, variations]) => {
        buildClassRecursive(root, postcss, partType, variations);
      });
    },
  };
};

function buildClassRecursive(document, postcss, key, value) {
  if (
    typeof value === "object" &&
    value !== null &&
    !Object.hasOwn(value, "content")
  ) {
    Object.entries(value).forEach(([childKey, childValue]) => {
      buildClassRecursive(document, postcss, `${key}-${childKey}`, childValue);
    });
  } else {
    const className = `.${key}`;
    const rule = postcss.rule({ selector: `${className}::after` });
    if (Object.hasOwn(value, "content")) {
      Object.entries(value).forEach(([prop, val]) => {
        rule.append(
          postcss.decl({
            prop,
            value: prop == "content" ? `"${val}"` : `${val}`,
          })
        );
      });
    } else {
      rule.append(postcss.decl({ prop: "content", value: `"${value}"` }));
    }
    //append other properties besides content
    document.append(rule);
  }
}

module.exports.postcss = true;
