import { Seo } from '../components/Seo';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { ArrowLeft, Download, Mail, Phone, MapPin, Github, Linkedin, GitPullRequest, Check } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SkillGroup {
  title: string;
  items: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

interface Education {
  title: string;
  school: string;
  period: string;
  description: string;
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend & Systems',
    items: ['FastAPI', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis / Upstash', 'Prisma ORM', 'Neon', 'LangChain', 'LangGraph'],
  },
  {
    title: 'AI, Audio & Media Tooling',
    items: ['OpenAI API', 'Anthropic API', 'Deepgram (STT/TTS)', 'Model Context Protocol (MCP)', 'Twilio WebSockets', 'FFmpeg', 'AI Agents'],
  },
  {
    title: 'Frontend & Video Rendering',
    items: ['React', 'Next.js', 'Remotion', 'Tailwind CSS', 'GSAP', 'WebGL'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS (ECS, Fargate, SQS)', 'Docker', 'Vercel', 'Linux', 'Git / GitHub', 'CI/CD Pipelines'],
  },
];

const experiences: Experience[] = [
  {
    title: 'AI Engineer & System Architect',
    company: 'Lead Catcher',
    period: '2026',
    bullets: [
      'Built a scalable, multi-tenant voice AI platform qualifying real estate leads 24/7 with strict company_id data isolation.',
      'Engineered a real-time streaming pipeline (Twilio WebSocket → Deepgram STT → OpenAI GPT-4o → Deepgram TTS) processing Base64 μ-law 8kHz audio with sub-second latency.',
      'Implemented background CRM sync workers using PostgreSQL SELECT FOR UPDATE SKIP LOCKED for reliable, backoff-aware job processing to HubSpot.',
      'Secured authentication with JWT tokens and Argon2id password hashing; authored a full production-readiness audit document.',
    ],
  },
  {
    title: 'Systems & Video Rendering Engineer',
    company: 'AI Video Editor & Generator (AI Director)',
    period: '2026',
    bullets: [
      'Designed a novel AI → structured scene definition → deterministic rendering architecture generating motion graphics, layouts, animations, transitions, and captions without arbitrary code execution.',
      'Built an asynchronous cloud rendering pipeline on AWS using SQS message queues triggering ECS/Fargate containers for parallel video processing and autoscaling.',
      'Integrated FFmpeg for final video composition, stitching, and encoding with support for multiple output formats.',
    ],
  },
  {
    title: 'Autonomous Outbound Systems Engineer',
    company: 'Outreach — Autonomous AI Prospecting Platform',
    period: '2026',
    bullets: [
      'Architected an autonomous B2B outbound prospecting platform discovering high-intent accounts and verified decision-maker emails.',
      'Integrated DeepSeek AI for dynamic hyper-personalized pitch and cold email generation based on account signals and tech stacks.',
      'Engineered asynchronous task queues with FastAPI, Celery, and Redis for high-throughput dispatch with automated deliverability warmup.',
    ],
  },
  {
    title: 'Autonomous Agent Engineer',
    company: 'Lucy — AI Shopping Agent',
    period: '2026',
    bullets: [
      'Developed an AI personal stylist agent that understands user requirements through natural conversation and discovers suitable products via the Shopify API.',
      'Used MCP (Model Context Protocol) for structured tool-use, enabling the agent to query product catalogs, filter by preferences, and present curated recommendations.',
    ],
  },
];

const education: Education[] = [
  {
    title: 'Senior Secondary (XII) — PCM',
    school: 'Karmaneya School of Excellence',
    period: '2023',
    description: 'Physics, Chemistry, and Mathematics curriculum with strong foundations in analytical reasoning, algorithms, and computational problem solving.',
  },
  {
    title: 'Self-Directed Specialization in AI & Systems',
    school: 'Independent Research & Open-Source Studies',
    period: '2023 – Present',
    description: 'Active open-source contributions and deep architectural exploration of high-performance AI Gateways (LiteLLM) and neural audio synthesis systems (VoiceStudio).',
  },
];

interface OpenSourceWork {
  name: string;
  repo: string;
  period: string;
  merged: number;
  open: number;
  stars?: string;
  summary: { en: string; fr: string };
  bullets: { en: string[]; fr: string[] };
  url: string;
}

const openSourceWork: OpenSourceWork[] = [
  {
    name: 'LiteLLM',
    repo: 'BerriAI/litellm',
    period: '2024 – Present',
    merged: 2,
    open: 4,
    stars: '20k+ stars',
    summary: {
      en: 'High-performance AI Gateway proxying 100+ LLMs with unified API, load balancing, and fallbacks.',
      fr: 'Passerelle IA haute performance unifiant 100+ LLMs avec équilibrage de charge et routage de secours.',
    },
    bullets: {
      en: [
        'Contributed 2 merged PRs improving gateway resilience, request fallback routing, and multi-provider load balancing.',
        'Engineered upstream fixes for cost-tracking calculations, token accounting, and retry logic (4 active open PRs).',
      ],
      fr: [
        '2 pull requests fusionnées améliorant la résilience, le routage de secours et l\'équilibrage de charge multi-fournisseurs.',
        'Correctifs amont sur le calcul du suivi des coûts et la comptabilisation des jetons (4 PRs ouvertes en cours).',
      ],
    },
    url: 'github.com/BerriAI/litellm',
  },
  {
    name: 'VoiceStudio',
    repo: 'vanshsingh3711-wq/VoiceStudio-',
    period: '2024 – Present',
    merged: 1,
    open: 0,
    summary: {
      en: 'Fully local open-source neural speech synthesis and ElevenLabs alternative supporting 640+ languages.',
      fr: 'Alternative open-source et locale à ElevenLabs pour la synthèse vocale neuronale dans 640+ langues.',
    },
    bullets: {
      en: [
        'Merged PR optimizing neural audio processing pipelines and real-time streaming audio playback.',
      ],
      fr: [
        'Pull request fusionnée pour l\'optimisation des pipelines de traitement audio et streaming temps réel.',
      ],
    },
    url: 'github.com/vanshsingh3711-wq/VoiceStudio-',
  },
];

interface Project {
  name: string;
  period: string;
  text: string;
  url: string;
}

const projects: Project[] = [
  {
    name: 'Outreach',
    period: '2026',
    text: 'Autonomous AI outbound pipeline & prospecting platform: DeepSeek AI, Celery, Redis, Next.js 14, verified email deliverability.',
    url: 'github.com/vanshsingh3711-wq/Outreach',
  },
  {
    name: 'AI Director',
    period: '2026',
    text: 'Distributed video production platform & deterministic Remotion rendering architecture on AWS (ECS, Fargate, SQS, FFmpeg).',
    url: 'github.com/vanshsingh3711-wq/Ai-Director',
  },
  {
    name: 'Lucy',
    period: '2026',
    text: 'Conversational shopping stylist powered by Model Context Protocol (MCP) and Shopify GraphQL API.',
    url: 'github.com/vanshsingh3711-wq/lucy',
  },
  {
    name: 'Lead Catcher',
    period: '2026',
    text: 'Real-time multi-tenant voice AI platform: Twilio WebSockets, Deepgram STT/TTS, GPT-4o, sub-second latency.',
    url: 'github.com/vanshsingh3711-wq/Lead-Catcher',
  },
];

const highlights = [
  'Real-time streaming voice AI pipelines with sub-second end-to-end latency.',
  'Multi-tenant cloud architectures with row-level isolation & PostgreSQL SELECT FOR UPDATE SKIP LOCKED queues.',
  'Distributed asynchronous rendering pipelines with AWS ECS/Fargate and SQS message queues.',
  'Pioneering structured tool-use via Model Context Protocol (MCP).',
];

const interests = [
  'AI Agents',
  'Developer Tooling',
  'Distributed Systems',
  'API Design',
  'Cloud Infrastructure',
  'Open Source Software',
  'Deterministic Rendering',
];

const profile =
  'Self-taught AI Engineer and Backend Developer with hands-on experience building production-grade AI-powered applications. Designed and shipped multi-tenant SaaS platforms, real-time voice AI systems, and deterministic video generation pipelines using Python, TypeScript, FastAPI, Next.js, and cloud infrastructure (AWS ECS/Fargate, SQS). Passionate about developer tooling, AI agents, and open-source software.';

const CONTACT = {
  email: 'vanshsingh3711@gmail.com',
  phone: '+91 78755 83974',
  phoneHref: 'tel:+917875583974',
  site: 'github.com/vanshsingh3711-wq',
  github: 'github.com/vanshsingh3711-wq',
  linkedin: 'linkedin.com/in/vanshsingh3711',
};

const RECENT_JOBS = 3;

function CVPrint({ isEn }: { isEn: boolean; tx: (s: string) => string }) {
  const earlier = experiences.slice(RECENT_JOBS);
  const L = isEn
    ? {
        role: 'AI Engineer · Backend Developer · Open-Source Contributor',
        profile: 'Summary',
        openSource: 'Open-Source Contributions (Merged PRs)',
        exp: 'Production Systems & Architectures',
        earlier: 'Additional Systems',
        projects: 'Featured Repositories',
        edu: 'Education',
        skills: 'Technical Skills',
        strengths: 'Key Strengths',
        interests: 'Interests',
        place: 'Nagpur, India',
        merged: 'Merged',
        open: 'Open',
      }
    : {
        role: 'Ingénieur IA · Développeur Back-End · Contributeur Open Source',
        profile: 'Profil',
        openSource: 'Contributions Open Source (PRs fusionnées)',
        exp: 'Systèmes et architectures en production',
        earlier: 'Autres réalisations',
        projects: 'Dépôts et réalisations',
        edu: 'Formation',
        skills: 'Compétences',
        strengths: 'Points forts',
        interests: 'Intérêts',
        place: 'Nagpur, Inde',
        merged: 'Fusionnées',
        open: 'Ouvertes',
      };
  const H = ({ n, children }: { n: string; children: string }) => (
    <h2 className="cvp-h">
      <span>{n}</span>
      {children}
    </h2>
  );

  return (
    <div className="cv-print" lang={isEn ? 'en' : 'fr'}>
      <header className="cvp-head">
        <div>
          <h1 className="cvp-name">Vansh Sushil Singh</h1>
          <p className="cvp-role">{L.role}</p>
        </div>
        <ul className="cvp-contact">
          <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
          <li><a href={`https://${CONTACT.github}`}>{CONTACT.github}</a></li>
          <li><a href={`https://www.${CONTACT.linkedin}`}>{CONTACT.linkedin}</a></li>
          <li>{L.place}</li>
        </ul>
      </header>

      <div className="cvp-grid">
        <div>
          <section>
            <H n="01">{L.profile}</H>
            <p className="cvp-lead">{profile}</p>
          </section>

          <section>
            <H n="02">{L.openSource}</H>
            {openSourceWork.map((o) => (
              <article key={o.name} className="cvp-item">
                <p className="cvp-date">{o.period}</p>
                <div>
                  <h3 className="cvp-title">
                    {o.name}{' '}
                    <span className="cvp-org">
                      — {o.repo} ({o.merged} {L.merged}{o.open > 0 ? `, ${o.open} ${L.open}` : ''}{o.stars ? ` · ${o.stars}` : ''})
                    </span>
                  </h3>
                  <p className="cvp-proj">{o.summary[isEn ? 'en' : 'fr']}</p>
                  <ul className="cvp-bullets">
                    {o.bullets[isEn ? 'en' : 'fr'].map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <section>
            <H n="03">{L.exp}</H>
            {experiences.slice(0, RECENT_JOBS).map((e) => (
              <article key={e.title + e.period} className="cvp-item">
                <p className="cvp-date">{e.period}</p>
                <div>
                  <h3 className="cvp-title">{e.title}</h3>
                  <p className="cvp-org">{e.company}</p>
                  <ul className="cvp-bullets">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </article>
            ))}
            {earlier.length > 0 && (
              <article className="cvp-item">
                <p className="cvp-date">{earlier[earlier.length - 1]?.period} – {earlier[0]?.period}</p>
                <div>
                  <h3 className="cvp-title cvp-title-sm">{L.earlier}</h3>
                  <p className="cvp-org">{earlier.map((e) => e.company).join(' · ')}</p>
                </div>
              </article>
            )}
          </section>

          <section>
            <H n="04">{L.projects}</H>
            {projects.map((p) => (
              <article key={p.name} className="cvp-item">
                <p className="cvp-date">{p.period}</p>
                <div>
                  <h3 className="cvp-title">{p.name}</h3>
                  <p className="cvp-proj">{p.text} <a href={`https://${p.url}`}>{p.url}</a></p>
                </div>
              </article>
            ))}
          </section>
        </div>

        <aside>
          <section>
            <H n="05">{L.skills}</H>
            {skillGroups.map((g) => (
              <div key={g.title} className="cvp-skill">
                <p className="cvp-k">{g.title}</p>
                <p>{g.items.join(' · ')}</p>
              </div>
            ))}
          </section>

          <section>
            <H n="06">{L.edu}</H>
            {education.map((ed) => (
              <div key={ed.title} className="cvp-edu">
                <p className="cvp-k">{ed.period}</p>
                <h3 className="cvp-title cvp-title-sm">{ed.title}</h3>
                <p className="cvp-org">{ed.school}</p>
              </div>
            ))}
          </section>

          <section>
            <H n="07">{L.strengths}</H>
            <ul className="cvp-bullets">
              {highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </section>

          <section>
            <H n="08">{L.interests}</H>
            <p>{interests.join(' · ')}</p>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default function CVPage() {
  const { i18n } = useTranslation();
  const isEn = i18n.language.startsWith('en');
  const tx = (s: string) => s;

  useEffect(() => {
    document.body.classList.add('cv-print-mode');
    return () => {
      document.body.classList.remove('cv-print-mode');
    };
  }, []);

  return (
    <main className="cv-page min-h-screen bg-ink text-paper px-4 pb-16 pt-10 sm:px-6 md:px-10">
      <Seo
        path="/cv"
        type="profile"
        title={isEn ? 'Resume — Vansh Sushil Singh' : 'CV — Vansh Sushil Singh'}
        description="Resume of Vansh Sushil Singh — AI Engineer, Backend Developer and Open-Source Contributor."
      />

      {createPortal(<CVPrint isEn={isEn} tx={tx} />, document.body)}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link to="/" className="btn-ghost" data-magnetic>
            <ArrowLeft className="w-4 h-4" />
            {isEn ? 'Back to website' : 'Retour au site'}
          </Link>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => window.print()} className="btn-ghost" data-magnetic>
              {isEn ? 'Print' : 'Imprimer'}
            </button>
            <a
              href="/assets/Vansh-Sushil-Singh-Resume.pdf"
              download="Vansh-Sushil-Singh-Resume.pdf"
              className="btn-solid"
              data-magnetic
            >
              <Download className="w-4 h-4" />
              {isEn ? 'Download Resume PDF' : 'Télécharger le PDF'}
            </a>
          </div>
        </div>

        <section className="crosshair border border-line bg-white/[0.02] p-6 md:p-10">
          <header className="border-b border-line pb-8">
            <h1 className="display text-[clamp(3rem,8vw,7.5rem)]">VANSH SUSHIL SINGH</h1>
            <p className="heading mt-3 text-[clamp(1.4rem,2.4vw,2.2rem)] text-paper/70">
              AI Engineer · Backend Developer · Open-Source Contributor
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 font-mono text-[12px] uppercase tracking-[0.06em] sm:grid-cols-2 lg:grid-cols-4">
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 text-paper/80 hover:text-paper transition-colors">
                <Mail className="w-4 h-4" />
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 text-paper/80 hover:text-paper transition-colors">
                <Phone className="w-4 h-4" />
                {CONTACT.phone}
              </a>
              <span className="inline-flex items-center gap-2 text-paper/80">
                <MapPin className="w-4 h-4" />
                Nagpur, India
              </span>
              <div className="inline-flex items-center gap-3">
                <a href={`https://${CONTACT.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-paper/80 hover:text-paper transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href={`https://www.${CONTACT.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-paper/80 hover:text-paper transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">{isEn ? 'Summary' : 'Profil'}</h2>
                <p className="text-paper/80 leading-relaxed">{profile}</p>
              </section>

              {/* Open Source Contributions (Merged PRs) */}
              <section>
                <div className="flex flex-wrap items-end justify-between gap-3 mb-5 border-b border-line pb-2">
                  <h2 className="heading text-3xl uppercase">
                    {isEn ? 'Open-Source Contributions (Merged PRs)' : 'Contributions Open Source (PRs fusionnées)'}
                  </h2>
                  <span className="label text-emerald-400">
                    {isEn ? '3 PRs Merged · 4 PRs Open' : '3 PRs fusionnées · 4 PRs ouvertes'}
                  </span>
                </div>

                <div className="space-y-6">
                  {openSourceWork.map((item) => (
                    <article
                      key={item.name}
                      className="border border-line bg-white/[0.02] p-5 transition-colors hover:border-paper/40"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="heading text-2xl">{item.name}</h3>
                            <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                              <Check className="w-3 h-3" />
                              {item.merged} {isEn ? (item.merged > 1 ? 'PRs Merged' : 'PR Merged') : (item.merged > 1 ? 'PRs fusionnées' : 'PR fusionnée')}
                            </span>
                            {item.open > 0 && (
                              <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-amber-300 border border-amber-500/20">
                                <GitPullRequest className="w-3 h-3" />
                                {item.open} {isEn ? 'Open PRs' : 'PRs ouvertes'}
                              </span>
                            )}
                            {item.stars && (
                              <span className="inline-flex items-center rounded bg-paper/5 px-2 py-0.5 font-mono text-[11px] text-paper/60 border border-line">
                                ★ {item.stars}
                              </span>
                            )}
                          </div>
                          <p className="mt-1 font-mono text-xs text-paper/55">{item.repo}</p>
                        </div>
                        <span className="label shrink-0">{item.period}</span>
                      </div>

                      <p className="mt-3 text-sm text-paper/80 leading-relaxed">
                        {item.summary[isEn ? 'en' : 'fr']}
                      </p>

                      <ul className="mt-3 space-y-2 text-paper/80 text-sm">
                        {item.bullets[isEn ? 'en' : 'fr'].map((bullet) => (
                          <li key={bullet} className="leading-relaxed">
                            • {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-3 border-t border-line/60">
                        <a
                          href={`https://${item.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="label inline-flex items-center gap-1.5 hover:text-paper"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>{item.url}</span>
                          <span className="text-paper/40">↗</span>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">
                  {isEn ? 'Key Projects & Systems' : 'Projets et réalisations'}
                </h2>
                <div className="space-y-6">
                  {experiences.map((experience) => (
                    <article key={`${experience.title}-${experience.period}`} className="border border-line bg-white/[0.02] p-4 transition-colors hover:border-paper/30">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="heading text-2xl">{experience.title}</h3>
                          <p className="text-paper/70">{experience.company}</p>
                        </div>
                        <span className="label shrink-0">{experience.period}</span>
                      </div>
                      <ul className="mt-3 space-y-2 text-paper/80 text-sm">
                        {experience.bullets.map((bullet) => (
                          <li key={bullet} className="leading-relaxed">• {bullet}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">{isEn ? 'Featured Systems & Repositories' : 'Dépôts et systèmes clés'}</h2>
                <div className="space-y-5">
                  {projects.map((p) => (
                    <article key={p.name} className="border border-line bg-white/[0.02] p-4 transition-colors hover:border-paper/30">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <h3 className="heading text-2xl">{p.name}</h3>
                        <span className="label shrink-0">{p.period}</span>
                      </div>
                      <p className="mt-2 text-paper/80 text-sm leading-relaxed">{p.text}</p>
                      <a href={`https://${p.url}`} target="_blank" rel="noopener noreferrer" className="label mt-2 inline-block py-1 -my-1 hover:text-paper">
                        {p.url} ↗
                      </a>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">{isEn ? 'Education' : 'Formation'}</h2>
                <div className="space-y-5">
                  {education.map((item) => (
                    <article key={`${item.title}-${item.period}`} className="border border-line bg-white/[0.02] p-4 transition-colors hover:border-paper/30">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3 className="heading text-2xl">{item.title}</h3>
                          <p className="text-paper/70">{item.school}</p>
                        </div>
                        <span className="label shrink-0">{item.period}</span>
                      </div>
                      <p className="mt-2 text-paper/80 text-sm leading-relaxed">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-10">
              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">{isEn ? 'Technical Skills' : 'Compétences'}</h2>
                <div className="space-y-5">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="label mb-2">{group.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="chip">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">{isEn ? 'Core Highlights' : 'Points clés'}</h2>
                <ul className="space-y-3 text-sm text-paper/80">
                  {highlights.map((item) => (
                    <li key={item} className="leading-relaxed">• {item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="heading mb-5 border-b border-line pb-2 text-3xl uppercase">{isEn ? 'Interests & Focus' : 'Centres d\'intérêt'}</h2>
                <div className="flex flex-wrap gap-2 text-sm text-paper/80">
                  {interests.map((interest) => (
                    <span key={interest} className="chip normal-case tracking-normal">{interest}</span>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
