/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Import the gallery configuration
const { galleryConfig } = require('./gallery-config.js');

// Configuration
const thumbnailPath = path.join(__dirname, '../public/media-thumbnails');
const fullSizePath = path.join(__dirname, '../public/media-converted');
const outputPath = path.join(__dirname, '../src/data/gallery-data.json');

function generateGalleryData() {
    console.log('🖼️  Generating gallery data...');
    
    // Wipe existing gallery data file
    if (fs.existsSync(outputPath)) {
        console.log('🧹 Cleaning existing gallery data...');
        fs.unlinkSync(outputPath);
        console.log('✅ Gallery data file cleaned');
    }
    
    const galleryData = {
        years: [],
        lastUpdated: new Date().toISOString()
    };

    // Process each year configuration
    galleryConfig.forEach(yearConfig => {
        const yearThumbnailPath = path.join(thumbnailPath, yearConfig.mediaFolder);
        const yearFullSizePath = path.join(fullSizePath, yearConfig.mediaFolder);
        
        if (!fs.existsSync(yearThumbnailPath)) {
            console.log(`⚠️  No thumbnails found for ${yearConfig.label} (${yearConfig.mediaFolder})`);
            return;
        }

        const yearData = {
            id: yearConfig.id,
            label: yearConfig.label,
            mediaFolder: yearConfig.mediaFolder,
            subfolders: []
        };

        // Get actual subfolders from filesystem
        const actualSubfolders = fs.readdirSync(yearThumbnailPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        // Process each configured folder mapping
        yearConfig.folderMappings.forEach((folderMapping, index) => {
            const folderNames = Array.isArray(folderMapping.folderNames) 
                ? folderMapping.folderNames 
                : [folderMapping.folderNames];
            
            let allImages = [];
            let totalCount = 0;
            
            // Process each folder name (single or multiple)
            folderNames.forEach(actualFolderName => {
                let subfolderThumbnailPath;
                
                // Handle root folder files (empty folder name)
                if (actualFolderName === '') {
                    subfolderThumbnailPath = yearThumbnailPath;
                } else {
                    // Check if the folder actually exists
                    if (!actualSubfolders.includes(actualFolderName)) {
                        console.log(`⚠️  Configured folder "${actualFolderName}" not found in ${yearConfig.mediaFolder}`);
                        return;
                    }
                    
                    subfolderThumbnailPath = path.join(yearThumbnailPath, actualFolderName);
                }
                
                // Get WebP images in this subfolder
                const files = fs.readdirSync(subfolderThumbnailPath)
                    .filter(file => path.extname(file).toLowerCase() === '.webp');

                if (files.length === 0) {
                    console.log(`⚠️  No WebP files found in ${yearConfig.mediaFolder}/${actualFolderName}`);
                    return;
                }

                const images = files.map(file => {
                    // Handle root folder files (empty folder name)
                    const thumbnailSrc = actualFolderName === '' 
                        ? `/media-thumbnails/${yearConfig.mediaFolder}/${file}`
                        : `/media-thumbnails/${yearConfig.mediaFolder}/${actualFolderName}/${file}`;
                    const fullSizeSrc = actualFolderName === ''
                        ? `/media-converted/${yearConfig.mediaFolder}/${file}`
                        : `/media-converted/${yearConfig.mediaFolder}/${actualFolderName}/${file}`;
                    
                    return {
                        src: thumbnailSrc,
                        fullSizeSrc,
                        alt: folderMapping.displayName ? `${folderMapping.displayName} - ${path.parse(file).name}` : path.parse(file).name,
                        filename: file,
                        category: yearConfig.id,
                        subfolder: actualFolderName || 'root',
                        displayName: folderMapping.displayName
                    };
                });

                allImages = allImages.concat(images);
                totalCount += images.length;
            });

            // Only add if we have images
            if (allImages.length > 0) {
                // If display name is empty, add images directly to year root (no subfolder)
                if (!folderMapping.displayName || folderMapping.displayName === '') {
                    // Add images directly to year level
                    if (!yearData.rootImages) {
                        yearData.rootImages = [];
                    }
                    yearData.rootImages = yearData.rootImages.concat(allImages);
                } else {
                    // Add as subfolder
                    yearData.subfolders.push({
                        name: folderMapping.displayName,
                        originalNames: folderNames,
                        images: allImages,
                        count: totalCount,
                        order: index
                    });
                }
            }
        });

        // Sort subfolders by order
        yearData.subfolders.sort((a, b) => (a.order || 999) - (b.order || 999));

        // Calculate total images including root images
        const subfolderCount = yearData.subfolders.reduce((sum, subfolder) => sum + subfolder.count, 0);
        const rootCount = yearData.rootImages ? yearData.rootImages.length : 0;
        yearData.totalImages = subfolderCount + rootCount;
        
        // Only add year if it has images
        if (yearData.totalImages > 0) {
            galleryData.years.push(yearData);
            const subfolderText = yearData.subfolders.length > 0 ? ` in ${yearData.subfolders.length} subfolders` : '';
            const rootText = rootCount > 0 ? ` + ${rootCount} root images` : '';
            console.log(`✅ ${yearConfig.label}: ${yearData.totalImages} images${subfolderText}${rootText}`);
        }
    });

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the data
    fs.writeFileSync(outputPath, JSON.stringify(galleryData, null, 2));
    
    const totalImages = galleryData.years.reduce((sum, year) => sum + year.totalImages, 0);
    console.log(`\n📊 Gallery data generated successfully!`);
    console.log(`📁 Output: ${outputPath}`);
    console.log(`📈 Total: ${totalImages} images across ${galleryData.years.length} years`);
    
    return galleryData;
}

// Run if called directly
if (require.main === module) {
    generateGalleryData();
}

module.exports = { generateGalleryData };
