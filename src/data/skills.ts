export interface SkillCategory {
  title: string;
  titleEn: string;
  skills: string[];
}

// Technical skills organised by categories (source: Resume & GitHub of Vansh Singh)
export const skillCategories: Record<string, SkillCategory> = {
  aiTooling: {
    title: 'IA & Outils d\'Agents',
    titleEn: 'AI & Agent Tooling',
    skills: [
      'OpenAI API',
      'Anthropic API',
      'Deepgram (STT/TTS)',
      'Model Context Protocol (MCP)',
      'LangChain',
      'LangGraph',
      'Twilio WebSockets',
      'FFmpeg',
      'AI Agents',
      'RAG & Vector Embeddings'
    ]
  },
  backend: {
    title: 'Back-End & Architecture',
    titleEn: 'Backend & Systems',
    skills: [
      'FastAPI',
      'Python',
      'Node.js',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'Redis / Upstash',
      'Prisma ORM',
      'Neon',
      'RESTful APIs',
      'SELECT FOR UPDATE SKIP LOCKED'
    ]
  },
  frontend: {
    title: 'Front-End & Rendu',
    titleEn: 'Frontend & Rendering',
    skills: [
      'React',
      'Next.js',
      'Remotion',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'GSAP Animations',
      'WebGL'
    ]
  },
  cloudDevops: {
    title: 'Cloud & Infrastructure',
    titleEn: 'Cloud & Infrastructure',
    skills: [
      'AWS (ECS, Fargate, SQS)',
      'Docker',
      'Vercel',
      'Linux Administration',
      'Git & GitHub',
      'CI/CD Pipelines',
      'Microservices',
      'Distributed Systems'
    ]
  }
};
