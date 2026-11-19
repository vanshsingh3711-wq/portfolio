// Open source contributions (GitHub: vanshsingh3711-wq)
export interface OpenSourceContribution {
  repo: string;
  name: string;
  about: { fr: string; en: string };
  merged: number;
  open: number;
}

export const openSourceContributions: OpenSourceContribution[] = [
  {
    repo: 'BerriAI/litellm',
    name: 'LiteLLM',
    about: {
      fr: 'Passerelle IA haute performance (20k+ étoiles) : mécanismes d\'équilibrage de charge, routage de secours et suivi des coûts multi-fournisseurs',
      en: 'High-performance AI Gateway (20k+ stars): load balancing, fallback routing, and multi-provider cost tracking internals',
    },
    merged: 2,
    open: 4,
  },
  {
    repo: 'vanshsingh3711-wq/VoiceStudio-',
    name: 'VoiceStudio',
    about: {
      fr: 'Alternative entièrement locale et open source à ElevenLabs : clonage vocal, synthèse neuronale et doublage vidéo multi-langues',
      en: 'Fully-local open-source ElevenLabs alternative: voice cloning, neural speech synthesis, and video dubbing in 640+ languages',
    },
    merged: 1,
    open: 0,
  },
];
