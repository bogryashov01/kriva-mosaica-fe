import { useTranslation } from 'react-i18next';
import AboutUs from './AboutUs';

function AboutUsContainer() {
  const { t } = useTranslation();
  return <AboutUs t={t} />;
}

export default AboutUsContainer;
