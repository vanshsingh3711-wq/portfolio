export interface CustomProject {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription?: string;
  languages: string[];
  topics: string[];
  image: string;
  siteUrl?: string;
  codeUrl?: string;
  siteType?: 'production' | 'demo';
  features?: string[];
  challenges?: string[];
  technologies?: {
    frontend?: string[];
    backend?: string[];
    tools?: string[];
  };
  year?: string;
  status?: 'completed' | 'in-progress' | 'archived';
  relatedProjects?: string[];
  kind?: 'professional' | 'client';
  isCustom?: true;
}

export const customProjects: CustomProject[] = [
  {
    id: 'outreach',
    name: 'Outreach',
    title: 'Outreach — Autonomous AI Outbound Pipeline & Prospecting Platform',
    description: 'Autonomous B2B outbound prospecting engine discovering high-intent accounts, identifying decision-makers, and generating hyper-personalized pitches with DeepSeek AI.',
    languages: ['Python', 'TypeScript', 'PostgreSQL'],
    topics: ['ai-outbound', 'deepseek-ai', 'fastapi', 'celery', 'redis', 'nextjs', 'prospecting', 'saas'],
    longDescription: 'Outreach is a production-grade autonomous outbound pipeline and prospecting platform. It discovers high-intent B2B accounts, identifies key decision-makers, extracts and verifies contact emails, and crafts hyper-personalized pitches using DeepSeek AI. Built with a Next.js 14 responsive dashboard and a robust FastAPI backend with Celery distributed workers, Redis caching/broker, and PostgreSQL database, it automates cold outreach campaigns with multi-inbox deliverability management.',
    image: '/assets/cases/outreach-01.webp',
    siteUrl: 'https://outreach-alpha-gules.vercel.app',
    codeUrl: 'https://github.com/vanshsingh3711-wq/Outreach',
    siteType: 'production',
    year: '2026',
    status: 'completed',
    kind: 'professional',
    isCustom: true,
    technologies: {
      frontend: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
      backend: ['FastAPI', 'Python', 'DeepSeek AI API', 'Celery', 'Redis', 'PostgreSQL'],
      tools: ['Docker', 'Multi-Inbox Warmup', 'SPF/DKIM/DMARC Verifier', 'AsyncIO']
    },
    features: [
      'Autonomous B2B account discovery and intent filtering pipeline',
      'DeepSeek AI integration for hyper-personalized pitch and cold email generation',
      'Asynchronous Celery task execution with Redis queue for high-throughput dispatch',
      'Comprehensive domain deliverability management and multi-inbox warmup tracking'
    ],
    challenges: [
      'Designing contextual prompt orchestration with DeepSeek AI to avoid generic outreach templates',
      'Managing rate-limiting and task retry cascades across distributed Celery worker nodes',
      'Preventing cold domain burn through automated SPF/DKIM verification and warmup ramping'
    ],
    relatedProjects: ['ai-director', 'lucy', 'lead-catcher']
  },
  {
    id: 'ai-director',
    name: 'AI Director',
    title: 'AI Director — Distributed Video Production Platform',
    description: 'Novel AI → structured scene definition → deterministic rendering architecture that generates animations, motion graphics, and captions without arbitrary code execution.',
    languages: ['TypeScript', 'React', 'Remotion'],
    topics: ['remotion', 'aws-ecs', 'fargate', 'sqs', 'ffmpeg', 'generative-video', 'distributed-systems'],
    longDescription: 'AI Director is an open-source distributed video production platform and deterministic rendering engine. Instead of relying on brittle, nondeterministic code generation, it translates user prompts and creative scripts into a structured JSON scene definition, which is then rendered with pixel-perfect reproducibility using Remotion. The backend powers an asynchronous cloud rendering pipeline on AWS: SQS message queues ingest render jobs and trigger auto-scaling ECS/Fargate container fleets. FFmpeg handles multi-track compositing, stitching, audio mastering, and cross-format encoding.',
    image: '/assets/cases/ai-director-01.webp',
    codeUrl: 'https://github.com/vanshsingh3711-wq/Ai-Director',
    siteType: 'production',
    year: '2026',
    status: 'completed',
    kind: 'professional',
    isCustom: true,
    technologies: {
      frontend: ['React', 'Remotion', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'FFmpeg', 'AWS SQS', 'AWS ECS / Fargate', 'Docker'],
      tools: ['Cloud Architecture', 'Deterministic Scene AST', 'Video Encoding']
    },
    features: [
      'Deterministic scene definition engine generating motion graphics, captions, and transitions safely',
      'Asynchronous cloud rendering pipeline on AWS ECS/Fargate with SQS auto-scaling queues',
      'FFmpeg composition engine for audio leveling, subtitle burning, and parallel chunk encoding',
      'Multi-aspect ratio export (9:16 vertical shorts, 16:9 cinematic landscape, 1:1 square)'
    ],
    challenges: [
      'Eliminating nondeterministic layout bugs in headless Chromium container rendering',
      'Managing spot container autoscaling and task retries under bursty video render workloads',
      'Optimizing FFmpeg rendering time and CPU core utilization across concurrent video jobs'
    ],
    relatedProjects: ['outreach', 'lucy', 'lead-catcher']
  },
  {
    id: 'lucy',
    name: 'Lucy',
    title: 'Lucy — AI Shopping Agent with Model Context Protocol',
    description: 'Conversational AI personal stylist that discovers suitable products via Shopify API and structured MCP (Model Context Protocol) tool orchestration.',
    languages: ['TypeScript', 'SQL'],
    topics: ['mcp', 'model-context-protocol', 'ai-agent', 'shopify-api', 'e-commerce', 'prisma'],
    longDescription: 'Lucy is an autonomous personal styling agent built on the open Model Context Protocol (MCP). It interacts with shoppers through natural conversation, extracting style preferences, fit requirements, and budget constraints. Rather than guessing inventory, Lucy invokes structured MCP tools connecting directly to Shopify APIs, dynamically filtering live product catalogs and returning curated recommendations with real-time stock verification.',
    image: '/assets/cases/lucy-01.webp',
    codeUrl: 'https://github.com/vanshsingh3711-wq/lucy',
    siteType: 'demo',
    year: '2026',
    status: 'completed',
    kind: 'professional',
    isCustom: true,
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Model Context Protocol (MCP)', 'Shopify GraphQL API', 'Neon PostgreSQL'],
      tools: ['Prisma ORM', 'OpenAI Function Calling', 'Prompt Engineering']
    },
    features: [
      'Model Context Protocol (MCP) server integration for structured e-commerce tool execution',
      'Dynamic multi-constraint filter extraction (price bounds, colorways, categories, inventory)',
      'Natural dialogue styling recommendations with rich interactive product cards'
    ],
    challenges: [
      'Implementing strict MCP protocol schema validation for zero-hallucination tool calls',
      'Gracefully reconciling conflicting user stylistic preferences during multi-turn chats'
    ],
    relatedProjects: ['outreach', 'ai-director', 'lead-catcher']
  },
  {
    id: 'lead-catcher',
    name: 'Lead Catcher',
    title: 'Lead Catcher — AI Voice Receptionist for Real Estate',
    description: 'Scalable, multi-tenant voice AI platform that handles inbound/outbound calls to qualify real estate leads 24/7 with strict data isolation.',
    languages: ['Python', 'FastAPI', 'PostgreSQL'],
    topics: ['voice-ai', 'fastapi', 'twilio', 'deepgram', 'openai', 'postgresql', 'realtime-streaming', 'saas'],
    longDescription: 'Lead Catcher is a production-grade, multi-tenant AI voice platform engineered for real estate agencies. It manages inbound and outbound call pipelines around the clock to qualify buyer and seller leads with strict data isolation enforced via company_id. At its core is a real-time streaming pipeline processing Base64 μ-law 8kHz audio with sub-second latency across Twilio WebSockets, Deepgram Speech-to-Text, OpenAI GPT-4o, and Deepgram Text-to-Speech. Reliable CRM synchronization is achieved through background workers utilizing PostgreSQL SELECT FOR UPDATE SKIP LOCKED queues, delivering resilient, backoff-aware job updates to HubSpot.',
    image: '/assets/cases/lead-catcher-01.webp',
    codeUrl: 'https://github.com/vanshsingh3711-wq/Lead-Catcher',
    siteType: 'production',
    year: '2026',
    status: 'completed',
    kind: 'professional',
    isCustom: true,
    technologies: {
      backend: ['FastAPI', 'Python', 'Twilio WebSockets', 'Deepgram STT/TTS', 'OpenAI GPT-4o', 'PostgreSQL', 'HubSpot CRM API'],
      frontend: ['React', 'Next.js', 'Tailwind CSS'],
      tools: ['JWT', 'Argon2id', 'Docker', 'SELECT FOR UPDATE SKIP LOCKED', 'AsyncIO']
    },
    features: [
      'Multi-tenant voice AI platform qualifying real estate leads 24/7 with strict company_id isolation',
      'Real-time streaming pipeline (Twilio WebSocket → Deepgram STT → OpenAI GPT-4o → Deepgram TTS)',
      'Sub-second latency voice streaming over Base64 μ-law 8kHz audio packets',
      'PostgreSQL SELECT FOR UPDATE SKIP LOCKED queue workers for resilient CRM job dispatch',
      'Argon2id password hashing and JWT token authentication with enterprise audit readiness'
    ],
    challenges: [
      'Achieving sub-second voice round-trip latency across distributed WebSocket hops',
      'Preventing tenant cross-talk and memory leakage in streaming audio concurrency',
      'Ensuring reliable CRM dispatch during HubSpot rate limits via exponential backoff workers'
    ],
    relatedProjects: ['outreach', 'ai-director', 'lucy']
  }
];
