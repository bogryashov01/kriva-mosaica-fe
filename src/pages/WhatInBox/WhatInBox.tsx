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
      <div className="what-in-set-content">
        <h2 className="center blue">{t('set-includes')} </h2>
        <div className="what-in-box-text set-text">
          <p className="">{t('details')}</p>
          <p className="">{t('wood-plate')}</p>
          <p className="">{t('glue')}</p>
          <p className="">{t('mash')}</p>
          <p className="">{t('container')}</p>
          <p className="">{t('shpatel')}</p>
          <p className="">{t('spanch')}</p>
          <p className="">{t('gloves')}</p>
          <p className="">{t('instruction')}</p>
          <p className="">{t('color-instruction')}</p>
          <p className="">{t('support')}</p>
        </div>
      </div>
      <div className="background-image set-image"></div>
    </div>
  );
}

export default WhatInBox;
