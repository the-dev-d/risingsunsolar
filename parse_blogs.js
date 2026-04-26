import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function parseBlogs() {
  const content = fs.readFileSync('blogcontent.txt', 'utf8');
  const sections = content.split(/=+\s*BLOG\s*\d+\s*=+/i).filter(s => s.trim().length > 0);
  
  const apiDir = path.join('static', 'api');
  if (!fs.existsSync(apiDir)) {
    fs.mkdirSync(apiDir, { recursive: true });
  }

  // Load existing blogs to preserve UUIDs
  const existingBlogsFile = path.join(apiDir, 'blogs.json');
  let existingBlogs = [];
  if (fs.existsSync(existingBlogsFile)) {
    try {
      existingBlogs = JSON.parse(fs.readFileSync(existingBlogsFile, 'utf8'));
    } catch (e) {
      console.error('Error parsing existing blogs.json', e);
    }
  }

  const blogsList = [];

  sections.forEach((section, index) => {
    const lines = section.trim().split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    let metaTitle = '';
    let metaDescription = '';
    let title = '';
    let bodyStartIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].toLowerCase().startsWith('meta title')) {
        metaTitle = lines[i].replace(/^meta title\s*:?\s*/i, '');
      } else if (lines[i].toLowerCase().startsWith('meta description')) {
        metaDescription = lines[i].replace(/^meta description\s*:?\s*/i, '');
      } else {
        title = lines[i];
        bodyStartIndex = i + 1;
        break;
      }
    }
    
    const paragraphs = lines.slice(bodyStartIndex);
    
    // Format to markdown
    let markdownContent = '';
    for (const paragraph of paragraphs) {
      if (paragraph.startsWith('Example')) {
        markdownContent += `### ${paragraph}\n\n`;
      } else if (/^\d+\./.test(paragraph)) {
        markdownContent += `### ${paragraph}\n\n`;
      } else if (paragraph.endsWith('?')) {
        markdownContent += `## ${paragraph}\n\n`;
      } else {
        markdownContent += `${paragraph}\n\n`;
      }
    }

    let summary = '';
    for (const p of paragraphs) {
      if (summary.length < 150) {
        summary += (summary.length > 0 ? ' ' : '') + p;
      } else {
        break;
      }
    }
    if (summary.length > 150) {
      summary = summary.substring(0, 147).replace(/\s+\S*$/, '') + '...';
    }
    
    const titleId = generateSlug(title);
    
    // Find existing UUID if it exists
    const existing = existingBlogs.find(b => b.titleId === titleId);
    const uuid = existing ? existing.id : crypto.randomUUID();
    
    const dates = [
      'April 26, 2026',
      'April 20, 2026',
      'April 15, 2026'
    ];
    const date = dates[index] || dates[0];
    
    // Add to lightweight list
    blogsList.push({
      id: uuid,
      titleId,
      title,
      date,
      summary,
      metaTitle,
      metaDescription
    });

    // Save full blog object to its own JSON file
    const fullBlogData = {
      id: uuid,
      titleId,
      metaTitle,
      metaDescription,
      title,
      date,
      summary,
      content: markdownContent.trim()
    };

    fs.writeFileSync(path.join(apiDir, `${uuid}.json`), JSON.stringify(fullBlogData, null, 2));
  });
  
  // Save the list
  fs.writeFileSync(path.join(apiDir, 'blogs.json'), JSON.stringify(blogsList, null, 2));
  console.log(`Successfully parsed ${blogsList.length} blogs to Markdown and saved to static/api/`);
}

parseBlogs();
