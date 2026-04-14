const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let changedFiles = 0;

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // A) Global section rhythm (reduce oversized padding)
    content = content.replace(/py-20 md:py-32/g, 'py-12 md:py-20');
    content = content.replace(/py-24/g, 'py-16');
    content = content.replace(/pt-40 md:pt-52/g, 'pt-32 md:pt-40');
    
    // B) Heading-to-content grouping (reduce spacing after headings)
    content = content.replace(/mb-16 md:mb-24/g, 'mb-10 md:mb-12');
    content = content.replace(/mb-12 md:mb-20/g, 'mb-10 md:mb-12');
    content = content.replace(/mb-16/g, 'mb-12');
    content = content.replace(/mb-20/g, 'mb-12');
    content = content.replace(/mb-24/g, 'mb-14');

    // C & F) Card proportion system and demoting hero-like blocks
    content = content.replace(/p-10 md:p-20/g, 'p-8 md:p-12');
    content = content.replace(/p-12 md:p-16/g, 'p-8 md:p-12');
    content = content.replace(/p-10/g, 'p-8');
    content = content.replace(/rounded-\[2rem\]/g, 'rounded-2xl');
    content = content.replace(/rounded-\[3rem_1rem_3rem_3rem\]/g, 'rounded-[2rem_1rem_2rem_2rem]');
    content = content.replace(/min-h-\[500px\]/g, 'min-h-[380px]');
    content = content.replace(/h-\[520px\] md:h-\[640px\]/g, 'h-auto md:h-[480px]');
    content = content.replace(/w-14 h-14/g, 'w-12 h-12'); // Standardize icons down
    content = content.replace(/text-4xl md:text-6xl/g, 'text-4xl md:text-5xl'); // Tone down headings slightly
    content = content.replace(/text-3xl md:text-5xl/g, 'text-3xl md:text-4xl');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      changedFiles++;
    }
  }
});

// Update index.css section-padding and cards
const cssPath = path.join(srcDir, 'index.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  css = css.replace(/@apply py-14 md:py-20;/g, '@apply py-12 md:py-16;');
  css = css.replace(/border-radius: 1\.25rem;/g, 'border-radius: 1rem;');
  css = css.replace(/border-radius: 3rem 1rem 3rem 3rem;/g, 'border-radius: 2rem 1rem 2rem 2rem;');
  fs.writeFileSync(cssPath, css, 'utf8');
}

console.log('Modified ' + changedFiles + ' JSX files.');
