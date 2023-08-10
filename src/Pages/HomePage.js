import React from "react";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <section className="home">
      <div className="homeTitle">
        <h2 className="homeTitleTitle">Viki Transcar</h2>
        <p className="homeTitleText">
          Wypożyczalnia samochodów osobowych, taxi i dostawczych
        </p>
        <div className="shadow"></div>
      </div>
      <section className="homeWrapper">
        <div className="homeWrapperText">
          <div>
            <h3>Zajmujemy sie wynajmem samochodów:</h3>
            <ul>
              <li>osobowych,</li>
              <li>osobowych na taxi,</li>
              <li>dostawczych.</li>
            </ul>
            <p className="bold">na terenie Polski oraz za granicą.</p>
          </div>
          <div>
            <h3>W zależności od Twoich potrzeb oferujemy wynajem:</h3>
            <ul>
              <li>krótkoterminowy,</li>
              <li>długoterminowy,</li>
              <li>jako samochód zastępczy (z OC sprawcy).</li>
            </ul>
            <p className="bold">
              Wszystkie opłaty są u nas
              <span className="capital">
                {" "}
                transparentne - nie mamy nic do ukrycia
              </span>
              .
            </p>
          </div>
          <div>
            <h2>TAXI</h2>
            <p className="bold">
              Jesteśmy partnerem rozliczeniowym kierowców taxi
            </p>
            <p className="bold">
              Współpracujemy praktycznie ze wszystkimi korporacjami taxi w
              Warszawie i nie tylko.
            </p>
            <p className="bold">
              Największa ilość naszych kierowców jeździ dla m.in.:
            </p>
            <ul>
              <li>FreeNow</li>
              <li>iTaxi</li>
              <li>Ele Taxi</li>
              <li>Bolt</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
