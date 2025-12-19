# Blog Implementation

This document describes the blog functionality that has been implemented.

## Files Created

### 1. Blog Data (`src/data/blogs.json`)
- Contains sample blog posts with the following structure:
  - `id`: Unique identifier for the blog post
  - `title`: Blog post title
  - `category`: Blog category (e.g., "Socratic Method", "Design Thinking", "Agile Methodology")
  - `date`: Publication date
  - `image`: Path to the featured image
  - `tags`: Array of tags for related blog suggestions (e.g., ["leadership", "management"])
  - `content`: Object containing:
    - `intro`: Introduction paragraph
    - `paragraphs`: Array of body paragraphs
    - `bulletPoints`: Array of key takeaways

### 2. Individual Blog Page (`src/app/blog/[id]/page.tsx`)
- Dynamic route for individual blog posts
- Matches the Figma design at node-id=2056-832
- Features:
  - Responsive layout
  - Social sharing buttons (Twitter, Facebook, LinkedIn, Email)
  - Fixed share sidebar on desktop (xl breakpoint)
  - Mobile-friendly share section at bottom
  - Semantic HTML with proper article structure
  - SEO-friendly with proper heading hierarchy
  - **Related blogs section** showing other blogs with matching tags

### 3. Blog Listing Page (`src/app/blog/page.tsx`)
- Shows all available blog posts in a grid layout
- Features:
  - Responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
  - Hover effects on blog cards
  - Links to individual blog posts
  - Preview of blog intro text

### 4. Other Blogs Component (`src/components/OtherBlogs.tsx`)
- Reusable component for displaying blog suggestions
- Matches Figma design at node-id=1-1203
- Features:
  - **Smart filtering**: On individual blog pages, shows related blogs based on matching tags
  - **Responsive grid**: 1-4 columns depending on screen size
  - **Hover effects**: Smooth image zoom on hover
  - **Flexible display**: Can show all blogs (home page) or filtered blogs (blog page)
- Props:
  - `blogs`: Array of blog posts
  - `currentBlogId`: (Optional) ID of current blog to exclude and find related posts
  - `limit`: (Optional) Maximum number of blogs to display (default: 4)

## Assets

Social media icons are stored in `/public/blog/`:
- Twitter icon: `Twitter.svg`
- Facebook icon: `Facebook.svg`
- LinkedIn icon: `LinkedIn.svg`
- Email icon: `Mail.svg`
- Blog images: `blog-1.webp`, etc.

## Routes

- `/blog` - Blog listing page showing all posts
- `/blog/[id]` - Individual blog post page (e.g., `/blog/socratic-management-techniques`)

## Design Specifications

### Individual Blog Page
The individual blog page follows the Figma design with:
- Max width: 1280px (container)
- Content max width: 1060px
- Title font size: 42px (desktop), 32px (mobile)
- Body text: 20px (desktop), 18px (mobile)
- Line height: 1.42 for body text
- Border radius: 15px for images
- Share button size: 46px (desktop), 40px (mobile)
- Bullet point indicators: 8px × 8px rounded squares

### Other Blogs Section
The "Other Blogs" section follows the Figma design with:
- Max width: 1684px
- Section title: 36px (desktop), 28px (mobile)
- Grid: 4 columns on xl, 3 on lg, 2 on sm, 1 on mobile
- Card image aspect ratio: 400/310
- Card border radius: 10px
- Category and date: 18px (desktop), 16px (mobile)
- Card title: 24px (desktop), 20px (mobile)

## Usage

### Adding a New Blog Post
1. Add a new entry to `src/data/blogs.json` with a unique `id`
2. Include `category` and `tags` for better related blog suggestions
3. The blog will automatically appear on the listing page and home page
4. Access it at `/blog/[your-blog-id]`

### Related Blog Logic
- On individual blog pages, the component shows blogs with matching tags first
- Blogs are sorted by the number of matching tags (most matches first)
- The current blog is automatically excluded from suggestions
- On the home page, all blogs are shown without filtering

## Integration

The "Other Blogs" section is integrated in:
- **Home Page** (`src/app/page.tsx`): Shows all available blogs
- **Individual Blog Pages** (`src/app/blog/[id]/page.tsx`): Shows related blogs based on tags

## Next Steps

Consider:
- Moving blog data to a CMS or database
- Adding more blog categories and tags
- Implementing search functionality
- Adding pagination for the blog listing
- Adding author information
- Implementing actual social sharing functionality
- Adding reading time estimates
- Implementing blog comments

