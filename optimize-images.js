const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  // Create optimized directories
  const dirs = [
    'src/assets/Images/optimized',
    'public/optimized'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Optimize assets/Images
  console.log('📁 Optimizing src/assets/Images...');
  await optimizeDirectory('src/assets/Images', 'src/assets/Images/optimized');

  // Optimize public images
  console.log('📁 Optimizing public images...');
  await optimizeDirectory('public', 'public/optimized');

  console.log('✅ Image optimization complete!');
}

async function optimizeDirectory(inputDir, outputDir) {
  const files = fs.readdirSync(inputDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const webpPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      // Get original size
      const originalSize = fs.statSync(inputPath).size;
      
      // Optimize original format
      await sharp(inputPath)
        .resize(800, 800, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85 })
        .png({ quality: 85, compressionLevel: 8 })
        .toFile(outputPath);
      
      // Create WebP version
      await sharp(inputPath)
        .resize(800, 800, { 
          fit: 'inside', 
          withoutEnlargement: true 
        })
        .webp({ quality: 85 })
        .toFile(webpPath);
      
      // Show compression results
      const optimizedSize = fs.statSync(outputPath).size;
      const webpSize = fs.statSync(webpPath).size;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      const webpReduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
      
      console.log(`${file}:`);
      console.log(`  Original: ${(originalSize/1024).toFixed(1)}KB`);
      console.log(`  Optimized: ${(optimizedSize/1024).toFixed(1)}KB (${reduction}% reduction)`);
      console.log(`  WebP: ${(webpSize/1024).toFixed(1)}KB (${webpReduction}% reduction)`);
      
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }
}

optimizeImages().catch(error => {
  console.error('❌ Error optimizing images:', error);
});
