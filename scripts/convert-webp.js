// batch-optimize.js
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const inputDir = "./public/media";
const outputDir = "./public/media-converted";

// Progress tracking
let totalFiles = 0;
let processedFiles = 0;
let startTime = null;

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function convertHeicToJpg(inputPath, tempPath) {
  execSync(`magick "${inputPath}" "${tempPath}"`);
  return tempPath;
}

// Function to count total files first
function countFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countFiles(fullPath);
    } else {
      count++;
    }
  }
  return count;
}

async function processFile(inputPath, relativePath) {
  processedFiles++;
  const progress = `${processedFiles}/${totalFiles}`;
  const percentage = ((processedFiles / totalFiles) * 100).toFixed(1);
  
  console.log(`[${progress}] (${percentage}%) Processing: ${relativePath}`);
  
  const ext = path.extname(inputPath).toLowerCase();
  const outputPath = path.join(
    outputDir,
    path.dirname(relativePath),
    path.parse(relativePath).name + ".webp"
  );

  ensureDir(path.dirname(outputPath));

  let workingInput = inputPath;
  if (ext === ".heic" || ext === ".heif") {
    console.log(`  [${progress}] Converting HEIC/HEIF to JPEG first...`);
    const tempJpg = inputPath + ".jpg";
    convertHeicToJpg(inputPath, tempJpg);
    workingInput = tempJpg;
  }

  try {
    await sharp(workingInput)
      .resize({ width: 1920, height: 1920, fit: "inside" })
      .webp({ quality: 80 })
      .toFile(outputPath);

    // Clean up temp file if it was created
    if (ext === ".heic" || ext === ".heif") {
      const tempJpg = inputPath + ".jpg";
      if (fs.existsSync(tempJpg)) {
        fs.unlinkSync(tempJpg);
      }
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`  [${progress}] ✓ Converted: ${relativePath} → ${path.relative(outputDir, outputPath)} (${elapsed}s)`);
  } catch (error) {
    console.error(`  [${progress}] ✗ Error processing ${relativePath}:`, error.message);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(inputDir, fullPath);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else {
      processFile(fullPath, relativePath).catch(err =>
        console.error("Error:", relativePath, err)
      );
    }
  }
}

// Main execution
async function main() {
  console.log("🚀 Starting batch image optimization...");
  console.log(`Input directory: ${inputDir}`);
  console.log(`Output directory: ${outputDir}`);
  console.log("");

  // Count total files first
  console.log("📊 Counting files...");
  totalFiles = countFiles(inputDir);
  console.log(`Found ${totalFiles} files to process`);
  console.log("");

  if (totalFiles === 0) {
    console.log("No files found to process!");
    return;
  }

  // Create output directory
  ensureDir(outputDir);
  
  // Start timing
  startTime = Date.now();
  
  console.log("🔄 Starting conversion...");
  console.log("");

  // Process files
  walkDir(inputDir);

  // Wait for all async operations to complete
  await new Promise(resolve => setTimeout(resolve, 1000));

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("");
  console.log("📈 Conversion Summary");
  console.log("===================");
  console.log(`Total files: ${totalFiles}`);
  console.log(`Processed: ${processedFiles}`);
  console.log(`Total time: ${totalTime} seconds`);
  console.log(`Average: ${(totalTime / processedFiles).toFixed(2)} seconds per file`);
  console.log(`Output location: ${outputDir}`);
  console.log("");
  console.log("✅ Batch optimization completed!");
}

main().catch(console.error);