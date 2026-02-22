# Portfolio Website Reusable Intelligence

**Version**: 1.0 (Extracted from Codebase)
**Date**: 2026-02-22

## Overview

This document captures the reusable intelligence embedded in the portfolio website codebase—patterns, decisions, and expertise worth preserving and applying to future projects.

---

## Extracted Skills

### Skill 1: Next.js 15 Server/Client Component Architecture

**Persona**: You are a Next.js architect optimizing performance through strategic Server/Client Component separation.

**Questions to ask before adding 'use client'**:
- Does this component need interactive state (useState, useEffect)?
- Does this component use browser APIs (window, localStorage, navigator)?
- Does this component need event handlers (onClick, onChange)?
- Can this be a Server Component with a Client Component child for just the interactivity?

**Principles**:
- **Server Components by default**: Maximize server-side rendering for performance
- **Client Components only when needed**: Add 'use client' only for true interactivity
- **Push client boundaries down**: Make the smallest possible component a client component
- **Props flow server → client**: Server components can pass data to client components
- **No client → server data flow**: Client components receive props, don't fetch server data

**Implementation Pattern** (observed in codebase):
```tsx
// ❌ DON'T: Make entire page client for one interactive element
'use client'
export default function Page() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Hero />
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Footer />
    </>
  )
}

// ✅ DO: Keep page server, make only interactive part client
export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <InteractiveButton />  // Client component
      <Footer />
    </>
  )
}

// components/InteractiveButton.tsx
'use client'
export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Evidence from codebase**:
- `app/page.tsx`: Server component (default)
- `components/ProjectsTab.tsx`: Client component for tab interactivity
- `components/ui/ThemeToggle.tsx`: Client component for theme switching
- `components/ui/ChatBot.tsx`: Client component for chat state

**When to apply**:
- All Next.js 15 projects using App Router
- Performance-critical applications
- SEO-focused sites

**Contraindications**:
- Legacy Pages Router projects
- Pure client-side SPAs

---

### Skill 2: Tailwind CSS Theme System with CSS Variables

**Persona**: You are a frontend engineer building flexible, maintainable theme systems.

**Questions to ask before implementing theming**:
- How many themes are needed? (light/dark only, or custom themes?)
- Should theme preference persist? (localStorage, system preference)
- What themeable properties exist? (colors, spacing, fonts)
- How do we handle theme switching FOUC?

**Principles**:
- **CSS Variables for theme values**: Enable runtime theme switching
- **Sematic naming**: `--background`, `--foreground`, not `--blue-500`
- **Tailwind integration**: Map Tailwind colors to CSS variables
- **System preference detection**: Respect `prefers-color-scheme`
- **No FOUC**: Prevent flash of unstyled content during theme load

**Implementation Pattern** (observed in codebase):
```css
/* app/globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    /* ... more colors */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... more colors */
  }
}
```

```tsx
/* tailwind.config.ts */
export default {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        // Map all CSS variables
      }
    }
  }
}
```

```tsx
/* components/ThemeProvider.tsx */
'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
```

**Evidence from codebase**:
- `app/globals.css`: Full CSS variable system
- `tailwind.config.ts`: Color mapping to variables
- `components/ThemeProvider.tsx`: next-themes integration

**When to apply**:
- All projects needing theming
- Design systems with multiple themes
- User preference-focused applications

**Contraindications**:
- Single-theme applications (overhead not justified)

---

### Skill 3: Sanity CMS Integration with Next.js

**Persona**: You are a CMS architect implementing headless content management.

**Questions to ask before integrating Sanity**:
- What content types are needed? (blog, products, pages)
- What fields does each content type need? (title, slug, content, image)
- Should content be statically generated or ISR?
- What's the content update frequency?

**Principles**:
- **Schema-driven development**: Define schemas first, build UI second
- **PortableText for rich content**: Use Sanity's rich text editor
- **GROQ for flexible queries**: Sanity's query language is powerful
- **Image optimization**: Use Sanity's image builder
- **Live content**: Use live updates for preview

**Implementation Pattern** (observed in codebase):
```tsx
/* sanity/schemaTypes/postType.ts */
export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
```

```tsx
/* sanity/lib/client.ts */
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})
```

```tsx
/* app/blog/[slug]/page.tsx */
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export default async function BlogPost({ params }) {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      content,
      publishedAt
    }`,
    { slug: params.slug }
  )

  return <article>{/* Render post */}</article>
}
```

**Evidence from codebase**:
- `sanity/schemaTypes/`: Complete schema definitions
- `sanity/lib/client.ts`: Client configuration
- `app/blog/[slug]/page.tsx`: Dynamic routing with GROQ

**When to apply**:
- Blog-heavy sites
- Content-managed pages
- Marketing sites with frequent updates

**Contraindications**:
- Static content only (overkill)
- Simple markdown blogs (use MDX instead)

---

### Skill 4: AI Chatbot with API Route Pattern

**Persona**: You are an AI integration engineer securing API keys and managing chat state.

**Questions to ask before implementing chat**:
- Which AI provider? (OpenAI, Anthropic, Google, etc.)
- What's the system prompt scope?
- Should conversations persist?
- How do we handle rate limits?

**Principles**:
- **API Route proxy**: Never expose API keys to client
- **System prompt scoping**: Keep AI responses focused
- **Error handling**: Graceful degradation
- **Rate limiting**: Prevent API abuse
- **Loading states**: Good UX during API calls

**Implementation Pattern** (observed in codebase):
```tsx
/* app/api/chat/route.ts */
import { NextRequest } from 'next/server'
import { GoogleGenAI } from '@google/genai'

const API_KEY = process.env.GEMINI_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    const systemInstruction = `You are an AI assistant for [specific purpose].
    Stay within scope of [domain knowledge].`

    const adjustedMessages = [
      { role: 'model', parts: [{ text: systemInstruction }] },
      ...messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }))
    ]

    const genAI = new GoogleGenAI({ apiKey: API_KEY })
    const response = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: adjustedMessages,
    })

    return Response.json({ response: response.text })
  } catch (error) {
    console.error('API Error:', error)
    return Response.json(
      { error: 'Error generating response' },
      { status: 500 }
    )
  }
}
```

```tsx
/* hooks/useChat.ts */
'use client'
import { useState } from 'react'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (content: string) => {
    const userMessage = { role: 'user', content }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Chat error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, sendMessage, isLoading }
}
```

**Evidence from codebase**:
- `app/api/chat/route.ts`: Complete Gemini proxy implementation
- `hooks/useChat.ts`: Chat state management
- `components/ui/ChatBot.tsx`: Chat interface

**When to apply**:
- Customer support chatbots
- AI assistants
- Interactive help systems

**Contraindications**:
- Simple FAQ (use static content)
- Real-time chat (use WebSocket)

---

### Skill 5: SEO Optimization with Metadata API

**Persona**: You are an SEO specialist ensuring search engine visibility.

**Questions to ask before implementing SEO**:
- What are the target keywords?
- What's the page title hierarchy?
- Should social sharing be optimized?
- Is structured data needed?

**Principles**:
- **Metadata API**: Use Next.js metadata for all pages
- **Unique titles**: Every page needs a unique title
- **Descriptions**: Compelling meta descriptions for CTR
- **OpenGraph**: Social sharing optimization
- **JSON-LD**: Structured data for rich snippets
- **Sitemap**: Dynamic sitemap generation
- **Canonical URLs**: Prevent duplicate content issues

**Implementation Pattern** (observed in codebase):
```tsx
/* app/layout.tsx */
export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Site Name | Tagline',
    template: '%s | Site Name'
  },
  description: 'Compelling description of the site',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Site Name',
    description: 'Description',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site Name',
    description: 'Description',
    images: ['/twitter-image.png']
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/'
  }
}
```

```tsx
/* app/sitemap.ts */
export default function sitemap() {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add dynamic entries for CMS content
  ]
}
```

```tsx
/* components/JsonLdSchema.tsx */
export function JsonLdSchema({ type, data }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

**Evidence from codebase**:
- `app/layout.tsx`: Complete metadata configuration
- `app/sitemap.ts`: Sitemap generation
- `components/JsonLdSchema.tsx`: JSON-LD component

**When to apply**:
- All public-facing websites
- Content-heavy sites
- E-commerce sites

**Contraindications**:
- Internal applications (no SEO needed)

---

## Architecture Decision Records (Inferred)

### ADR-001: Next.js App Router over Pages Router

**Status**: Accepted (inferred from implementation)

**Context**:
The project requires:
- Optimal performance (minimal client JavaScript)
- Modern React patterns (Server Components)
- Built-in SEO capabilities
- Streamlined data fetching

**Decision**: Use Next.js 15 with App Router

**Rationale** (inferred from code patterns):

1. **Evidence 1**: File structure uses `app/` directory, not `pages/`
   - Location: Project root structure
   - Pattern: `app/layout.tsx`, `app/page.tsx`, `app/blog/[slug]/page.tsx`

2. **Evidence 2**: Server Components used by default
   - Location: `app/page.tsx`, most components
   - Pattern: No 'use client' directive unless interactivity needed

3. **Evidence 3**: Metadata API for SEO
   - Location: `app/layout.tsx`
   - Pattern: `export const metadata: Metadata = {...}`

**Consequences**:

**Positive**:
- Server Components reduce client bundle size
- Built-in SEO with Metadata API
- Streaming and partial prerendering available
- Modern React patterns

**Negative**:
- Learning curve for developers familiar with Pages Router
- Some third-party libraries don't support RSC yet
- Migration required from older Next.js versions

**Alternatives Considered** (inferred):

**Pages Router**:
- **Rejected because**: Lack of Server Components
- **Evidence**: No `pages/` directory

**Remix**:
- **Rejected because**: Team familiarity with Next.js ecosystem
- **Could have worked**: Similar RSC approach

---

### ADR-002: Sanity CMS over File-Based Content

**Status**: Accepted (inferred from implementation)

**Context**:
The project requires:
- Content management without code deployment
- Rich text editing
- Image optimization
- Real-time content updates

**Decision**: Use Sanity CMS

**Rationale** (inferred from code patterns):

1. **Evidence 1**: Full Sanity integration present
   - Location: `sanity/` directory with schemas, client, structure
   - Pattern: Blog posts fetched from Sanity, not markdown files

2. **Evidence 2**: PortableText rendering
   - Location: `app/blog/[slug]/BlogPageClient.tsx`
   - Pattern: `<PortableText value={post.content} />`

3. **Evidence 3**: Studio at `/studio` route
   - Location: `app/studio/[[...tool]]/page.tsx`
   - Pattern: Sanity Studio mounted as Next.js route

**Consequences**:

**Positive**:
- Content editors can update without developers
- Rich text editing with custom components
- Image optimization built-in
- Real-time collaboration
- Content versioning

**Negative**:
- Additional service dependency
- API usage costs (though generous free tier)
- Complexity over simple markdown

**Mitigation Strategies** (observed):
- CDN usage (useCdn: true)
- GROQ query optimization
- Image URL builder for optimization

**Alternatives Considered** (inferred):

**Markdown with MDX**:
- **Rejected because**: Need for rich text editing
- **Evidence**: No markdown blog posts found

**Contentful**:
- **Rejected because**: Developer preference for Sanity
- **Could have worked**: Similar headless CMS approach

---

### ADR-003: Google Gemini over OpenAI for Chat

**Status**: Accepted (inferred from implementation)

**Context**:
The chat functionality needs:
- Fast responses
- Cost-effective solution
- Good quality responses
- Simple system prompt handling

**Decision**: Use Google Gemini API (gemini-2.5-flash)

**Rationale** (inferred from code patterns):

1. **Evidence 1**: Google Gemini integration
   - Location: `app/api/chat/route.ts`
   - Pattern: `import { GoogleGenAI } from '@google/genai'`

2. **Evidence 2**: Use of flash model
   - Location: Same file
   - Pattern: `model: 'gemini-2.5-flash'`

3. **Evidence 3**: Message formatting for Gemini
   - Location: Same file
   - Pattern: `role: 'model'` (not 'assistant' like OpenAI)

**Consequences**:

**Positive**:
- Faster responses (flash model)
- Lower cost than GPT-4
- Good quality for simple tasks
- Generous free tier

**Negative**:
- Less mature than OpenAI ecosystem
- Different API (learning curve)
- Fewer community examples

**Alternatives Considered** (inferred):

**OpenAI GPT-4**:
- **Rejected because**: Cost and speed considerations
- **Could have worked**: More mature ecosystem

**Claude**:
- **Rejected because**: API complexity/cost
- **Could have worked**: Good for complex tasks

---

## Code Patterns & Conventions

### Pattern 1: Utility-First Class Merging

**Observed in**: `lib/utils.ts`

**Purpose**: Merge Tailwind classes without conflicts

**Structure**:
```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage**:
```tsx
<Button className={cn(
  'base-classes',
  isActive && 'active-classes',  // Conditional
  customClassName  // Override support
)} />
```

**Benefits**:
- Conditional classes without conflicts
- Override support (later classes win)
- Type safety with TypeScript

**When to apply**: All Tailwind projects with dynamic classes

---

### Pattern 2: Component Variant System

**Observed in**: `components/ui/` components

**Purpose**: Multiple component styles from single component

**Structure**:
```typescript
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'base-classes',  // Applied to all variants
  {
    variants: {
      variant: {
        default: 'default-classes',
        destructive: 'destructive-classes',
        outline: 'outline-classes',
      },
      size: {
        default: 'size-default-classes',
        sm: 'size-sm-classes',
        lg: 'size-lg-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
```

**Benefits**:
- Type-safe variants
- Composable options
- Default values

**When to apply**: UI components with multiple styles

---

### Pattern 3: PortableText Custom Components

**Observed in**: Blog rendering

**Purpose**: Custom rendering for rich text blocks

**Structure**:
```tsx
import { PortableText } from '@portabletext/react'

<PortableText
  value={post.content}
  components={{
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).url()}
          alt={value.alt}
          width={800}
          height={400}
        />
      ),
      code: ({ value }) => (
        <SyntaxHighlighter language={value.language}>
          {value.code}
        </SyntaxHighlighter>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a href={value.href} rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
    block: {
      h2: ({ children }) => <h2 id={slugify(children)}>{children}</h2>,
    },
  }}
/>
```

**Benefits**:
- Custom component mapping
- Type-safe rendering
- SEO-friendly (custom elements)

**When to apply**: Any site with rich text content

---

## Lessons Learned

### What Worked Well

1. **Server/Client Component Separation**
   - Clear boundaries between server and client code
   - Reduced bundle size significantly
   - **Benefit**: Fast initial page loads, better SEO

2. **Tailwind CSS with CSS Variables**
   - Flexible theming system
   - Easy to extend and customize
   - **Benefit**: Quick development, consistent design

3. **Sanity CMS Integration**
   - Content editors can work independently
   - Rich text editing with custom components
   - **Benefit**: Faster content updates, no deployments needed

4. **TypeScript Throughout**
   - Type safety caught bugs early
   - Better IDE support
   - **Benefit**: Fewer runtime errors, better DX

5. **API Route Pattern for AI**
   - API keys protected on server
   - Easy to add rate limiting
   - **Benefit**: Security, scalability

### What Could Be Improved

1. **Missing Error Boundaries**
   - No global error handling
   - **Impact**: Potential white screen of death
   - **Recommendation**: Add `error.tsx` and `not-found.tsx`

2. **No Loading States for Blog**
   - Blank page during data fetch
   - **Impact**: Poor UX on slow connections
   - **Recommendation**: Add `loading.tsx` with skeletons

3. **Chat API Lacks Rate Limiting**
   - No protection against abuse
   - **Impact**: Potential cost overrun
   - **Recommendation**: Add Vercel rate limiting or Upstash

4. **Limited Testing**
   - No automated tests found
   - **Impact**: Regressions possible
   - **Recommendation**: Add Playwright for E2E tests

### What to Avoid in Future Projects

1. **Hardcoded Configuration Values**
   - Some values in config files could be env vars
   - **Why bad**: Requires rebuild for changes
   - **Alternative**: Use environment variables

2. **Large Client Components**
   - Some client components could be smaller
   - **Why bad**: More JS sent to client
   - **Alternative**: Push client boundaries down

3. **Missing Image Optimization**
   - Some images use regular `img` tag
   - **Why bad**: Slower loads, no WebP
   - **Alternative**: Use Next.js Image component

---

## Reusability Assessment

### Components Reusable As-Is

| Component | Reusability | Notes |
|-----------|-------------|-------|
| `ThemeProvider.tsx` | High | Works with any Next.js project |
| `Header.tsx` | Medium | Needs link customization |
| `Footer.tsx` | High | Just update social links |
| `ui/button.tsx` | Very High | Fully reusable |
| `ui/card.tsx` | Very High | Fully reusable |
| `JsonLdSchema.tsx` | High | Adjust schema types as needed |

### Patterns Worth Generalizing

1. **PortableText Renderers** → Create package for Sanity + Next.js
2. **API Route Pattern** → Template for AI integrations
3. **Theme System** → Standalone Tailwind theme package
4. **Chat Hook** → Generic chat state management

### Domain-Specific (Not Reusable)

1. **Hero Section** → Specific to Owais's branding
2. **About Content** → Personal information
3. **Project Data** → Specific to this portfolio
4. **Experience Timeline** → Personal work history

---

## Quick Reference: Project Commands

```bash
# Development
npm run dev          # Start dev server on :3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity
npx sanity cms       # Open Sanity Studio locally
npx sanity deploy    # Deploy Sanity schema

# Deployment
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production
```

---

## Environment Variables Template

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
```

---

*This reusable intelligence is extracted from the portfolio website codebase. All patterns and decisions are inferred from implementation details.*
