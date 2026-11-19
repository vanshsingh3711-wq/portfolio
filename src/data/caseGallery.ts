// Project case study visual galleries: /public/assets/cases/<nom>.webp
export const caseGallery: Record<string, { file: string; alt: { fr: string; en: string } }[]> = {
  outreach: [
    { file: 'outreach-01', alt: { fr: 'Pipeline de prospection autonome et génération DeepSeek AI', en: 'Autonomous prospecting pipeline and DeepSeek AI generation' } },
    { file: 'outreach-02', alt: { fr: 'Architecture distribuée FastAPI, Celery et vérification d\'emails', en: 'Distributed FastAPI, Celery worker architecture and email deliverability' } },
  ],
  'ai-director': [
    { file: 'ai-director-01', alt: { fr: 'Architecture de rendu déterministe avec Remotion', en: 'Deterministic rendering architecture with Remotion' } },
    { file: 'ai-director-02', alt: { fr: 'Pipeline de composition distribuée sur AWS ECS et SQS', en: 'Distributed video composition pipeline on AWS ECS and SQS' } },
  ],
  'video-editor': [
    { file: 'video-editor-01', alt: { fr: 'Architecture de rendu déterministe avec Remotion', en: 'Deterministic rendering architecture with Remotion' } },
    { file: 'video-editor-02', alt: { fr: 'Pipeline de composition distribuée sur AWS ECS et SQS', en: 'Distributed video composition pipeline on AWS ECS and SQS' } },
  ],
  lucy: [
    { file: 'lucy-01', alt: { fr: 'Agent de stylisme Lucy utilisant le Model Context Protocol (MCP)', en: 'Lucy shopping agent utilizing Model Context Protocol (MCP)' } },
    { file: 'lucy-02', alt: { fr: 'Filtrage de catalogue et intégration Shopify API en langage naturel', en: 'Shopify catalog filtering and natural language product discovery' } },
  ],
  'lead-catcher': [
    { file: 'lead-catcher-01', alt: { fr: 'Architecture de streaming temps réel pour Lead Catcher', en: 'Real-time streaming voice architecture for Lead Catcher' } },
    { file: 'lead-catcher-02', alt: { fr: 'Isolation multi-tenant et workers PostgreSQL SELECT FOR UPDATE', en: 'Multi-tenant isolation and PostgreSQL SELECT FOR UPDATE sync workers' } },
  ],
};
