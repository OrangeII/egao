import { rename } from "fs";
import runBuild from "./build/runBuild.js";

export default async function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    try {
      await runBuild();
    } catch (error) {
      console.error(error);
    }
  });
  eleventyConfig.setInputDirectory("docs");
  eleventyConfig.setOutputDirectory("_site");

  eleventyConfig.addPassthroughCopy({ "dist/egao.css": "egao.css" });
  eleventyConfig.addPassthroughCopy("docs/index.css");
  eleventyConfig.addWatchTarget("docs");
  eleventyConfig.addWatchTarget("src");
}
