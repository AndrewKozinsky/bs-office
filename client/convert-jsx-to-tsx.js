const fs = require('fs');
const path = require('path');

/**
 * Recursively traverse a directory and rename .jsx files to .tsx
 * @param {string} dir - Directory to start traversal
 */
function convertJsxToTsx(dir) {
    // Read all files and directories within the current directory
    const items = fs.readdirSync(dir);

    items.forEach((item) => {
        const fullPath = path.join(dir, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            // Recursively process subdirectories
            convertJsxToTsx(fullPath);
        } else if (stats.isFile() && path.extname(item) === '.js') {
            // Rename file if it has .jsx extension
            const newFilePath = fullPath.replace(/\.js$/, '.ts');
            fs.renameSync(fullPath, newFilePath);
            console.log(`Renamed: ${fullPath} -> ${newFilePath}`);
        }
    });
}

// Entry point
const startDirectory = process.argv[2];

if (!startDirectory) {
    console.error('Please provide a directory to start traversal.');
    process.exit(1);
}

if (!fs.existsSync(startDirectory) || !fs.statSync(startDirectory).isDirectory()) {
    console.error('Provided path is not a valid directory.');
    process.exit(1);
}

convertJsxToTsx(startDirectory);
console.log('Conversion completed.');