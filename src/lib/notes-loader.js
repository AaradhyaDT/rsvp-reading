/**
 * Notes loader module using Vite's glob import
 */

const rawNotes = import.meta.glob('/files/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

/**
 * Format subject directory name into a friendly title
 * @param {string} dirName
 * @returns {string}
 */
export function formatSubjectTitle(dirName) {
  const map = {
    'O&M_markdown': 'O&M (Organization & Management)',
    'AI_markdown': 'AI (Artificial Intelligence)',
    'DSAP_markdown': 'DSAP (Digital Signal & Audio Processing)',
    'RF_markdown': 'RF (Radio Frequency)',
    'WC_markdown': 'WC (Wireless Communications)',
    'Aeronautical Telecommunications': 'Aeronautical Telecommunications'
  };
  return map[dirName] || dirName.replace(/_markdown$/i, '').replace(/_/g, ' ');
}

/**
 * Clean markdown for RSVP presentation
 * Strips headers (#), bullets, markdown links, slide markers, and special symbols
 * @param {string} md
 * @returns {string}
 */
export function cleanMarkdownForRSVP(md) {
  if (!md) return '';

  return md
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, ' ')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove markdown image syntax
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // Convert markdown links [text](url) to just text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    // Remove LaTeX display math
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    // Remove inline math
    .replace(/\$([^$]+)\$/g, '$1')
    // Remove headers (# Title)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markdown (*word*, **word**, _word_, __word__)
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // Remove slide indicators if present (e.g. "## Slide 1" or "Slide 1")
    .replace(/\bSlide\s+\d+\b/gi, '')
    // Remove common bullet symbols & weird unicode bullets (, •, ⁃, ◦, etc.)
    .replace(/^[ \t]*[•⁃◦*+\-][ \t]+/gm, '')
    .replace(/[•⁃◦]/g, ' ')
    // Remove table formatting bars
    .replace(/\|/g, ' ')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Normalize newlines and extra spaces
    .replace(/\r\n/g, '\n')
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    // Replace duplicate punctuation
    .replace(/([.!?])\s*([.!?])+/g, '$1')
    .trim();
}

/**
 * Get all available subjects and their chapters
 * @returns {Array<{ id: string, name: string, chapters: Array<{ id: string, name: string, path: string, getRaw: () => string, getText: () => string }> }>}
 */
export function getNotesLibrary() {
  const subjectsMap = {};

  for (const [path, content] of Object.entries(rawNotes)) {
    // path looks like "/files/O&M_markdown/Chapter 1.md" or "d:/.../files/..."
    const match = path.match(/files\/([^/]+)\/(.+)\.md$/i);
    if (!match) continue;

    const subjectDir = match[1];
    const chapterFile = match[2];

    if (!subjectsMap[subjectDir]) {
      subjectsMap[subjectDir] = {
        id: subjectDir,
        name: formatSubjectTitle(subjectDir),
        chapters: []
      };
    }

    const chapterName = chapterFile
      .replace(/_/g, ' ')
      .replace(/^(\d+)[- ]*/, '$1. ')
      .trim();

    subjectsMap[subjectDir].chapters.push({
      id: chapterFile,
      name: chapterName,
      path,
      getRaw: () => (typeof content === 'string' ? content : ''),
      getText: () => cleanMarkdownForRSVP(typeof content === 'string' ? content : '')
    });
  }

  // Sort subjects to put O&M first, then alphabetically
  const preferredOrder = ['O&M_markdown', 'AI_markdown', 'DSAP_markdown', 'RF_markdown', 'WC_markdown', 'Aeronautical Telecommunications'];
  
  const subjects = Object.values(subjectsMap).sort((a, b) => {
    const indexA = preferredOrder.indexOf(a.id);
    const indexB = preferredOrder.indexOf(b.id);
    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;
    return a.name.localeCompare(b.name);
  });

  // Sort chapters naturally
  for (const subject of subjects) {
    subject.chapters.sort((a, b) => {
      return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: 'base' });
    });
  }

  return subjects;
}
