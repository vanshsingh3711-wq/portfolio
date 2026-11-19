import { describe, it, expect } from 'vitest';
import { detectIntent, normalize, respond } from '../components/Chatbot/botLogic/brain';

describe('Assistant — compréhension', () => {
  it('normalise accents, casse et ponctuation', () => {
    expect(normalize('Quelles Compétences ?')).toBe(' quelles competences ');
  });

  it('ne déclenche pas de faux positifs dans les mots (hi, cc)', () => {
    expect(detectIntent(normalize('chiffre accès'))).not.toBe('greeting');
  });

  it.each([
    ['Bonjour !', 'greeting'],
    ['Quelles sont ses compétences ?', 'skills'],
    ['Est-il disponible pour une mission freelance ?', 'availability'],
    ['Comment le contacter ?', 'contact'],
    ['Je peux voir son CV ?', 'cv'],
    ['What projects has he built?', 'projects'],
    ['Does he do AI agents?', 'ai'],
  ])('« %s » → %s', (message, intent) => {
    expect(detectIntent(normalize(message))).toBe(intent);
  });
});

describe('Assistant — réponses', () => {
  it('reconnaît un projet et renvoie vers son étude de cas', () => {
    const { reply, context } = respond('Parle-moi de Lead Catcher', 'fr');
    expect(reply.text).toMatch(/Lead Catcher/);
    expect(reply.actions?.some((a) => a.to === '/project/lead-catcher')).toBe(true);
    expect(context.lastProjectId).toBe('lead-catcher');
  });

  it('distingue les projets', () => {
    expect(respond('lead catcher', 'fr').context.lastProjectId).toBe('lead-catcher');
    expect(respond('video editor', 'fr').context.lastProjectId).toBe('ai-director');
  });

  it('répond aux questions de suivi sur le dernier projet', () => {
    const first = respond('Outreach', 'fr');
    const stack = respond('Quelle stack ?', 'fr', first.context);
    expect(stack.reply.text).toMatch(/Outreach/);
    const next = respond('Projet suivant', 'fr', first.context);
    expect(next.context.lastProjectId).not.toBe('outreach');
  });

  it('indique les projets utilisant une technologie', () => {
    const { reply } = respond('Il connaît Next.js ?', 'fr');
    expect(reply.text).toMatch(/Next\.js/);
    expect(reply.text).toMatch(/Outreach/);
  });

  it('propose des actions de contact concrètes', () => {
    const { reply } = respond('Is he available for hire?', 'en');
    expect(reply.actions?.some((a) => a.href?.startsWith('mailto:vanshsingh3711@gmail.com'))).toBe(true);
  });

  it('répond en anglais quand la langue est en', () => {
    expect(respond('hello', 'en').reply.text).toMatch(/Vansh/);
    expect(respond('hello', 'en').reply.text).not.toMatch(/Bonjour/);
  });

  it('se rabat sur une aide avec suggestions', () => {
    const { reply } = respond('xyzzy', 'fr');
    expect(reply.suggestions?.length).toBeGreaterThan(0);
  });
});
