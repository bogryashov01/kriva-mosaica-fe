import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="background-image boss-image"></div>
      <div className="about-us-content">
        <h2 className="about-us-content-title"> Давайте знайомитися! </h2>
        <p className="center">
          Збираючи пазли із керамічноі плитки, ви порините у дивовжний світ та відволічетесь від
          буденних питань
        </p>
        <p className="center middle-text">
          Я, Ольга, ідейний керівник проекту Крива Мозаїка. Дизайнер с багаторічним досвідом роботи!
          Протягом довгого часу створювала дизайни підлог з мармуру та керамограниту. Захоплююсь
          збиранням пазлів, мозаїки.
        </p>
        <p className="end">Ольга Богряшова (дизайнер). Ідейний керівник проекту “Крива мозаїка”</p>
      </div>
    </div>
  );
}

export default AboutUs;
