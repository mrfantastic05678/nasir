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
    tagline: "Optimize Business Workflows with AI",
    description:
      "Intelligent automation systems that optimize business workflows, increase efficiency, and drive measurable results using n8n, Make.com, and custom AI solutions.",
    longDescription:
      "Intelligent automation is the key to scaling your business efficiently. I build AI-powered automation systems and workflows that transform how businesses operate. From automating repetitive tasks to integrating AI models that handle complex queries,every solution is designed to deliver measurable results like increased efficiency, reduced operational costs, and higher conversion rates.",
    icon: "Zap",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Business workflow optimization",
      "AI-powered decision making",
      "Repetitive task automation",
      "Complex query handling",
      "n8n workflow automation",
      "Make.com integrations",
      "Custom Python/Node.js scripts",
      "CRM & database automation",
      "Email automation systems",
      "Webhook & API integrations",
      "Process optimization",
      "Measurable ROI tracking",
    ],
    techStack: [
      "n8n Automation",
      "Make.com",
      "OpenAI GPT Integration",
      "Google Gemini",
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
        title: "Workflow Discovery",
        description:
          "Analyze your current business workflows to identify automation opportunities. Calculate potential time savings and ROI.",
      },
      {
        step: 2,
        title: "AI Integration Design",
        description:
          "Design automation workflows with AI model integration, decision trees, error handling, and strategic business alignment.",
      },
      {
        step: 3,
        title: "Automation Development",
        description:
          "Build intelligent automation systems using n8n, Make.com, or custom scripts. Integrate AI models for complex query handling.",
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description:
          "Test with real data, optimize for measurable results, and deploy with monitoring for efficiency tracking.",
      },
      {
        step: 5,
        title: "Deployment & Handoff",
        description:
          "Deploy with full documentation, train your team, and provide ongoing support for optimal results.",
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
    tagline: "Intelligent Conversational AI Solutions",
    description:
      "Custom AI chatbots that handle complex queries, automate repetitive tasks, and integrate seamlessly into client-facing products using OpenAI, Gemini, and modern LLMs.",
    longDescription:
      "I lead the integration of AI models into client-facing products. I build custom AI chatbots that go beyond simple FAQ responders,intelligent assistants that handle complex queries, maintain context, and take meaningful actions. Whether for websites, WhatsApp Business, Discord servers, or custom platforms,your chatbot will provide 24/7 intelligent support that automates repetitive tasks while delivering exceptional customer experiences.",
    icon: "Bot",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Complex query handling",
      "AI model integration (GPT-4, Gemini)",
      "Repetitive task automation",
      "Client-facing product integration",
      "Website chatbots",
      "WhatsApp Business bots",
      "Discord server bots",
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
        title: "Requirements & Strategy",
        description:
          "Understand your chatbot's purpose, business goals, target audience, platform (web, WhatsApp, Discord), and key features for client-facing integration.",
      },
      {
        step: 2,
        title: "AI Model Selection & Design",
        description:
          "Select optimal AI model for complex query handling, design conversation flows, create persona, and plan integration with existing products.",
      },
      {
        step: 3,
        title: "Development & Integration",
        description:
          "Build chatbot with selected AI model, implement complex query logic, integrate into client-facing products, and add conversation memory.",
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description:
          "Test with real conversations, fine-tune for complex queries, optimize task automation, and ensure seamless user experience.",
      },
      {
        step: 5,
        title: "Deployment & Analytics",
        description:
          "Deploy to production with conversation analytics. Monitor performance, track task automation rates, and iterate based on user interactions.",
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
          "I build chatbots for websites (embedded widget), WhatsApp Business, Discord servers, Telegram, and more,depending on your needs.",
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
    title: "Full-Stack Web Development",
    tagline: "Modern Web Applications & Solutions",
    description:
      "Robust full-stack development using Next.js, React, and TypeScript. From landing pages to complex web applications that deliver measurable business results.",
    longDescription:
      "I maintain and expand a robust full-stack skill set. I build modern, fast, and production-ready web applications using Next.js, React, TypeScript, and Tailwind CSS. Every solution is designed to deliver measurable results,increased efficiency, higher conversion rates, and seamless user experiences. Whether you need a landing page, corporate website, or complex web application, I ensure all digital services align strategically with your business goals.",
    icon: "Rocket",
    gradient: "from-orange-500 to-red-500",
    features: [
      "Next.js full-stack development",
      "React & TypeScript",
      "Tailwind CSS styling",
      "Frontend responsiveness",
      "Backend stability",
      "Performance optimization",
      "SEO optimization",
      "Contact forms & integrations",
      "CMS integration (optional)",
      "Analytics setup",
      "Conversion-focused design",
    ],
    techStack: [
      "Next.js (App Router)",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion (animations)",
      "Sanity CMS (optional)",
      "Vercel deployment",
      "Google Analytics",
      "Brevo email",
      "Node.js / Express",
      "PostgreSQL / Prisma",
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description:
          "Understand your requirements, business goals, and target audience. Ensure technical solutions align with business strategy.",
      },
      {
        step: 2,
        title: "Design & Planning",
        description:
          "Create wireframes, choose design system, plan architecture, and ensure solutions bridge technical and business requirements.",
      },
      {
        step: 3,
        title: "Full-Stack Development",
        description:
          "Build with robust frontend and backend. Implement features, integrate APIs, ensure responsiveness and stability.",
      },
      {
        step: 4,
        title: "Testing & Optimization",
        description:
          "Test across devices, optimize for performance, verify measurable results, and ensure business goals are met.",
      },
      {
        step: 5,
        title: "Launch & Support",
        description:
          "Deploy to production with analytics, provide documentation, and offer ongoing support for optimal performance.",
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
      "Selling online requires more than just a product catalog,you need smooth checkout experiences, secure payments, inventory management, and order fulfillment. I build complete e-commerce solutions using Shopify, WooCommerce (WordPress), or custom Next.js stores with Stripe payments. From simple product catalogs to complex multi-vendor marketplaces.",
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
      "Modern applications need to communicate with each other seamlessly. Whether you need a robust API for your product, integrations with third-party services like Brevo or Stripe, or real-time features,API development is foundational. I design and build RESTful and GraphQL APIs, create custom integrations, implement webhooks, and enable real-time communication.",
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
        question: "REST or GraphQL,which should I choose?",
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
    tagline: "Bridge Between Technical & Business",
    description:
      "Technical consulting that bridges technical teams and clients. Ensuring solutions are functional and strategically aligned with business goals.",
    longDescription:
      "With years of experience acting as a bridge between technical teams and clients, I provide expert consulting that ensures every solution is not only functional but also strategically aligned with business goals. Whether you need technical architecture guidance, code reviews, team training, or help navigating complex technical decisions,I help both technical and non-technical stakeholders achieve alignment and avoid costly mistakes.",
    icon: "Lightbulb",
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "Technical-business alignment",
      "Architecture design & review",
      "Code reviews & audits",
      "Tech stack recommendations",
      "Client communication bridge",
      "Team training & mentorship",
      "Startup CTO advisory",
      "Process optimization",
      "Performance optimization",
      "Strategic technical guidance",
    ],
    techStack: [
      "System Design",
      "Next.js ecosystem",
      "AI/ML technologies",
      "Cloud architecture",
      "Best practices & patterns",
      "Performance analysis",
      "Business strategy alignment",
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Discovery",
        description:
          "Review current technical setup, understand business goals, and identify gaps between technical and business teams.",
      },
      {
        step: 2,
        title: "Alignment Strategy",
        description:
          "Create technical roadmap aligned with business goals. Ensure all stakeholders understand and support the direction.",
      },
      {
        step: 3,
        title: "Implementation & Guidance",
        description:
          "Bridge communication between technical teams and clients. Provide ongoing guidance, code reviews, and mentorship.",
      },
      {
        step: 4,
        title: "Validation & Results",
        description:
          "Review progress against business goals, validate measurable outcomes, and ensure technical solutions deliver expected results.",
      },
      {
        step: 5,
        title: "Continuous Improvement",
        description:
          "Ongoing advisory to maintain technical-business alignment as products evolve and scale.",
      },
    ],
    pricing: [
      {
        name: "Strategy Session",
        price: "$150",
        period: "one-time",
        features: [
          "1 hour consultation",
          "Technical-business alignment",
          "Architecture review",
          "Strategic recommendations",
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
          "Business alignment assessment",
        ],
      },
      {
        name: "Advisory Retainer",
        price: "$600",
        period: "/month",
        highlighted: true,
        features: [
          "Technical-business bridge",
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
          "No! I specialize in bridging technical teams and clients. I translate complex concepts and help all stakeholders make informed decisions.",
      },
      {
        question: "Can you help me hire developers?",
        answer:
          "Yes! I can write job descriptions, interview candidates, assess technical skills, and help build your team.",
      },
      {
        question: "How do I get started?",
        answer:
          "Start with a strategy session where we discuss your current situation, business goals, and technical alignment needs.",
      },
    ],
  },
};
