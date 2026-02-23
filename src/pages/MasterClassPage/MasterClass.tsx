import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  MASTER_CLASS_LESSONS,
  getCompletedLessonIds,
  setLessonCompleted,
  isLessonCompleted,
} from '../../constants/masterClassLessons';

import './MasterClass.css';

function MasterClass() {
  const { t } = useTranslation();
  const [completedIds, setCompletedIds] = useState<string[]>(() => getCompletedLessonIds());

  const toggleComplete = useCallback((lessonId: string) => {
    const completed = !isLessonCompleted(lessonId);
    setLessonCompleted(lessonId, completed);
    setCompletedIds(getCompletedLessonIds());
  }, []);

  const total = MASTER_CLASS_LESSONS.length;
  const completed = completedIds.length;
  const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="master-class-container">
      <div className="master-class-content">
        <h3 className="master-class-title">{t('master-class-title')}</h3>
        <p className="master-class-text">{t('master-class-text')}</p>
        <p>{t('master-class-text2')}</p>

        <div className="master-class-progress-section">
          <h4 className="master-class-progress-title">{t('master-class-progress')}</h4>
          <div className="master-class-progress-bar-wrap">
            <div
              className="master-class-progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="master-class-progress-text">
            {completed} / {total}
          </p>
        </div>

        <ul className="master-class-lessons">
          {MASTER_CLASS_LESSONS.map((lesson) => {
            const done = completedIds.includes(lesson.id);
            return (
              <li key={lesson.id} className={`master-class-lesson ${done ? 'master-class-lesson--completed' : ''}`}>
                <div className="master-class-lesson-header">
                  <span className="master-class-lesson-title">{t(lesson.titleKey)}</span>
                  <button
                    type="button"
                    className="master-class-lesson-btn"
                    onClick={() => toggleComplete(lesson.id)}
                    aria-pressed={done}
                  >
                    {done ? t('master-class-lesson-completed') : t('master-class-lesson-complete')}
                  </button>
                </div>
                <p className="master-class-lesson-description">{t(lesson.descriptionKey)}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="background-image master-class" />
    </div>
  );
}

export default MasterClass;
