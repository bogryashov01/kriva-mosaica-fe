import { useTranslation } from 'react-i18next';

import './MasterClass.css';

function MasterClass() {
  const { t } = useTranslation();
  return (
    <div className="master-class-container">
      <div className="master-class-content">
        <h3 className="master-class-title">{t('master-class-title')}</h3>
        <p className="master-class-text">{t('master-class-text')}</p>
        <p>{t('master-class-text2')}</p>
      </div>
      <div className="background-image master-class"></div>
    </div>
  );
}

export default MasterClass;
