# Portfolio Website Implementation Tasks

**Version**: 1.0 (Reverse Engineered)
**Date**: 2026-02-22

## Overview

This task breakdown represents how to rebuild this portfolio website from scratch using the specification and plan.

**Estimated Timeline**: 2-3 weeks for single developer
**Team Size**: 1 full-stack developer

---

## Phase 1: Project Foundation

**Timeline**: Day 1
**Dependencies**: None

### Task 1.1: Initialize Next.js Project
- [ ] Create new Next.js 15 project: `npx create-next-app@latest`
- [ ] Select TypeScript option
- [ ] Select App Router (not Pages Router)
- [ ] Select Tailwind CSS
- [ ] Disable ESLint (or enable, configure later)
- [ ] Configure `src/` directory option (optional)
- [ ] Verify project runs: `npm run dev`

**Acceptance Criteria**:
- Project created with all options configured
- Development server starts without errors
- Default Next.js page renders at `http://localhost:3000`

---

### Task 1.2: Configure TypeScript
- [ ] Review `tsconfig.json` settings
- [ ] Configure path aliases: `"@/*": ["./*"]`
- [ ] Set `strict: true` for type safety
- [ ] Add `typeRoots` for custom type definitions
- [ ] Verify no TypeScript errors

**Acceptance Criteria**:
- Path aliases work (`import { foo } from "@/components/bar"`)
- Strict mode enabled
- No TS errors in terminal

---

### Task 1.3: Configure Tailwind CSS
- [ ] Install dependencies: `tailwindcss-animate`, `class-variance-authority`, `tailwind-merge`, `clsx`
- [ ] Create `lib/utils.ts` with `cn()` utility function
- [ ] Configure custom animations in `tailwind.config.ts`:
  - `accordion-down`, `accordion-up`
  - `scroll-right`, `scroll-left`, `scroll-right-fast`, `scroll-left-fast`
- [ ] Configure custom breakpoints: `xs: '360px'`, `xss: '450px'`
- [ ] Add custom font families: Montserrat, Poppins
- [ ] Configure CSS variables for theming
- [ ] Add custom `bg-dot-thick` utility plugin

**Acceptance Criteria**:
- All custom animations work
- Custom breakpoints function
- Theme variables configured
- Utility functions work correctly

---

### Task 1.4: Configure Google Fonts
- [ ] Create `lib/fonts.ts`
- [ ] Configure Inter font (variable)
- [ ] Configure Poppins font (variable)
- [ ] Configure Montserrat font (variable)
- [ ] Apply fonts to root layout

**Acceptance Criteria**:
- Fonts load without FOIT/FOUT
- All three fonts render correctly
- Font files optimized by Next.js

---

### Task 1.5: Set Up Git Repository
- [ ] Initialize git: `git init`
- [ ] Create `.gitignore` (Next.js default)
- [ ] Create initial commit
- [ ] Connect to GitHub repository
- [ ] Push initial code

**Acceptance Criteria**:
- Repository initialized
- `.gitignore` excludes `node_modules`, `.next`, `.env.local`
- Code pushed to GitHub

---

## Phase 2: Core Layout & Theme

**Timeline**: Day 1-2
**Dependencies**: Phase 1 complete

### Task 2.1: Create Root Layout
- [ ] Create `app/layout.tsx` with HTML structure
- [ ] Add metadata configuration (title, description, OG tags)
- [ ] Configure icons (favicon, apple-touch-icon)
- [ ] Add manifest.json link
- [ ] Configure theme-color meta tags
- [ ] Add Google Analytics placeholder
- [ ] Apply font variables to body

**Acceptance Criteria**:
- Layout renders with all meta tags
- Favicon displays in browser
- No console errors

---

### Task 2.2: Implement Theme Provider
- [ ] Install `next-themes`
- [ ] Create `components/ThemeProvider.tsx`
- [ ] Configure theme attribute (`class`)
- [ ] Enable system theme detection
- [ ] Add to root layout wrapper
- [ ] Create `app/globals.css` with CSS variables

**Acceptance Criteria**:
- Theme toggles between light/dark
- System preference detected on first visit
- Theme persists across navigation

---

### Task 2.3: Create Global Styles
- [ ] Define CSS variables for:
  - `--background`, `--foreground`
  - `--primary`, `--secondary`
  - `--accent`, `--muted`
  - `--border`, `--input`, `--ring`
  - `--heading`, `--text`, `--text2`
- [ ] Add light theme values
- [ ] Add dark theme values (media query or class-based)
- [ ] Add base HTML element styles

**Acceptance Criteria**:
- All colors respond to theme changes
- Smooth transitions between themes
- All components use theme variables

---

### Task 2.4: Build Header Component
- [ ] Create `components/Header.tsx`
- [ ] Add logo/name
- [ ] Add navigation links (Home, About, Projects, Services, Blog, Contact)
- [ ] Implement mobile menu (hamburger)
- [ ] Add smooth scroll to sections
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Header displays on all pages
- Navigation links work correctly
- Mobile menu functions
- Responsive on all screen sizes

---

### Task 2.5: Build Footer Component
- [ ] Create `components/Footer.tsx`
- [ ] Add copyright notice
- [ ] Add social links (GitHub, LinkedIn, Email)
- [ ] Add quick navigation links
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Footer displays on all pages
- Social links are clickable
- Responsive on all screen sizes

---

### Task 2.6: Create Theme Toggle
- [ ] Create `components/ui/ThemeToggle.tsx` (client component)
- [ ] Add sun/moon icons
- [ ] Connect to theme context
- [ ] Add to Header
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Toggle switches themes
- Icon changes based on current theme
- Smooth transition animation

---

## Phase 3: Landing Page Sections

**Timeline**: Day 2-4
**Dependencies**: Phase 2 complete

### Task 3.1: Build Hero Section
- [ ] Create `components/Hero.tsx`
- [ ] Add headline with name/title
- [ ] Implement typewriter effect for subtitles
- [ ] Add call-to-action buttons
- [ ] Add background animation/gradient
- [ ] Make responsive

**Acceptance Criteria**:
- Hero section displays at top of page
- Typewriter effect works smoothly
- CTA buttons link to correct sections
- Responsive on all devices

---

### Task 3.2: Build About Section
- [ ] Create `components/About.tsx`
- [ ] Add bio text
- [ ] Add profile image
- [ ] Add skills highlights
- [ ] Style with Tailwind

**Acceptance Criteria**:
- About section displays correctly
- Image loads properly
- Text is readable and well-formatted

---

### Task 3.3: Build Services Section
- [ ] Create `components/Services.tsx`
- [ ] Create service cards component
- [ ] Add service icons/images
- [ ] Add service descriptions
- [ ] Add "Learn More" links
- [ ] Implement responsive grid

**Acceptance Criteria**:
- All services displayed
- Cards are clickable
- Responsive grid layout

---

### Task 3.4: Build Services Detail Pages
- [ ] Create `app/services/page.tsx` (listing)
- [ ] Create `app/services/[slug]/page.tsx` (detail)
- [ ] Add service hero content
- [ ] Add FAQ component (accordion)
- [ ] Add tech stack display
- [ ] Implement dynamic routing

**Acceptance Criteria**:
- Services listing page works
- Detail pages load by slug
- FAQ accordions expand/collapse
- Tech stack displays correctly

---

### Task 3.5: Build Projects Section
- [ ] Create `components/Projects.tsx`
- [ ] Create `components/ProjectsTab.tsx` (client component for filtering)
- [ ] Add project cards with:
  - Project image
  - Title and description
  - Tech stack tags
  - Links (live demo, GitHub)
- [ ] Implement category tabs (All, Ecommerce, AI Tools, etc.)
- [ ] Add filtering logic

**Acceptance Criteria**:
- All projects displayed
- Tab filtering works correctly
- Active tab is visually indicated
- Project cards are clickable

---

### Task 3.6: Build Skills Section
- [ ] Create `components/Skill.tsx`
- [ ] Create `components/SkillSlider.tsx`
- [ ] Add skill categories
- [ ] Implement infinite scroll animation
- [ ] Add skill icons/names

**Acceptance Criteria**:
- Skills display in categories
- Scroll animation works smoothly
- All skills visible

---

### Task 3.7: Build Experience Section
- [ ] Create `components/Experience.tsx`
- [ ] Create timeline component
- [ ] Add work history entries
- [ ] Add date ranges
- [ ] Add descriptions
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Timeline displays correctly
- Entries are in chronological order
- Responsive on all devices

---

### Task 3.8: Build Contact Section
- [ ] Create `components/Contact.tsx`
- [ ] Add contact form:
  - Name input
  - Email input
  - Message textarea
  - Submit button
- [ ] Add contact information (email, social links)
- [ ] Implement form validation
- [ ] Configure Resend API for emails
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Form displays correctly
- Validation works
- Form submits successfully
- Success/error messages display

---

### Task 3.9: Assemble Home Page
- [ ] Update `app/page.tsx`
- [ ] Import and arrange all sections:
  - Hero
  - About
  - Services
  - Skills
  - Projects
  - Experience
  - Contact
- [ ] Add section IDs for smooth scrolling
- [ ] Add JSON-LD schema

**Acceptance Criteria**:
- All sections render in order
- Smooth scrolling works
- No console errors
- Lighthouse score > 90

---

## Phase 4: Additional Pages

**Timeline**: Day 4-5
**Dependencies**: Phase 3 complete

### Task 4.1: Create About Page
- [ ] Create `app/about/page.tsx`
- [ ] Add detailed about content
- [ ] Add resume/CV download
- [ ] Style consistently with home page

**Acceptance Criteria**:
- Page renders correctly
- Download link works
- SEO metadata present

---

### Task 4.2: Create Projects Page
- [ ] Create `app/projects/page.tsx`
- [ ] Display all projects in grid
- [ ] Add filtering/search functionality
- [ ] Link to project details

**Acceptance Criteria**:
- All projects displayed
- Filters work correctly
- Responsive layout

---

### Task 4.3: Create Skills Page
- [ ] Create `app/skills/page.tsx`
- [ ] Display all skills in detail
- [ ] Add proficiency indicators
- [ ] Categorize by type

**Acceptance Criteria**:
- Page renders correctly
- Skills organized logically
- Visual indicators work

---

### Task 4.4: Create Contact Page
- [ ] Create `app/contact/page.tsx`
- [ ] Add contact form
- [ ] Add contact information
- [ ] Add map embed (optional)

**Acceptance Criteria**:
- Form works correctly
- Information displays
- Page is accessible

---

## Phase 5: Sanity CMS Integration

**Timeline**: Day 5-7
**Dependencies**: Phase 4 complete

### Task 5.1: Set Up Sanity Project
- [ ] Create Sanity account
- [ ] Create new project
- [ ] Configure dataset (production)
- [ ] Get project ID
- [ ] Add environment variables to `.env.local`:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION`

**Acceptance Criteria**:
- Sanity project created
- Environment variables configured
- Studio accessible at `/studio`

---

### Task 5.2: Install Sanity Dependencies
- [ ] Install Sanity packages:
  - `sanity`
  - `next-sanity`
  - `@portabletext/react`
  - `@sanity/image-url`
  - `@sanity/vision`
- [ ] Verify installations

**Acceptance Criteria**:
- All packages installed
- No dependency conflicts

---

### Task 5.3: Configure Sanity Client
- [ ] Create `sanity/env.ts`
- [ ] Create `sanity/lib/client.ts`
- [ ] Configure client with CDN
- [ ] Create `sanity/lib/image.ts` for image URLs
- [ ] Test client connection

**Acceptance Criteria**:
- Client connects successfully
- Image URL builder works
- No configuration errors

---

### Task 5.4: Define Content Schema
- [ ] Create `sanity/schemaTypes/postType.ts` (blog posts)
- [ ] Create `sanity/schemaTypes/authorType.ts`
- [ ] Create `sanity/schemaTypes/categoryType.ts`
- [ ] Create `sanity/schemaTypes/blockContentType.ts`
- [ ] Create `sanity/schemaTypes/index.ts`
- [ ] Configure in `sanity.config.ts`

**Acceptance Criteria**:
- All schemas defined
- Schema types export correctly
- Studio shows all content types

---

### Task 5.5: Configure Studio Structure
- [ ] Create `sanity/structure.ts`
- [ ] Customize desk structure
- [ ] Group content types logically
- [ ] Add preview links

**Acceptance Criteria**:
- Studio structure is organized
- Preview links work
- Easy to navigate

---

### Task 5.6: Create Blog Listing Page
- [ ] Create `app/blog/page.tsx`
- [ ] Fetch posts from Sanity (GROQ query)
- [ ] Display posts in grid/list
- [ ] Add pagination if needed
- [ ] Add loading state

**Acceptance Criteria**:
- Posts fetch from Sanity
- Display correctly
- Loading state shows

---

### Task 5.7: Create Blog Detail Page (Server Component)
- [ ] Create `app/blog/[slug]/page.tsx`
- [ ] Fetch single post by slug
- [ ] Add metadata generation
- [ ] Handle 404 for missing posts
- [ ] Add JSON-LD schema

**Acceptance Criteria**:
- Post loads by slug
- Metadata generates correctly
- 404 handled gracefully

---

### Task 5.8: Create Blog Detail Page (Client Component)
- [ ] Create `app/blog/[slug]/BlogPageClient.tsx`
- [ ] Implement PortableText renderer
- [ ] Add table of contents generator
- [ ] Add related posts component
- [ ] Add like/dislike buttons
- [ ] Add reading time estimate

**Acceptance Criteria**:
- PortableText renders correctly
- Table of contents generates
- Related posts display
- Like/dislike works

---

### Task 5.9: Create Table of Contents Component
- [ ] Create `components/TableOfContents.tsx`
- [ ] Parse headings from PortableText
- [ ] Generate anchor links
- [ ] Add active section highlighting
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Headings detected correctly
- Links scroll to sections
- Active section highlighted

---

### Task 5.10: Create Like/Dislike API
- [ ] Create `app/api/like/route.ts`
- [ ] Implement storage (Vercel KV or simple counter)
- [ ] Handle POST requests
- [ ] Return updated counts

**Acceptance Criteria**:
- API responds to requests
- Counts update correctly
- No race conditions

---

## Phase 6: AI Chatbot

**Timeline**: Day 7-8
**Dependencies**: Phase 5 complete

### Task 6.1: Set Up Google Gemini API
- [ ] Get Google AI API key
- [ ] Add `GEMINI_API_KEY` to `.env.local`
- [ ] Install `@google/genai`
- [ ] Test API connection

**Acceptance Criteria**:
- API key configured
- Package installed
- API responds to test requests

---

### Task 6.2: Create Chat API Route
- [ ] Create `app/api/chat/route.ts`
- [ ] Implement POST handler
- [ ] Add system prompt for Owais's expertise
- [ ] Format messages for Gemini
- [ ] Call Gemini API
- [ ] Handle errors

**Acceptance Criteria**:
- API receives messages
- Gemini responds correctly
- Responses stay in scope
- Errors handled gracefully

---

### Task 6.3: Create Chat Hook
- [ ] Create `hooks/useChat.ts`
- [ ] Manage chat state (messages, loading)
- [ ] Handle message sending
- [ ] Handle message receiving
- [ ] Add error handling

**Acceptance Criteria**:
- State updates correctly
- Messages send and receive
- Loading state works

---

### Task 6.4: Build ChatBot Component
- [ ] Create `components/ui/ChatBot.tsx`
- [ ] Add chat interface UI
- [ ] Add message input
- [ ] Add send button
- [ ] Display messages with formatting
- [ ] Add loading indicator
- [ ] Add toggle button (show/hide)
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Chat interface displays
- Messages send correctly
- Responses display with formatting
- Toggle works

---

### Task 6.5: Integrate ChatBot
- [ ] Add ChatBot to root layout or pages
- [ ] Ensure it's available on all pages
- [ ] Test functionality

**Acceptance Criteria**:
- ChatBot accessible on all pages
- Works consistently

---

## Phase 7: UI Components Library

**Timeline**: Day 8-9
**Dependencies**: Phase 6 complete

### Task 7.1: Set Up shadcn/ui
- [ ] Install dependencies: `class-variance-authority`, `clsx`, `tailwind-merge`
- [ ] Create `components.json` config
- [ ] Add `lib/utils.ts` with `cn()` function

**Acceptance Criteria**:
- Config created
- Utility function works

---

### Task 7.2: Create Button Component
- [ ] Create `components/ui/button.tsx`
- [ ] Add variants (default, destructive, outline, ghost, link)
- [ ] Add sizes (default, sm, lg, icon)
- [ ] Style with Tailwind

**Acceptance Criteria**:
- All variants work
- All sizes work
- Component is reusable

---

### Task 7.3: Create Card Component
- [ ] Create `components/ui/card.tsx`
- [ ] Add sub-components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- [ ] Style with Tailwind

**Acceptance Criteria**:
- All sub-components work
- Can nest correctly
- Responsive

---

### Task 7.4: Create Input Component
- [ ] Create `components/ui/input.tsx`
- [ ] Add variants
- [ ] Style with Tailwind

**Acceptance Criteria**:
- Input displays correctly
- Focus states work

---

### Task 7.5: Create Additional UI Components
- [ ] Create `components/ui/accordion.tsx`
- [ ] Create `components/ui/avatar.tsx`
- [ ] Create `components/ui/tabs.tsx`
- [ ] Create `components/ui/scroll-area.tsx`
- [ ] Create `components/ui/skeleton.tsx`

**Acceptance Criteria**:
- All components work
- Follow design system
- Accessible

---

## Phase 8: SEO & Performance

**Timeline**: Day 9-10
**Dependencies**: Phase 7 complete

### Task 8.1: Implement Metadata API
- [ ] Add metadata to `app/layout.tsx` (default)
- [ ] Add metadata to all pages
- [ ] Include:
  - Title and description
  - OpenGraph tags
  - Twitter cards
  - Canonical URLs
  - Alternates

**Acceptance Criteria**:
- All pages have metadata
- OpenGraph works
- Twitter cards work

---

### Task 8.2: Create JSON-LD Schemas
- [ ] Create `components/JsonLdSchema.tsx`
- [ ] Implement schema types:
  - WebSite
  - Person
  - BlogPosting
  - FAQPage
  - BreadcrumbList
- [ ] Add to relevant pages

**Acceptance Criteria**:
- Schemas validate
- Rich snippets test passes
- All schemas included

---

### Task 8.3: Create Sitemap
- [ ] Create `app/sitemap.ts`
- [ ] Generate dynamic entries for blog posts
- [ ] Add static pages
- [ ] Verify sitemap.xml

**Acceptance Criteria**:
- Sitemap generates at `/sitemap.xml`
- All pages included
- Blog posts dynamic

---

### Task 8.4: Optimize Images
- [ ] Configure remote patterns in `next.config.ts`
- [ ] Convert images to Next.js Image component
- [ ] Add placeholder/blur
- [ ] Optimize image sizes

**Acceptance Criteria**:
- All images use Next.js Image
- WebP conversion works
- CLS score improved

---

### Task 8.5: Add Google Analytics
- [ ] Add `NEXT_PUBLIC_GA_ID` to environment
- [ ] Add Google Analytics scripts to layout
- [ ] Test tracking

**Acceptance Criteria**:
- Analytics loads
- Events tracked
- No console errors

---

### Task 8.6: Performance Audit
- [ ] Run Lighthouse audit
- [ ] Fix performance issues
- [ ] Fix accessibility issues
- [ ] Fix best practices issues
- [ ] Target scores: Performance > 90, Accessibility > 90, Best Practices > 90

**Acceptance Criteria**:
- All scores > 90
- No critical issues

---

## Phase 9: Testing & Quality

**Timeline**: Day 10-11
**Dependencies**: Phase 8 complete

### Task 9.1: Test All Pages
- [ ] Test home page
- [ ] Test about page
- [ ] Test projects page
- [ ] Test services pages
- [ ] Test blog listing
- [ ] Test blog posts
- [ ] Test contact page
- [ ] Test skills page

**Acceptance Criteria**:
- All pages load without errors
- All links work
- No console errors

---

### Task 9.2: Test Interactive Features
- [ ] Test theme toggle
- [ ] Test mobile menu
- [ ] Test project tabs
- [ ] Test chatbot
- [ ] Test like/dislike
- [ ] Test contact form
- [ ] Test accordions
- [ ] Test table of contents

**Acceptance Criteria**:
- All features work
- Smooth transitions
- No JavaScript errors

---

### Task 9.3: Test Responsive Design
- [ ] Test on mobile (320px - 480px)
- [ ] Test on tablet (481px - 768px)
- [ ] Test on desktop (769px+)
- [ ] Test in dark mode
- [ ] Test in light mode

**Acceptance Criteria**:
- All breakpoints work
- All themes work
- No horizontal scrolling

---

### Task 9.4: Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

**Acceptance Criteria**:
- Works in all browsers
- Consistent appearance

---

## Phase 10: Deployment

**Timeline**: Day 11-12
**Dependencies**: Phase 9 complete

### Task 10.1: Prepare for Deployment
- [ ] Update `.env.local` to production values
- [ ] Set environment variables in Vercel
- [ ] Configure build settings
- [ ] Add deploy scripts if needed

**Acceptance Criteria**:
- All env vars configured
- Build succeeds locally

---

### Task 10.2: Deploy to Vercel
- [ ] Connect GitHub repository to Vercel
- [ ] Configure project settings
- [ ] Deploy production site
- [ ] Test deployed site

**Acceptance Criteria**:
- Site deploys successfully
- All pages work
- No environment errors

---

### Task 10.3: Configure Custom Domain
- [ ] Add custom domain in Vercel
- [ ] Update DNS records
- [ ] Wait for propagation
- [ ] Enable HTTPS
- [ ] Test domain

**Acceptance Criteria**:
- Domain resolves correctly
- HTTPS works
- No SSL errors

---

### Task 10.4: Set Up Redirects
- [ ] Configure redirects in `vercel.json` or Next.js
- [ ] Add www redirect
- [ ] Add any legacy redirects
- [ ] Test redirects

**Acceptance Criteria**:
- All redirects work
- No redirect loops

---

## Phase 11: Post-Launch

**Timeline**: Ongoing
**Dependencies**: Production deployment

### Task 11.1: Monitor Performance
- [ ] Check Vercel Analytics
- [ ] Check Google Analytics
- [ ] Monitor Core Web Vitals
- [ ] Address performance issues

**Acceptance Criteria**:
- No performance degradation
- Metrics monitored

---

### Task 11.2: SEO Monitoring
- [ ] Add to Google Search Console
- [ ] Submit sitemap
- [ ] Monitor indexing
- [ ] Fix crawl errors

**Acceptance Criteria**:
- Pages indexed
- No critical errors

---

### Task 11.3: Content Updates
- [ ] Add new blog posts via Sanity
- [ ] Update projects as needed
- [ ] Update services as needed
- [ ] Keep content fresh

**Acceptance Criteria**:
- CMS working
- Updates reflect on site

---

### Task 11.4: Feature Iterations
- [ ] Gather user feedback
- [ ] Prioritize improvements
- [ ] Implement new features
- [ ] Test and deploy

**Acceptance Criteria**:
- Feedback collected
- Improvements made

---

## Summary

**Total Estimated Time**: 2-3 weeks for single developer

**Critical Path**:
1. Project Foundation → Core Layout → Landing Page → Sanity Integration → Deployment

**Risk Areas**:
- Sanity CMS setup complexity
- Gemini API rate limiting
- Image optimization
- Performance targets

**Success Metrics**:
- Lighthouse Performance > 90
- All functionality working
- SEO optimized
- Responsive design

---

*This task breakdown is reverse-engineered from the existing codebase. All tasks are inferred from code structure and functionality.*
