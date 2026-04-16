const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Cleanup remaining text
            content = content.replace(/Digital Innovation/g, 'Services');
            content = content.replace(/DIGITAL INNOVATION/g, 'SERVICES');
            content = content.replace(/Fly-Towards/gi, 'Sanju Wind Energy');
            
            // Revert logo back to an image tag
            const logoSpanRegex = /<span className="logo-swe" style={{[^}]+}}><span style={{[^}]+}}>S<\/span>W<span style={{[^}]+}}>E<\/span><\/span>/g;
            
            if (file === 'Footer.jsx') {
                 content = content.replace(logoSpanRegex, `<img src="/logo.png" alt="Sanju Wind Energy Logo" style={{ height: '100px', width: '100px', borderRadius: '50%', objectFit: 'cover' }} />`);
            } else if (file === 'Loader.jsx') {
                 content = content.replace(logoSpanRegex, `<img src="/logo.png" alt="Sanju Wind Energy Logo" style={{ width: '120px', height: '120px', borderRadius: '50%' }} />`);
            } else {
                 content = content.replace(logoSpanRegex, `<img src="/logo.png" alt="Sanju Wind Energy Logo" style={{ height: '80px', width: 'auto' }} />`);
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed up ${fullPath}`);
            }
        }
    }
}

walk(dir);
console.log('Cleanup complete.');
