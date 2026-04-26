import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://risingsunsolar.in';
const staticPages = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog'
];

function generateSitemap() {
  const sitemapPath = path.join('static', 'sitemap.xml');
  const blogsFilePath = path.join('static', 'api', 'blogs.json');
  
  let blogs = [];
  if (fs.existsSync(blogsFilePath)) {
    try {
      blogs = JSON.parse(fs.readFileSync(blogsFilePath, 'utf8'));
    } catch (e) {
      console.error('Error reading blogs.json', e);
    }
  }

  const dateStr = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  for (const page of staticPages) {
    let priority = page === '/' ? '1.0' : '0.8';
    xml += `
  <url>
    <loc>${SITE_URL}${page === '/' ? '' : page}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${page === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }

  // Add blog pages
  for (const blog of blogs) {
    if (!blog.titleId) continue;
    xml += `
  <url>
    <loc>${SITE_URL}/blog/${blog.titleId}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  xml += `\n</urlset>`;

  fs.writeFileSync(sitemapPath, xml);
  console.log('Successfully generated static/sitemap.xml');
}

generateSitemap();
