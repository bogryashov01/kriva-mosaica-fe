export const LESSONS_STORAGE_KEY = 'mosaica_lessons_completed';

export interface Lesson {
  id: string;
  titleKey: string;
  descriptionKey: string;
}

export const MASTER_CLASS_LESSONS: Lesson[] = [
  { id: 'lesson-1', titleKey: 'lesson-1-title', descriptionKey: 'lesson-1-description' },
  { id: 'lesson-2', titleKey: 'lesson-2-title', descriptionKey: 'lesson-2-description' },
  { id: 'lesson-3', titleKey: 'lesson-3-title', descriptionKey: 'lesson-3-description' },
  { id: 'lesson-4', titleKey: 'lesson-4-title', descriptionKey: 'lesson-4-description' },
];

export function getCompletedLessonIds(): string[] {
  try {
    const raw = localStorage.getItem(LESSONS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function setLessonCompleted(lessonId: string, completed: boolean): void {
  const ids = getCompletedLessonIds();
  const next = completed
    ? ids.includes(lessonId) ? ids : [...ids, lessonId]
    : ids.filter((id) => id !== lessonId);
  localStorage.setItem(LESSONS_STORAGE_KEY, JSON.stringify(next));
}

export function isLessonCompleted(lessonId: string): boolean {
  return getCompletedLessonIds().includes(lessonId);
}
