/**
 * this will start the developement server.
 * when this script runs:
 * - it will start tsc --watch
 * - it will run npm run docs:dev
 * - it will start listening for changes in the src directory
 *   - when a change is detected, 
 *     - it will run postcss on /src/main.css and copy the output to the website static
 *     - it will parse the parts and write them to the website static
 * - if any of the processes stops or this script itself is terminated, it will also stop the remaining processes
 */

import path, { dirname } from 'path';
import fs from 'fs';
import postcss from 'postcss';
import { parseParts } from './parseParts.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

main();

function main() {
  writeParsedParts(path.resolve(__dirname, '../website/static/data/parts.json'));
  runPostCSS(path.resolve(__dirname, '../website/static/css/egao.css'));
}



function writeParsedParts(outputFilePath: string) {
  if (!outputFilePath) {
    console.error("❌ No output file path specified for parsed parts.");
    return;
  }

  //create the export path if it doesn't exist
  const exportPath = path.dirname(outputFilePath);
  if (!fs.existsSync(exportPath)) {
    console.log(`📁 Creating export directory at ${exportPath}`);
    fs.mkdirSync(exportPath, { recursive: true });
  }

  const parsedParts = parseParts();
  const content = JSON.stringify(parsedParts, null, 2);
  console.log(`✍️  Writing parsed parts to ${outputFilePath}`);
  fs.writeFileSync(outputFilePath, content, "utf8");
  console.log(`✅ Finished writing parsed parts to ${outputFilePath}`);
}

function runPostCSS(outputFilePath: string) {
  if (!outputFilePath) {
    console.error("❌ No output file path specified for CSS.");
    return;
  }

  //create the export path if it doesn't exist
  const exportPath = path.dirname(outputFilePath);
  if (!fs.existsSync(exportPath)) {
    console.log(`📁 Creating export directory at ${exportPath}`);
    fs.mkdirSync(exportPath, { recursive: true });
  }

  //synchronously run postcss on /src/main.css
  console.log(`✍️  Running PostCSS on /src/main.css`);
  const postcssResult = postcss().process(fs.readFileSync(path.resolve(__dirname, '../src/main.css'), 'utf8'), {
    from: path.resolve(__dirname, '../src/main.css'),
    to: outputFilePath
  });
  console.log(`✍️  Writing processed CSS to ${outputFilePath}`);
  fs.writeFileSync(outputFilePath, postcssResult.css, 'utf8');
  console.log(`✅ Finished writing processed CSS to ${outputFilePath}`);
}