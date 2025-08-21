// create-thumbnails.js
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const inputDir = "./public/media-converted";
const outputDir = "./public/media-thumbnails";

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
    // Get image metadata to understand dimensions
    const metadata = await sharp(workingInput).metadata();
    const { width, height } = metadata;
    
    console.log(`  [${progress}] Original size: ${width}x${height}`);
    
    // Resize to max 800px on any side while maintaining aspect ratio
    const resized = sharp(workingInput)
      .resize({ 
        width: 800, 
        height: 800, 
        fit: "inside",  // This ensures neither dimension exceeds 800px
        withoutEnlargement: true  // Don't enlarge if image is already smaller
      })
      .webp({ quality: 80 });
    
    // Get the resized metadata to show final dimensions
    const resizedMetadata = await resized.metadata();
    
    await resized.toFile(outputPath);

    // Clean up temp file if it was created
    if (ext === ".heic" || ext === ".heif") {
      const tempJpg = inputPath + ".jpg";
      if (fs.existsSync(tempJpg)) {
        fs.unlinkSync(tempJpg);
      }
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    const finalWidth = resizedMetadata.width;
    const finalHeight = resizedMetadata.height;
    
    console.log(`  [${progress}] ✓ Thumbnail: ${relativePath} → ${path.relative(outputDir, outputPath)}`);
    console.log(`  [${progress}]   Final size: ${finalWidth}x${finalHeight} (${elapsed}s)`);
    
    // Show size reduction if image was resized
    if (width > finalWidth || height > finalHeight) {
      const reduction = ((1 - (finalWidth * finalHeight) / (width * height)) * 100).toFixed(1);
      console.log(`  [${progress}]   Size reduction: ${reduction}%`);
    }
    
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

// Function to recursively delete directory contents
function deleteDirectoryContents(dir) {
  if (fs.existsSync(dir)) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        deleteDirectoryContents(fullPath);
        fs.rmdirSync(fullPath);
      } else {
        fs.unlinkSync(fullPath);
      }
    }
  }
}

// Main execution
async function main() {
  console.log("🖼️  Starting thumbnail generation...");
  console.log(`Input directory: ${inputDir}`);
  console.log(`Output directory: ${outputDir}`);
  console.log("Thumbnail size: Max 800px on any side (maintains aspect ratio)");
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

  // Wipe existing thumbnail directory
  console.log("🧹 Cleaning existing thumbnails...");
  deleteDirectoryContents(outputDir);
  console.log("✅ Thumbnail directory cleaned");

  // Create output directory
  ensureDir(outputDir);
  
  // Start timing
  startTime = Date.now();
  
  console.log("🔄 Starting thumbnail generation...");
  console.log("");

  // Process files
  walkDir(inputDir);

  // Wait for all async operations to complete
  await new Promise(resolve => setTimeout(resolve, 1000));

  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("");
  console.log("📈 Thumbnail Generation Summary");
  console.log("==============================");
  console.log(`Total files: ${totalFiles}`);
  console.log(`Processed: ${processedFiles}`);
  console.log(`Total time: ${totalTime} seconds`);
  console.log(`Average: ${(totalTime / processedFiles).toFixed(2)} seconds per file`);
  console.log(`Output location: ${outputDir}`);
  console.log("");
  console.log("✅ Thumbnail generation completed!");
  console.log("");
  console.log("📋 Thumbnail specifications:");
  console.log("   • Max dimension: 800px (width OR height)");
  console.log("   • Aspect ratio: Preserved");
  console.log("   • Format: WebP");
  console.log("   • Quality: 80%");
  console.log("   • Enlargement: Disabled (small images stay small)");
}

main().catch(console.error);
