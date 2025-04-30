const fs = require('fs');
const path = require('path');

// Function to update image paths in a file
function updateImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace window.origin + "/images/..." with "/images/..."
  content = content.replace(/window\.origin\s*\+\s*"\/images\//g, '"/images/');
  
  // Replace relative paths with absolute paths
  content = content.replace(/\.\/\.\.\/images\//g, '/images/');
  
  fs.writeFileSync(filePath, content);
}

// Function to process all JSX files in a directory
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      updateImagePaths(filePath);
    }
  });
}

// Start processing from the src directory
processDirectory('src');

console.log('Image paths updated successfully!'); 