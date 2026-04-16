const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            // Replace long name
            content = content.replace(/Fly Towards Digital Innovation/gi, 'Sanju Wind Energy Services');
            // Replace short name
            content = content.replace(/Fly Towards/gi, 'Sanju Wind Energy');
            
            // For logo paths
            content = content.replace(/<img src="\/logo.png" alt="Sanju Wind Energy Logo" [^>]*>/g, 
                `<span className="logo-swe" style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Arial Black', color: '#0B4C80', letterSpacing: '-1px' }}><span style={{color: '#0F9A2A'}}>S</span>W<span style={{color: '#0F9A2A'}}>E</span></span>`
            );

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Replaced in ${fullPath}`);
            }
        }
    }
}

walk(dir);
console.log('Replacement complete.');
