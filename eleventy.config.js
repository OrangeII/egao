import { spawn } from "child_process";

export default async function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    try {
      await runBuild();
    } catch (error) {
      console.error(error);
    }
  });
  eleventyConfig.addPassthroughCopy("dist");
  eleventyConfig.addPassthroughCopy("docs");
  eleventyConfig.addWatchTarget("docs");
  eleventyConfig.addWatchTarget("src");
};

function runBuild() {
  return new Promise((resolve, reject) => {
    const build = spawn("npm", ["run", "build"], {
      stdio: "inherit",
      shell: true
    });
    build.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error("❌ Build failed"));
      }
    });
  });
}
