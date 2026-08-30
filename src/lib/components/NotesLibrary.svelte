<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { getNotesLibrary } from '../notes-loader.js';

  export let currentSubjectId = 'O&M_markdown';
  export let currentChapterId = 'Chapter 1';
  export let wordsPerMinute = 300;

  const dispatch = createEventDispatcher();

  let subjects = [];
  let selectedSubjectId = currentSubjectId;

  onMount(() => {
    subjects = getNotesLibrary();
    if (!subjects.some(s => s.id === selectedSubjectId) && subjects.length > 0) {
      selectedSubjectId = subjects[0].id;
    }
  });

  $: currentSubject = subjects.find(s => s.id === selectedSubjectId) || subjects[0];

  function selectChapter(subject, chapter) {
    const rawContent = chapter.getRaw();
    const cleanContent = chapter.getText();
    dispatch('select', {
      subjectId: subject.id,
      subjectName: subject.name,
      chapterId: chapter.id,
      chapterName: chapter.name,
      text: cleanContent,
      rawText: rawContent
    });
  }

  function handleClose() {
    dispatch('close');
  }

  function getEstimatedMinutes(text) {
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const mins = Math.ceil(words / Math.max(50, wordsPerMinute));
    return { words, mins };
  }
</script>

<div class="notes-modal">
  <div class="modal-header">
    <div class="header-title">
      <svg viewBox="0 0 24 24" fill="currentColor" class="header-icon">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
      </svg>
      <h3>Notes Library</h3>
    </div>
    <button class="close-icon" on:click={handleClose} title="Close">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </div>

  <div class="subjects-bar">
    {#each subjects as subject}
      <button
        class="subject-tab"
        class:active={selectedSubjectId === subject.id}
        on:click={() => selectedSubjectId = subject.id}
      >
        {subject.name}
      </button>
    {/each}
  </div>

  <div class="chapters-container">
    {#if currentSubject}
      <div class="chapters-header">
        <h4>{currentSubject.name}</h4>
        <span class="chapter-count">{currentSubject.chapters.length} chapter{currentSubject.chapters.length === 1 ? '' : 's'}</span>
      </div>

      <div class="chapters-grid">
        {#each currentSubject.chapters as chapter}
          {@const { words, mins } = getEstimatedMinutes(chapter.getText())}
          {@const isCurrent = currentSubjectId === currentSubject.id && currentChapterId === chapter.id}
          <button
            class="chapter-card"
            class:selected={isCurrent}
            on:click={() => selectChapter(currentSubject, chapter)}
          >
            <div class="chapter-info">
              <div class="chapter-title">{chapter.name}</div>
              <div class="chapter-meta">
                <span>{words.toLocaleString()} words</span>
                <span>•</span>
                <span>~{mins} min{mins === 1 ? '' : 's'} at {wordsPerMinute} WPM</span>
              </div>
            </div>
            {#if isCurrent}
              <span class="active-badge">Active</span>
            {:else}
              <span class="read-action">Read &rarr;</span>
            {/if}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .notes-modal {
    background: #111;
    border: 1px solid #333;
    border-radius: 12px;
    padding: 1.5rem;
    width: 100%;
    max-width: 650px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .header-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header-icon {
    width: 22px;
    height: 22px;
    color: #ff4444;
  }

  h3 {
    margin: 0;
    font-weight: 500;
    color: #fff;
    font-size: 1.2rem;
  }

  .close-icon {
    background: transparent;
    border: none;
    color: #666;
    cursor: pointer;
    padding: 0.25rem;
    display: flex;
    transition: color 0.2s;
  }

  .close-icon:hover {
    color: #fff;
  }

  .close-icon svg {
    width: 20px;
    height: 20px;
  }

  .subjects-bar {
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #222;
    scrollbar-width: thin;
  }

  .subject-tab {
    background: #1a1a1a;
    border: 1px solid #333;
    color: #aaa;
    padding: 0.5rem 0.85rem;
    border-radius: 6px;
    font-size: 0.85rem;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s;
  }

  .subject-tab:hover {
    background: #252525;
    color: #fff;
  }

  .subject-tab.active {
    background: #ff4444;
    border-color: #ff4444;
    color: #fff;
    font-weight: 500;
  }

  .chapters-container {
    margin-top: 1rem;
    overflow-y: auto;
    flex: 1;
    padding-right: 0.25rem;
  }

  .chapters-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.75rem;
  }

  .chapters-header h4 {
    margin: 0;
    font-size: 0.95rem;
    color: #eee;
    font-weight: 500;
  }

  .chapter-count {
    font-size: 0.8rem;
    color: #777;
  }

  .chapters-grid {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .chapter-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1rem;
    background: #181818;
    border: 1px solid #292929;
    border-radius: 8px;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s ease-in-out;
  }

  .chapter-card:hover {
    background: #222;
    border-color: #444;
  }

  .chapter-card.selected {
    border-color: #ff4444;
    background: rgba(255, 68, 68, 0.08);
  }

  .chapter-title {
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
  }

  .chapter-meta {
    font-size: 0.8rem;
    color: #888;
    display: flex;
    gap: 0.4rem;
  }

  .active-badge {
    background: rgba(255, 68, 68, 0.2);
    color: #ff4444;
    font-size: 0.75rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
  }

  .read-action {
    color: #888;
    font-size: 0.85rem;
    transition: color 0.15s;
  }

  .chapter-card:hover .read-action {
    color: #ff4444;
  }

  @media (max-width: 600px) {
    .notes-modal {
      max-width: 100%;
      padding: 1rem;
      max-height: 85vh;
    }
  }
</style>
