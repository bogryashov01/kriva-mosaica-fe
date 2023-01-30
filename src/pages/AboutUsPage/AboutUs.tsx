import './AboutUs.css';

function AboutUs(props: { t: any }) {
  const { t } = props;
  return (
    <div className="about-us-container">
      <div className="background-image boss-image"></div>
      <div className="about-us-content">
        <h2 className="about-us-content-title"> {t('about-us-intiduction-title')}</h2>
        <p className="center">{t('about-us-text1')}</p>
        <p className="center middle-text">{t('about-us-text2')}</p>
        <p className="end">{t('about-us-text3')}</p>
      </div>
    </div>
  );
}

export default AboutUs;
