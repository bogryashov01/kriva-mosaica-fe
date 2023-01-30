import { useTranslation } from 'react-i18next';

import './WhatInBox.css';

function WhatInBox() {
  const { t } = useTranslation();
  return (
    <div className="container what-in-box">
      <div className="background-image what-in-box-image"></div>
      <div className="what-in-box-content">
        <h2 className="center blue">{t('what-in-box-title')} </h2>
        <p className="what-in-box-text center">{t('what-in-box-text')}</p>
      </div>
    </div>
  );
}

export default WhatInBox;
