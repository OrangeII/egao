import { PluginCreator, Root, Helpers } from "postcss";

/**
 * PostCSS plugin to generate .space-[] classes for spacing
 */
const buildPartClasses: PluginCreator<{}> = (_opts = {}) => {
  return {
    postcssPlugin: "postcss-egao-sapacing",
    Once(root: Root, helpers: Helpers) {
      const spacings: number[] = [0.25, 0.5, 1, 1.25, 1.5, 2, 3];
      spacings.push(...spacings.map((s) => -s));
      const baseSpaceVariable: string = "--base-space";
      const baseSpace: number = 0.6;

      //add :root baseSpaceVariable variable if not present
      if (
        !root.nodes.some(
          (node) => node.type === "decl" && node.prop === baseSpaceVariable
        )
      ) {
        root.prepend(
          helpers
            .rule({ selector: ":root" })
            .append(
              helpers.decl({ prop: baseSpaceVariable, value: `${baseSpace}em` })
            )
        );
      }

      //build spacing rules
      const spacingRules = spacings.map((spacing) => {
        return `  .space-${spacing
          .toString()
          .replace("-", "n-")
          .replace(".", "-")} {
  margin: 0 calc(var(${baseSpaceVariable}) * ${spacing});
}`;
      });

      root.append(spacingRules.join("\n"));
    },
  };
};
buildPartClasses.postcss = true;
export default buildPartClasses;
