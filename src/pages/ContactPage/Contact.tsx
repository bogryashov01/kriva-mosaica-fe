import { useTranslation } from 'react-i18next';

import './Contact.css';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="container contacts">
      <div className="contacts-content">
        <h2>{t('contacts-title')} </h2>
        <div className="contacts-link">
          <a href="mailto:krivamosaica@gmail.com">krivamosaica@gmail.com</a>
          <a href="tel:+380503420606">+380503420606</a>
          <a href="tel:+380995313154">+380995313154</a>
        </div>
        <p className="contact-address">{t('contacts-address')}</p>
      </div>
    </div>
  );
}

export default Contact;
