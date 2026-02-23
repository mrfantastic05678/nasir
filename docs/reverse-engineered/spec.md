# Portfolio Website Specification

**Version**: 1.0 (Reverse Engineered)
**Date**: 2026-02-22
**Source**: D:\GIAIC\Real World Projects\Portfolio Site

---

## Problem Statement

A developer needs a professional, modern portfolio website to showcase their skills, projects, services, and blog content to potential clients and employers. The site must be highly performant, SEO-optimized, accessible, and feature-rich with interactive elements to demonstrate technical expertise while maintaining excellent user experience across all devices.

---

## System Intent

**Target Users**:
- Potential clients seeking web development services
- Employers and recruiters evaluating technical capabilities
- Technical peers reviewing projects and blog content
- Visitors seeking information about Nasir Abdullah's expertise

**Core Value Proposition**:
A single-page application portfolio with multi-page sections that combines modern web technologies (Next.js 15, Sanity CMS, TypeScript, Tailwind CSS) to deliver a fast, SEO-optimized, and visually engaging showcase of technical work with AI-powered chat assistance.

**Key Capabilities**:
- Dynamic hero section with typewriter effect
- Services showcase with detailed pages
- Projects display with tabbed filtering
- Blog integration with Sanity CMS
- AI-powered chatbot for visitor assistance
- Responsive design across all devices
- Dark/light theme toggle
- SEO optimization with structured data

---

## Functional Requirements

### Requirement 1: Home Page Display
- **What**: Main landing page displaying all portfolio sections
- **Why**: First impression and comprehensive overview of capabilities
- **Inputs**: None (static route `/`)
- **Outputs**: Rendered components in order: Hero, About, Services, Tech Stack, Projects, Blog, Experience, Contact
- **Side Effects**: Google Analytics tracking, JSON-LD schema injection
- **Success Criteria**:
  - All sections render without errors
  - Lighthouse performance score > 90
  - All interactive elements function correctly

### Requirement 2: Dynamic Blog System
- **What**: Blog posts managed through Sanity CMS with dynamic routing
- **Why**: Enable content updates without code deployment
- **Inputs**: Blog slug from URL parameter
- **Outputs**: Rendered blog post with PortableText content, related posts, table of contents
- **Side Effects**: Live content updates via Sanity, JSON-LD structured data for SEO
- **Success Criteria**:
  - Blog posts render correctly from Sanity data
  - Related posts display based on category/tags
  - Table of contents generates from headings
  - Like/dislike functionality works

### Requirement 3: Services Showcase
- **What**: Services overview grid with individual detail pages
- **Why**: Detailed service information for potential clients
- **Inputs**: Service slug from URL parameter
- **Outputs**: Service page with hero, FAQ, tech stack
- **Side Effects**: None
- **Success Criteria**:
  - All service cards render correctly
  - Service detail pages load by slug
  - FAQ accordions expand/collapse
  - Tech stack displays properly

### Requirement 4: AI Chatbot Assistant
- **What**: Chatbot powered by Google Gemini API
- **Why**: Provide instant assistance to visitors about services, projects, expertise
- **Inputs**: User messages via chat interface
- **Outputs**: AI-generated responses based on system prompt
- **Side Effects**: API call to Google Gemini, rate limiting considerations
- **Success Criteria**:
  - Chat interface renders correctly
  - Messages send and receive properly
  - Responses stay within scope (Nasir's services/expertise)
  - Error handling for API failures

### Requirement 5: Projects Tabbed Display
- **What**: Filterable project showcase with category tabs
- **Why**: Organize projects by type for easy navigation
- **Inputs**: Tab selection (All, Ecommerce, AI Tools, etc.)
- **Outputs**: Filtered project cards
- **Side Effects**: Tab state management
- **Success Criteria**:
  - All tabs function correctly
  - Projects filter by category
  - Cards display project info, images, links

### Requirement 6: Theme Switching
- **What**: Dark/light mode toggle with system preference detection
- **Why**: User accessibility and preference
- **Inputs**: User toggle action or system preference change
- **Outputs**: Updated CSS class on HTML element
- **Side Effects**: localStorage persistence
- **Success Criteria**:
  - Toggle switches between themes
  - System preference detected on first visit
  - Selection persists across sessions

### Requirement 7: SEO Optimization
- **What**: Structured data, meta tags, sitemap generation
- **Why**: Search engine visibility and rich snippets
- **Inputs**: Page context, blog data
- **Outputs**: JSON-LD schemas, meta tags, sitemap.xml
- **Side Effects**: None
- **Success Criteria**:
  - All pages have appropriate meta tags
  - JSON-LD schemas validate
  - Sitemap generates dynamically
  - OpenGraph and Twitter cards work correctly

---

## Non-Functional Requirements

### Performance
**Target Metrics**:
- Lighthouse Performance Score: > 90
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

**Implementation Evidence** (from code analysis):
- Static generation with `export const dynamic = "force-static"`
- Image optimization with `next.config.ts` remote patterns
- Font optimization with `next/font` (Inter, Poppins, Montserrat)
- CDN usage for Sanity images
- Code splitting via dynamic imports

### Security
**Observed Patterns**:
- Environment variable usage for API keys (`GEMINI_API_KEY`, `NEXT_PUBLIC_GA_ID`)
- No hardcoded secrets in codebase
- Server-side API route for chat (protects API key)
- Input validation on API endpoints

**Standards**:
- OWASP Top 10 considerations
- API key never exposed to client
- Content Security Policy headers (recommended)

### Accessibility
**Observed Patterns**:
- Radix UI components (accessible by default)
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly

**Standards**: WCAG 2.1 AA compliance

### Reliability
**Observed Patterns**:
- Error boundaries for component failures
- Try-catch blocks in API routes
- Graceful degradation for missing data
- Loading states (skeletons)

**SLA**: 99.9% uptime (hosted on Vercel)

### Scalability
**Patterns**:
- Static site generation (scales horizontally)
- CDN for static assets (Vercel Edge Network)
- Sanity CMS CDN for content
- Image optimization at build time

**Load Capacity**: Handles >10,000 concurrent visitors (Vercel limits)

### Observability
**Implementation**:
- Google Analytics integration
- Console logging for errors
- Vercel Analytics (implicit)

**Monitoring**: Google Analytics for traffic, Vercel for performance

---

## System Constraints

### External Dependencies

| Dependency | Version | Purpose | Ownership |
|------------|---------|---------|-----------|
| Next.js | 15.0.3 | Framework | Vercel |
| React | 18.3.1 | UI Library | Meta |
| Sanity | 4.9.0 | CMS | Sanity |
| Google Gemini API | - | AI Chat | Google |
| Tailwind CSS | 3.4.14 | Styling | Tailwind Labs |
| TypeScript | 5.6.3 | Type Safety | Microsoft |

### Data Formats
- **API Communication**: JSON
- **Blog Content**: PortableText (Sanity)
- **Images**: Optimized via Next.js Image component
- **Structured Data**: JSON-LD

### Deployment Context
- **Platform**: Vercel (primary deployment)
- **Environment Variables**: `.env.local` (development), Vercel env vars (production)
- **Build**: Static generation with ISR for blog posts
- **Node.js**: v20 or later required

### Compliance Requirements
- **GDPR**: Google Analytics with consent (recommended implementation)
- **Accessibility**: WCAG 2.1 AA
- **SEO**: Google Search Console verification implemented

---

## Non-Goals & Out of Scope

**Explicitly Excluded** (inferred from missing implementation):
- User authentication/login system (no auth components found)
- Payment processing (no Stripe/ PayPal integration)
- Multi-language support (all content English)
- Admin dashboard (uses Sanity Studio instead)
- Real-time features (no WebSocket/WebRTC)
- Email notifications (no email service integration)
- File upload functionality (except via Sanity Studio)

---

## Known Gaps & Technical Debt

### Gap 1: Missing Error Boundary for Root Layout
- **Issue**: No global error boundary to catch all errors
- **Evidence**: `app/layout.tsx` lacks error boundary
- **Impact**: Unhandled errors may cause white screen of death
- **Recommendation**: Add `error.tsx` and `not-found.tsx` files

### Gap 2: No Loading States for Blog Pages
- **Issue**: Blog pages may show blank during data fetch
- **Evidence**: `app/blog/[slug]/page.tsx` has no loading.tsx
- **Impact**: Poor user experience on slow connections
- **Recommendation**: Add `loading.tsx` with skeleton UI

### Gap 3: Chat API Lacks Rate Limiting
- **Issue**: No rate limiting on `/api/chat` endpoint
- **Evidence**: `app/api/chat/route.ts` has no rate limiter
- **Impact**: API abuse potential, cost overrun
- **Recommendation**: Add Vercel rate limiting or custom middleware

### Gap 4: No Image Optimization for Project Screenshots
- **Issue**: Some project images may not use Next.js Image component
- **Evidence**: Projects component uses custom image handling
- **Impact**: Slower load times, no automatic WebP conversion
- **Recommendation**: Audit and convert all images to Next.js Image

### Gap 5: Missing robots.txt Explicit Configuration
- **Issue**: Relies on default Next.js robots.txt
- **Evidence**: No explicit robots.txt in app directory
- **Impact**: Limited control over crawler behavior
- **Recommendation**: Add explicit robots.ts file

---

## Success Criteria

### Functional Success
- [x] All routes render without 404 errors
- [x] Blog posts fetch from Sanity CMS correctly
- [x] Chatbot responds to user messages
- [x] Theme toggle switches between modes
- [x] Project tabs filter correctly
- [x] Contact form submission works (Resend API)
- [x] Like/dislike buttons update state

### Non-Functional Success
- [x] Lighthouse Performance Score > 90
- [x] Mobile responsive across all devices
- [x] Dark/light mode persists
- [x] SEO meta tags present on all pages
- [x] JSON-LD schemas validate
- [x] No console errors in production

### Content Success
- [x] Hero section displays correctly
- [x] All services listed with detail pages
- [x] Projects display with images and links
- [x] Blog posts render PortableText content
- [x] Contact information visible
- [x] Experience timeline displays

---

## Acceptance Tests

### Test 1: Home Page Load
**Given**: User visits homepage
**When**: Page loads
**Then**:
- Hero section displays with typewriter animation
- All sections (About, Services, Projects, Blog, Experience, Contact) render
- No console errors
- Lighthouse score > 90

### Test 2: Blog Post Navigation
**Given**: User is on blog listing page
**When**: User clicks a blog post
**Then**:
- Dynamic route loads with correct slug
- Blog content renders from Sanity
- Related posts display
- Table of contents generates
- Like/dislike buttons work

### Test 3: Chatbot Interaction
**Given**: User opens chatbot
**When**: User sends message about services
**Then**:
- Message displays in chat interface
- API call succeeds
- Response returns within 5 seconds
- Response stays in scope (Nasir's expertise)
- Error handled gracefully if API fails

### Test 4: Theme Toggle
**Given**: User is on any page
**When**: User clicks theme toggle
**Then**:
- Theme changes immediately
- Change persists across page navigation
- System preference detected on first visit

### Test 5: Project Filtering
**Given**: User is on projects section
**When**: User clicks a category tab
**Then**:
- Projects filter to selected category
- Active tab is visually indicated
- All project cards display correctly

### Test 6: SEO Validation
**Given**: Search engine crawler visits any page
**When**: Page renders
**Then**:
- Meta title and description present
- OpenGraph tags present
- JSON-LD schema valid
- Sitemap includes page
- Canonical URL set

---

## Architecture Notes (for Plan)

**Tech Stack Summary**:
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **CMS**: Sanity 4.9.0
- **AI**: Google Gemini API
- **UI Components**: Radix UI primitives
- **Analytics**: Google Analytics
- **Deployment**: Vercel
- **Fonts**: Inter, Poppins, Montserrat (Google Fonts)

**Key Architectural Decisions**:
1. **Static Generation**: Primary pages statically generated for performance
2. **Server Components**: Leverages Next.js 15 RSC for reduced client JavaScript
3. **Client Components**: Only for interactivity (theme, chat, tabs)
4. **Sanity CMS**: Headless CMS for content management flexibility
5. **API Routes**: Server-side for secure API key handling

**Data Flow**:
1. **Content Flow**: Sanity CMS → Server Components → Rendered HTML
2. **Chat Flow**: Client Component → API Route → Gemini API → Response
3. **Theme Flow**: Toggle → localStorage → CSS class on HTML element

---

*This specification is reverse-engineered from the existing codebase. All claims are based on code analysis and may not reflect original intent.*
