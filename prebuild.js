const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to ensure directory exists
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Function to copy directory recursively
function copyDir(src, dest) {
  ensureDirectoryExists(dest);
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to optimize images (optional, requires sharp package)
async function optimizeImages(dir) {
  try {
    // Check if sharp is installed
    require.resolve('sharp');
    
    const sharp = require('sharp');
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await optimizeImages(filePath);
      } else if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
        const outputPath = path.join(dir, `optimized_${file}`);
        await sharp(filePath)
          .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
          .toFile(outputPath);
        
        // Replace original with optimized version
        fs.unlinkSync(filePath);
        fs.renameSync(outputPath, filePath);
      }
    }
  } catch (error) {
    console.log('Skipping image optimization (sharp not installed)');
  }
}

// Main function
async function prebuild() {
  console.log('Starting pre-build process...');
  
  // Create build directory if it doesn't exist
  const buildDir = path.join(process.cwd(), 'build');
  ensureDirectoryExists(buildDir);
  
  // Copy public directory to build
  console.log('Copying public directory...');
  copyDir(path.join(process.cwd(), 'public'), buildDir);
  
  // Optimize images (optional)
  console.log('Optimizing images...');
  await optimizeImages(path.join(buildDir, 'images'));
  
  // Update image paths in source files
  console.log('Updating image paths...');
  require('./updateImagePaths');
  
  console.log('Pre-build process completed successfully!');
}

// Run the pre-build process
prebuild().catch(error => {
  console.error('Pre-build process failed:', error);
  process.exit(1);
}); 