const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const TurndownService = require('turndown');

const docxDir = path.join(__dirname, '../docx_posts');
const postsDir = path.join(__dirname, '../posts');

// Ensure directories exist
if (!fs.existsSync(docxDir)) {
    fs.mkdirSync(docxDir, { recursive: true });
}
if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
}

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function convertDocxToMd() {
    const files = fs.readdirSync(docxDir);
    const docxFiles = files.filter(file => file.endsWith('.docx'));

    if (docxFiles.length === 0) {
        console.log('No .docx files found in docx_posts/');
        return;
    }

    console.log(`Found ${docxFiles.length} .docx files. Converting...`);

    for (const file of docxFiles) {
        const filePath = path.join(docxDir, file);
        const stats = fs.statSync(filePath);
        const slug = file.replace('.docx', '');
        const mdPath = path.join(postsDir, `${slug}.md`);

        // Check if MD exists and is newer than DOCX (to avoid unnecessary processing)
        if (fs.existsSync(mdPath)) {
            const mdStats = fs.statSync(mdPath);
            if (mdStats.mtime > stats.mtime) {
                console.log(`Skipping ${file} (Markdown is up to date)`);
                continue;
            }
        }

        try {
            const result = await mammoth.convertToHtml({ path: filePath });
            const html = result.value;
            const markdown = turndownService.turndown(html);

            // Extract title from first line or filename
            const lines = markdown.split('\n');
            let title = slug;
            let content = markdown;

            // Simple heuristic: if first line looks like a title, use it
            if (lines.length > 0 && lines[0].trim().length > 0) {
                title = lines[0].replace(/^#+\s*/, '').trim();
                // Remove the title from the content to avoid duplication
                content = lines.slice(1).join('\n').trim();
            }

            // Format date (YYYY-MM-DD)
            const date = stats.birthtime.toISOString().split('T')[0];

            const frontmatter = `---
title: '${title.replace(/'/g, "''")}'
date: '${date}'
excerpt: 'Artículo generado automáticamente.'
---

`;

            fs.writeFileSync(mdPath, frontmatter + content);
            console.log(`Converted ${file} -> ${slug}.md`);

        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }
}

convertDocxToMd();
