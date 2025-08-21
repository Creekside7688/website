export const runtime = 'edge';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
    subfolder: string;
    filename: string;
}

export async function GET() {
    try {
        // Use optimized images: thumbnails for grid, full-size for detailed view
        const thumbnailPath = path.join(process.cwd(), 'public', 'media-thumbnails');
        const fullSizePath = path.join(process.cwd(), 'public', 'media-converted');
        const images: GalleryImage[] = [];
        let totalImages = 0;
        const maxImages = 200; // Increased limit since we're using optimized images

        // Year mapping
        const yearMapping: Record<string, string> = {
            'media19': '2018-2019',
            'media20': '2019-2020',
            'media21': '2020-2021',
            'media22': '2021-2022',
            'media23': '2022-2023',
            'media24': '2023-2024',
            'media25': '2024-2025'
        };

        // Scan thumbnail folders (these are our optimized WebP images)
        if (fs.existsSync(thumbnailPath)) {
            const yearFolders = fs.readdirSync(thumbnailPath);
            
            for (const yearFolder of yearFolders) {
                if (totalImages >= maxImages) break;
                
                const yearThumbnailPath = path.join(thumbnailPath, yearFolder);
                const yearFullSizePath = path.join(fullSizePath, yearFolder);
                
                if (fs.statSync(yearThumbnailPath).isDirectory() && yearMapping[yearFolder]) {
                    const category = yearMapping[yearFolder];
                    
                    // Scan subfolders
                    const subfolders = fs.readdirSync(yearThumbnailPath);
                    
                    for (const subfolder of subfolders) {
                        if (totalImages >= maxImages) break;
                        
                        const subfolderThumbnailPath = path.join(yearThumbnailPath, subfolder);
                        const subfolderFullSizePath = path.join(yearFullSizePath, subfolder);
                        
                        if (fs.statSync(subfolderThumbnailPath).isDirectory()) {
                            // Scan WebP images in subfolder
                            const files = fs.readdirSync(subfolderThumbnailPath);
                            
                            for (const file of files) {
                                if (totalImages >= maxImages) break;
                                
                                const ext = path.extname(file).toLowerCase();
                                
                                // Only process WebP files (our optimized images)
                                if (ext === '.webp') {
                                    const thumbnailRelativePath = path.join('media-thumbnails', yearFolder, subfolder, file);
                                    const fullSizeRelativePath = path.join('media-converted', yearFolder, subfolder, file);
                                    
                                    // Check if full-size version exists
                                    const fullSizeFilePath = path.join(subfolderFullSizePath, file);
                                    const hasFullSize = fs.existsSync(fullSizeFilePath);
                                    
                                    images.push({
                                        src: `/${thumbnailRelativePath.replace(/\\/g, '/')}`,
                                        alt: `${subfolder} - ${path.parse(file).name}`,
                                        category,
                                        subfolder,
                                        filename: file
                                    });
                                    
                                    totalImages++;
                                }
                            }
                        }
                    }
                }
            }
        }

        console.log(`Found ${images.length} optimized images in gallery`);
        return NextResponse.json({ images });
    } catch (error) {
        console.error('Error scanning optimized media folders:', error);
        return NextResponse.json({ images: [] }, { status: 500 });
    }
}
