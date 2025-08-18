import runBuild from "./build/runBuild.js";

export default async function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    try {
      await runBuild();
    } catch (error) {
      console.error(error);
    }
  });
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addWatchTarget("docs");
  eleventyConfig.addWatchTarget("src");
};


