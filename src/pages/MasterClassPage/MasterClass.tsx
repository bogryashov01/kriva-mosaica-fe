import './MasterClass.css';

function MasterClass() {
  return (
    <div className="master-class-container">
      <div className="master-class-content">
        <h3 className="master-class-title">Крива Мозаїка — студія мозаїки в Харкові.</h3>
        <p className="master-class-text">
          Ми призупинили проведення всіх майстер-класів та курсів на час, доки в Україні триває
          війна. Ми віримо у перемогу і сподіваємось на швидке повернення до нашого творчого життя.
          Усім бажаючим ми пропонуємо набори для самостійної творчості.
        </p>
        <p>З кожного продажу ми перераховуємо кошти на підтримку ЗСУ</p>
      </div>
      <div className="background-image master-class"></div>
    </div>
  );
}

export default MasterClass;
