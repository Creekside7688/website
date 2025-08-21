const fs = require('fs');
const path = require('path');

// Configuration
const thumbnailPath = path.join(__dirname, '../public/media-thumbnails');
const fullSizePath = path.join(__dirname, '../public/media-converted');

function renameFolders(directoryPath) {
    if (!fs.existsSync(directoryPath)) {
        console.log(`⚠️  Directory not found: ${directoryPath}`);
        return;
    }

    const items = fs.readdirSync(directoryPath);
    
    for (const item of items) {
        const itemPath = path.join(directoryPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
            // Check if folder name contains spaces
            if (item.includes(' ')) {
                const newName = item.replace(/\s+/g, '_');
                const newPath = path.join(directoryPath, newName);
                
                if (fs.existsSync(newPath)) {
                    console.log(`⚠️  Target folder already exists, skipping: ${item} -> ${newName}`);
                    continue;
                }
                
                try {
                    fs.renameSync(itemPath, newPath);
                    console.log(`✅ Renamed: ${item} -> ${newName}`);
                } catch (error) {
                    console.error(`❌ Error renaming ${item}:`, error.message);
                }
            }
            
            // Recursively rename subfolders
            renameFolders(path.join(directoryPath, item.includes(' ') ? item.replace(/\s+/g, '_') : item));
        }
    }
}

function main() {
    console.log('🔄 Renaming media folders to remove spaces...\n');
    
    console.log('📁 Processing thumbnails...');
    renameFolders(thumbnailPath);
    
    console.log('\n📁 Processing full-size images...');
    renameFolders(fullSizePath);
    
    console.log('\n✅ Folder renaming complete!');
    console.log('📝 Remember to update the gallery configuration to match the new folder names.');
}

if (require.main === module) {
    main();
}

module.exports = { renameFolders };
