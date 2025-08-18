import path from "path";
import fs from "fs";
import { spawn, ChildProcess } from "child_process";

const PORT = process.env.PORT || 3000;

// CSS build watch functionality
let buildTimeout: NodeJS.Timeout;

function runBuild(): void {
  console.log("🔄 Building CSS...");

  const build: ChildProcess = spawn("npm", ["run", "build"], {
    stdio: "inherit",
    shell: true,
  });

  build.on("close", (code: number | null) => {
    if (code === 0) {
      console.log("✅ Build complete");
    } else {
      console.log("❌ Build failed");
    }
  });
}

function debouncedBuild(): void {
  clearTimeout(buildTimeout);
  buildTimeout = setTimeout(runBuild, 100);
}

// Watch files for changes
const filesToWatch: string[] = [
  "src/main.css",
  "src/parts.ts",
  "src/build-part-classes.ts",
];

console.log("👀 Watching files for changes...");
filesToWatch.forEach((file: string) => {
  console.log(`   - ${file}`);

  fs.watchFile(file, { interval: 500 }, (curr: fs.Stats, prev: fs.Stats) => {
    if (curr.mtime !== prev.mtime) {
      console.log(`📝 ${file} changed`);
      debouncedBuild();
    }
  });
});


// Initial build
console.log("🏗️  Starting initial build...");
runBuild();

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Stopping dev server and watch...");
  process.exit(0);
});
