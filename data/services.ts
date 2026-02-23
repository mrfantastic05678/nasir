export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  gradient: string;
  features: string[];
  techStack: string[];
  process: ProcessStep[];
  pricing?: PricingTier[];
  faqs: FAQ[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const services: Record<string, Service> = {
  "ai-automations": {
    slug: "ai-automations",
    title: "AI Automations & Workflows",
    tagline: "Smart Automation for Business",
    description:
      "Custom AI-powered automation workflows that save time and reduce manual work using n8n, Make.com, and custom scripts.",
    longDescription:
      "Automation is the key to scaling your business efficiently. I build intelligent automation workflows using tools like n8n, Make.com, and custom Python/Node.js scripts. From automating repetitive tasks to integrating AI-powered decision making—transform how your business operates.",
    icon: "Zap",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "n8n workflow automation",
      "Make.com integrations",
      "Custom Python/Node.js scripts",
      "AI-powered decision making",
      "Email automation",
      "CRM & database automation",
      "Report generation",
      "Webhook & API integrations",
      "Process optimization",
    ],
    techStack: [
      "n8n Automation",
      "Make.com",
      "Python Scripts",
      "Node.js Scripts",
      "REST APIs & Webhooks",
      "PostgreSQL / MySQL",
      "Gmail / Google Workspace",
      "Slack / Discord",
      "Zapier / Integromat",
    ],
    process: [
      {
        step: 1,
        title: "Process Discovery",
        description:
          "Analyze your current workflows to identify automation opportunities. Document manual tasks and calculate time savings.",
      },
      {
        step: 2,
        title: "Workflow Design",
        description:
          "Design automation workflows with decision trees, error handling, and integration points.",
      },
      {
        step: 3,
        title: "Automation Development",
        description:
          "Build workflows using n8n, Make.com, or custom scripts. Integrate with your existing tools and APIs.",
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description:
          "Test with real data, optimize performance, and deploy with monitoring and error alerts.",
      },
      {
        step: 5,
        title: "Training & Handoff",
        description:
          "Train your team on managing automations, provide documentation, and ongoing support.",
      },
    ],
    pricing: [
      {
        name: "Starter",
        price: "$400",
        period: "project",
        features: [
          "Single automation workflow",
          "Up to 3 integrations",
          "Basic error handling",
          "n8n/Make setup",
          "2 weeks support",
        ],
      },
      {
        name: "Professional",
        price: "$1,000",
        period: "project",
        highlighted: true,
        features: [
          "Multiple automation workflows",
          "Unlimited integrations",
          "Advanced error handling",
          "Custom scripts",
          "Dashboard monitoring",
          "2 months support",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Full automation platform",
          "On-premise deployment",
          "Custom integrations",
          "Team training",
          "SLA",
          "12 months support",
        ],
      },
    ],
    faqs: [
      {
        question: "What tools do you use for automation?",
        answer:
          "I primarily use n8n and Make.com, along with custom Python and Node.js scripts for complex logic. These tools integrate with hundreds of services.",
      },
      {
        question: "Can you automate my existing workflow?",
        answer:
          "Yes! I analyze your current processes and identify automation opportunities. Most repetitive tasks are great candidates for automation.",
      },
      {
        question: "How do you handle errors in automations?",
        answer:
          "I implement robust error handling with retries, fallback options, and alerting so you're always informed if something needs attention.",
      },
    ],
  },

  "chatbot-development": {
    slug: "chatbot-development",
    title: "AI Chatbot Development",
    tagline: "Smart Conversational AI",
    description:
      "Custom AI chatbots for websites, WhatsApp, and Discord. Powered by OpenAI, Gemini, or open-source LLMs.",
    longDescription:
      "Chatbots are no longer just FAQ responders—they're intelligent assistants that can understand context, remember conversations, and take actions. I build custom AI chatbots for websites, WhatsApp Business, Discord servers, and more. Powered by OpenAI GPT, Google Gemini, or open-source LMs—your chatbot will provide 24/7 support to your customers.",
    icon: "Bot",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Website chatbots",
      "WhatsApp Business bots",
      "Discord server bots",
      "OpenAI GPT integration",
      "Google Gemini integration",
      "Custom LLM fine-tuning",
      "Conversation context memory",
      "Multi-language support",
      "Analytics dashboard",
    ],
    techStack: [
      "OpenAI API / GPT-4",
      "Google Gemini / PaLM 2",
      "Llama 3 / Mistral (open-source)",
      "Next.js / React",
      "Node.js / Python",
      "WhatsApp Business API",
      "Discord.js",
      "Vector databases (Pinecone)",
      "LangChain / Vercel AI SDK",
    ],
    process: [
      {
        step: 1,
        title: "Requirement Gathering",
        description:
          "Understand your chatbot's purpose, target audience, platform (web, WhatsApp, Discord), and key features.",
      },
      {
        step: 2,
        title: "Design & Persona",
        description:
          "Design conversation flow, create chatbot persona, define tone and personality, and plan for edge cases.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Build chatbot with selected AI model, implement conversation logic, integrate with your platform, and add memory.",
      },
      {
        step: 4,
        title: "Testing & Training",
        description:
          "Test with real conversations, fine-tune responses, handle edge cases, and optimize for user experience.",
      },
      {
        step: 5,
        title: "Deployment & Analytics",
        description:
          "Deploy to production with conversation analytics. Monitor performance and iterate based on user interactions.",
      },
    ],
    pricing: [
      {
        name: "Basic Bot",
        price: "$500",
        period: "project",
        features: [
          "Simple chatbot",
          "One platform (web/WhatsApp/Discord)",
          "GPT-3.5 or equivalent",
          "Basic conversation flow",
          "1 month support",
        ],
      },
      {
        name: "Advanced Bot",
        price: "$1,200",
        period: "project",
        highlighted: true,
        features: [
          "Multi-platform deployment",
          "GPT-4 or Gemini Pro",
          "Conversation memory",
          "Custom knowledge base",
          "Analytics dashboard",
          "2 months support",
        ],
      },
      {
        name: "Enterprise Bot",
        price: "Custom",
        features: [
          "Custom LLM fine-tuning",
          "Omnichannel deployment",
          "Advanced analytics",
          "Custom integrations",
          "SLA",
          "12 months support",
        ],
      },
    ],
    faqs: [
      {
        question: "Which platforms can chatbots be deployed to?",
        answer:
          "I build chatbots for websites (embedded widget), WhatsApp Business, Discord servers, Telegram, and more—depending on your needs.",
      },
      {
        question: "Do chatbots understand context?",
        answer:
          "Yes! I implement conversation memory so chatbots remember previous messages and maintain context throughout conversations.",
      },
      {
        question: "Can I train the chatbot on my data?",
        answer:
          "Absolutely. I can integrate your knowledge base (PDFs, websites, databases) so the chatbot provides accurate, business-specific responses.",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    tagline: "Modern Websites & Applications",
    description:
      "Full-stack web development using Next.js, React, and TypeScript. From landing pages to complex web applications.",
    longDescription:
      "Your website is often the first impression customers have of your business. I build modern, fast, and beautiful websites and web applications using Next.js 15, React, TypeScript, and Tailwind CSS. Whether you need a simple landing page, a portfolio, a corporate website, or a complex web application—I deliver production-ready code with excellent performance.",
    icon: "Rocket",
    gradient: "from-orange-500 to-red-500",
    features: [
      "Next.js 15 with App Router",
      "React & TypeScript",
      "Tailwind CSS styling",
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Contact forms & integrations",
      "CMS integration (optional)",
      "Analytics setup",
    ],
    techStack: [
      "Next.js 15 (App Router)",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion (animations)",
      "Sanity CMS (optional)",
      "Vercel deployment",
      "Google Analytics",
      "Brevo email",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description:
          "Understand your requirements, target audience, and goals. Review competitors and discuss design preferences.",
      },
      {
        step: 2,
        title: "Design",
        description:
          "Create wireframes, choose color scheme and typography, design pages, and build interactive components.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Build your website with Next.js, implement all features and pages, integrate APIs and services.",
      },
      {
        step: 4,
        title: "Testing & Review",
        description:
          "Test across browsers and devices, fix bugs, optimize performance, and review with you.",
      },
      {
        step: 5,
        title: "Launch & Support",
        description:
          "Deploy to production with analytics, set up domain and hosting, provide training and ongoing support.",
      },
    ],
    pricing: [
      {
        name: "Landing Page",
        price: "$300",
        period: "starting at",
        features: [
          "Single page",
          "Responsive design",
          "Contact form",
          "SEO optimization",
          "Deployment",
          "1 week support",
        ],
      },
      {
        name: "Business Website",
        price: "$800",
        period: "starting at",
        highlighted: true,
        features: [
          "Up to 10 pages",
          "Responsive design",
          "CMS integration (optional)",
          "SEO optimization",
          "Analytics setup",
          "1 month support",
        ],
      },
      {
        name: "Web Application",
        price: "$1,500",
        period: "starting at",
        features: [
          "Custom web application",
          "Database integration",
          "Authentication",
          "Admin dashboard",
          "API development",
          "3 months support",
        ],
      },
      ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Landing pages take 3-5 days. Business websites typically 1-3 weeks. Complex web applications 4-8 weeks depending on complexity.",
      },
      {
        question: "Do you work with design tools?",
        answer:
          "Yes! I work with Figma, Adobe XD, or can provide my own design recommendations. I can implement any design you provide.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely! All websites I build are fully responsive and work great on phones, tablets, and desktops.",
      },
    ],
  },

  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    tagline: "Online Stores Made Easy",
    description:
      "Shopify, WooCommerce, and custom e-commerce solutions. From product setup to payment integration.",
    longDescription:
      "Selling online requires more than just a product catalog—you need smooth checkout experiences, secure payments, inventory management, and order fulfillment. I build complete e-commerce solutions using Shopify, WooCommerce (WordPress), or custom Next.js stores with Stripe payments. From simple product catalogs to complex multi-vendor marketplaces.",
    icon: "ShoppingCart",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Shopify store setup",
      "WooCommerce development",
      "Stripe payment integration",
      "Product catalog management",
      "Shopping cart & checkout",
      "Order management",
      "Shipping & tax setup",
      "Inventory tracking",
      "Customer accounts",
    ],
    techStack: [
      "Shopify (Liquid, React)",
      "WooCommerce (WordPress, PHP)",
      "Next.js (custom stores)",
      "Stripe Payments",
      "PayPal",
      "PostgreSQL / MySQL",
      "Brevo email notifications",
      "Sanity CMS (product data)",
    ],
    process: [
      {
        step: 1,
        title: "Platform Selection",
        description:
          "Recommend the best e-commerce platform based on your needs, budget, and technical requirements.",
      },
      {
        step: 2,
        title: "Store Setup",
        description:
          "Set up products, categories, pricing, images, variants, and product attributes.",
      },
      {
        step: 3,
        title: "Payment Integration",
        description:
          "Integrate Stripe, PayPal, or other payment gateways. Set up tax calculation and shipping options.",
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description:
          "Test checkout flow, fix issues, optimize conversion rates, and set up abandoned cart recovery.",
      },
      {
        step: 5,
        title: "Launch & Marketing",
        description:
          "Deploy store, set up analytics and email marketing, and provide training for store management.",
      },
    ],
    pricing: [
      {
        name: "Shopify Setup",
        price: "$400",
        period: "starting at",
        features: [
          "Store configuration",
          "Theme customization",
          "Product setup (up to 20 products)",
          "Payment setup",
          "Basic SEO",
          "2 weeks support",
        ],
      },
      {
        name: "WooCommerce Store",
        price: "$700",
        period: "starting at",
        highlighted: true,
        features: [
          "WordPress + WooCommerce",
          "Custom theme or child theme",
          "Product setup (up to 50 products)",
          "Payment gateway integration",
          "SEO optimization",
          "1 month support",
        ],
      },
      {
        name: "Custom E-commerce",
        price: "$2,000",
        period: "starting at",
        features: [
          "Next.js custom store",
          "Stripe/PayPal integration",
          "Custom checkout flow",
          "Admin dashboard",
          "Advanced features",
          "3 months support",
        ],
      },
    ],
    faqs: [
      {
        question: "Which e-commerce platform should I choose?",
        answer:
          "Shopify for easiest setup, WooCommerce for WordPress sites, custom Next.js for maximum flexibility. I'll recommend based on your specific needs.",
      },
      {
        question: "Can I manage products myself?",
        answer:
          "Yes! I build admin dashboards where you can easily add/edit products, manage orders, and track inventory.",
      },
      {
        question: "How do I handle payments?",
        answer:
          "I integrate secure payment gateways like Stripe or PayPal. Money goes directly to your account, I never handle your payment data.",
      },
    ],
  },

  "api-development": {
    slug: "api-development",
    title: "API Development & Integration",
    tagline: "Connect Everything Seamlessly",
    description:
      "RESTful & GraphQL API design and development. Third-party integrations, webhooks, and real-time features.",
    longDescription:
      "Modern applications need to communicate with each other seamlessly. Whether you need a robust API for your product, integrations with third-party services like Brevo or Stripe, or real-time features—API development is foundational. I design and build RESTful and GraphQL APIs, create custom integrations, implement webhooks, and enable real-time communication.",
    icon: "Cpu",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "RESTful API design",
      "GraphQL API development",
      "API documentation",
      "Third-party integrations",
      "Webhook implementations",
      "Real-time features (SSE, WebSockets)",
      "Authentication & authorization",
      "Rate limiting & caching",
      "API versioning",
    ],
    techStack: [
      "Node.js & Express",
      "Next.js API Routes",
      "GraphQL (Apollo Server)",
      "PostgreSQL & Prisma",
      "Redis (caching)",
      "WebSockets (Socket.io)",
      "OpenAPI/Swagger",
      "Stripe & Brevo APIs",
      "Webhook handlers",
    ],
    process: [
      {
        step: 1,
        title: "API Design",
        description:
          "Design endpoints, data models, authentication strategy, and create API documentation.",
      },
      {
        step: 2,
        title: "Development",
        description:
          "Build APIs with proper validation, error handling, security, and performance optimization.",
      },
      {
        step: 3,
        title: "Integrations",
        description:
          "Connect with third-party services like payment gateways, email services, CRMs, or custom tools.",
      },
      {
        step: 4,
        title: "Documentation & Testing",
        description:
          "Write comprehensive API documentation, implement tests, and ensure reliability.",
      },
      {
        step: 5,
        title: "Deployment & Monitoring",
        description:
          "Deploy with monitoring, logging, and alerting. Provide ongoing maintenance.",
      },
    ],
    pricing: [
      {
        name: "Single Integration",
        price: "$200",
        period: "starting at",
        features: [
          "One third-party integration",
          "Webhook or API setup",
          "Basic documentation",
          "Testing",
          "1 week support",
        ],
      },
      {
        name: "Custom API",
        price: "$800",
        period: "starting at",
        highlighted: true,
        features: [
          "Full API design",
          "REST or GraphQL",
          "Authentication",
          "Documentation",
          "Testing suite",
          "1 month support",
        ],
      },
      {
        name: "Enterprise API",
        price: "Custom",
        features: [
          "Complex architecture",
          "Multiple integrations",
          "Real-time features",
          "SLA",
          "Dedicated support",
        ],
      },
    ],
    faqs: [
      {
        question: "REST or GraphQL—which should I choose?",
        answer:
          "REST is simpler and more common. GraphQL is better for complex data requirements and mobile apps. I'll recommend based on your use case.",
      },
      {
        question: "Can you integrate with any service?",
        answer:
          "Any service with documented APIs or webhooks. I've integrated Stripe, Brevo, Gmail, Slack, CRMs, payment gateways, and more.",
      },
      {
        question: "Do you provide API documentation?",
        answer:
        "Yes. Comprehensive documentation with examples is included with every API project, using OpenAPI/Swagger or GraphQL schemas.",
      },
    ],
  },

  "technical-consulting": {
    slug: "technical-consulting",
    title: "Technical Consulting & Advisory",
    tagline: "Expert Technical Guidance",
    description:
      "Technical consulting, code reviews, architecture design, and mentorship. Navigate technical decisions with confidence.",
    longDescription:
      "Great products are built on solid technical foundations. Whether you need help with technical architecture, code reviews, team training, or strategic technical decisions—I provide expert consulting to guide your journey. I help non-technical founders and startup teams make informed technical decisions and avoid costly mistakes.",
    icon: "Lightbulb",
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "Technical architecture design",
      "Code reviews & audits",
      "Tech stack recommendations",
      "Development process improvement",
      "Team training & mentorship",
      "Startup CTO advisory",
      "Debugging & troubleshooting",
      "Performance optimization",
      "Security audits",
    ],
    techStack: [
      "System Design",
      "Next.js ecosystem",
      "AI/ML technologies",
      "Cloud architecture",
      "Best practices & patterns",
      "Performance analysis",
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "Review your current technical setup, identify gaps, and understand your goals and challenges.",
      },
      {
        step: 2,
        title: "Strategy",
        description:
          "Create technical roadmap, define priorities, and plan implementation approach.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Provide ongoing guidance, review code, help with hiring, and mentor your team.",
      },
      {
        step: 4,
        title: "Validation",
        description:
          "Review progress against goals, adjust strategy based on learnings, and validate outcomes.",
      },
      {
        step: 5,
        title: "Continuous Improvement",
        description:
          "Ongoing advisory, staying aligned as your product evolves and scales.",
      },
    ],
    pricing: [
      {
        name: "Strategy Session",
        price: "$150",
        period: "one-time",
        features: [
          "1 hour consultation",
          "Technical recommendations",
          "Architecture review",
          "Follow-up summary",
        ],
      },
      {
        name: "Code Review",
        price: "$300",
        period: "per review",
        features: [
          "Comprehensive review",
          "Security check",
          "Performance analysis",
          "Improvement recommendations",
        ],
      },
      {
        name: "Advisory Retainer",
        price: "$600",
        period: "/month",
        highlighted: true,
        features: [
          "Ongoing guidance",
          "Weekly calls",
          "Code reviews",
          "Slack access",
          "Priority support",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to be technical?",
        answer:
          "No! I help both technical and non-technical founders. I translate complex concepts and help you make informed decisions.",
      },
      {
        question: "Can you help me hire developers?",
        answer:
          "Yes! I can write job descriptions, interview candidates, assess technical skills, and help build your team.",
      },
      {
        question: "How do I get started?",
        answer:
          "Start with a strategy session where we discuss your current situation, goals, and I'll provide a roadmap forward.",
      },
    ],
  },
};
