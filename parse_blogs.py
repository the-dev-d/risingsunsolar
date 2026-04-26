import json
import re
import os

def generate_slug(title):
    slug = title.lower()
    slug = re.sub(r'[^a-z0-9]+', '-', slug)
    return slug.strip('-')

def parse_blogs():
    with open('blogcontent.txt', 'r', encoding='utf-8') as f:
        content = f.read()

    sections = re.split(r'============BLOG \d+=============', content, flags=re.IGNORECASE)
    sections = [s for s in sections if s.strip()]

    blogs = []
    dates = ['April 26, 2026', 'April 20, 2026', 'April 15, 2026']

    for i, section in enumerate(sections):
        lines = [line.strip() for line in section.strip().split('\n') if line.strip()]
        
        meta_title = ''
        meta_description = ''
        title = ''
        body_start_index = 0

        for j, line in enumerate(lines):
            lower_line = line.lower()
            if lower_line.startswith('meta title'):
                meta_title = re.sub(r'^meta title\s*:?\s*', '', line, flags=re.IGNORECASE)
            elif lower_line.startswith('meta description'):
                meta_description = re.sub(r'^meta description\s*:?\s*', '', line, flags=re.IGNORECASE)
            else:
                title = line
                body_start_index = j + 1
                break

        paragraphs = lines[body_start_index:]

        summary = ''
        for p in paragraphs:
            if len(summary) < 150:
                summary += (' ' if summary else '') + p
            else:
                break
                
        if len(summary) > 150:
            summary = re.sub(r'\s+\S*$', '', summary[:147]) + '...'

        slug = generate_slug(title)

        blogs.append({
            'id': slug,
            'slug': slug,
            'metaTitle': meta_title,
            'metaDescription': meta_description,
            'title': title,
            'date': dates[i] if i < len(dates) else dates[0],
            'summary': summary,
            'content': paragraphs
        })

    target_dir = os.path.join('src', 'lib', 'data')
    os.makedirs(target_dir, exist_ok=True)

    with open(os.path.join(target_dir, 'blogs.json'), 'w', encoding='utf-8') as f:
        json.dump(blogs, f, indent=2)

    print(f"Successfully parsed {len(blogs)} blogs and saved to src/lib/data/blogs.json")

if __name__ == '__main__':
    parse_blogs()
