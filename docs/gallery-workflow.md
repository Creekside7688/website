# Gallery Guide

i lowkey generated this with cursor

## 🚀 Updated/Moved/Added Files? Run This:

```bash
npm run convert-webp          # Convert AND optimize images in public/media/
npm run create-thumbnails     # Generate thumbnails  
```
Configure folders in src/config/gallery-config.ts
```
npm run generate-gallery      # Update gallery data
npm run dev                   # Test changes
```

Always delete public/media after running the commands.

## ⚙️ How to Configure

### Add New Folder
```typescript
// In src/config/gallery-config.ts
{
  id: '2024-2025',
  label: '2024/2025',
  mediaFolder: 'media25',
  folderMappings: [
    // ... existing folders ...
    { folderNames: 'New Event', displayName: 'New Event', order: 7 }
  ]
}
```

### Add New Year
```typescript
// Add to galleryConfig array
{
  id: '2025-2026',
  label: '2025/2026', 
  mediaFolder: 'media26',
  folderMappings: [
    { folderNames: 'First Event', displayName: 'First Event', order: 1 }
  ]
}
```

### Root Images (no folder)
```typescript
// Use empty folderNames for images in year root
{ folderNames: '', displayName: '', order: 0 }
```

## 📁 File Structure
```
public/media/                 # Put HEIC files here
├── media19/                 # 2018/2019
├── media20/                 # 2019/2020
└── media25/                 # 2024/2025
```