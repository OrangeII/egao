import { spawn } from "child_process";

export default function runBuild() {
  return new Promise((resolve, reject) => {
    const build = spawn("npm", ["run", "build"], {
      stdio: "inherit",
      shell: true
    });
    build.on("close", (code) => {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error("❌ Build failed"));
      }
    });
  });
}