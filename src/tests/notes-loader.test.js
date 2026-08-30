import { describe, it, expect } from 'vitest';
import { cleanMarkdownForRSVP, formatSubjectTitle } from '../lib/notes-loader.js';

describe('notes-loader', () => {
  it('formats subject titles nicely', () => {
    expect(formatSubjectTitle('O&M_markdown')).toBe('O&M (Organization & Management)');
    expect(formatSubjectTitle('AI_markdown')).toBe('AI (Artificial Intelligence)');
    expect(formatSubjectTitle('DSAP_markdown')).toBe('DSAP (Digital Signal & Audio Processing)');
  });

  it('cleans markdown tags, headers, bullet characters and slide indicators', () => {
    const raw = `# Chapter 1 — Introduction\n\n## Slide 1\n- ORGANIZATION\n-  Social Structure\n- **Bold text** and *italic*\n\n[Link](http://example.com)\n\n| Col 1 | Col 2 |`;
    const cleaned = cleanMarkdownForRSVP(raw);
    expect(cleaned).not.toContain('#');
    expect(cleaned).not.toContain('Slide 1');
    expect(cleaned).not.toContain('');
    expect(cleaned).not.toContain('**');
    expect(cleaned).toContain('Chapter 1 — Introduction');
    expect(cleaned).toContain('Social Structure');
    expect(cleaned).toContain('Bold text');
  });
});
