import { rename } from "fs";
import runBuild from "./build/runBuild.js";

export default async function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    try {
      console.log("Running build...");
      //await runBuild();
    } catch (error) {
      console.error(error);
    }
  });
  eleventyConfig.setInputDirectory("docs");
  eleventyConfig.setOutputDirectory("_site");

  eleventyConfig.addPassthroughCopy("docs/egao.css");
  eleventyConfig.addPassthroughCopy("docs/index.css");


}
