const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const fs = require("fs");
const { spawn } = require("child_process");

const app = express();
const PORT = process.env.PORT || 3000;

// Live reload setup
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "dist"));
liveReloadServer.watch(path.join(__dirname, "demo"));
liveReloadServer.watch(path.join(__dirname, "index.html"));
liveReloadServer.watch(path.join(__dirname, "src"));

app.use(connectLivereload());
app.use(express.static(__dirname));

// CSS build watch functionality
let buildTimeout;

function runBuild() {
  console.log("🔄 Building CSS...");

  const build = spawn("npm", ["run", "build"], {
    stdio: "inherit",
    shell: true,
  });

  build.on("close", (code) => {
    if (code === 0) {
      console.log("✅ Build complete");
      // Trigger live reload after successful build
      setTimeout(() => liveReloadServer.refresh("/"), 100);
    } else {
      console.log("❌ Build failed");
    }
  });
}

function debouncedBuild() {
  clearTimeout(buildTimeout);
  buildTimeout = setTimeout(runBuild, 100);
}

// Watch files for changes
const filesToWatch = [
  "src/main.css",
  "src/parts.js",
  "src/build-part-classes.js",
];

console.log("👀 Watching files for changes...");
filesToWatch.forEach((file) => {
  console.log(`   - ${file}`);

  fs.watchFile(file, { interval: 500 }, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
      console.log(`📝 ${file} changed`);
      debouncedBuild();
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Dev server running at http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
});

// Initial build
console.log("🏗️  Starting initial build...");
runBuild();

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Stopping dev server and watch...");
  liveReloadServer.close();
  process.exit(0);
});
