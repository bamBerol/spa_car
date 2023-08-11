import React from "react";
import "../../styles/home/Home.css";

const HomePage = () => {
  return (
    <section className="home">
      <section className="homeTitle">
        <h2 className="homeTitleTitle">Viki Transcar</h2>
        <p className="homeTitleText">Wynajem samochodów</p>
        <div className="shadow"></div>
      </section>
      <section className="homeWrapper">
        <div className="homeWrapperText">
          <div className="homeWrapperTextItem">
            <h3 className="homeWrapperTextItemTitle">
              Zajmujemy sie wynajmem samochodów:
            </h3>
            <div className="homeWrapperTextItemBoxes">
              <div className="box bold">osobowych</div>
              <div className="box bold">dostawczych</div>
              <div className="box bold">osobowych na taxi</div>
            </div>
            <p className="bold">na terenie Polski oraz za granicą.</p>
          </div>
          <div className="homeWrapperTextItem">
            <h3 className="homeWrapperTextItemTitle">
              W zależności od Twoich potrzeb oferujemy wynajem:
            </h3>
            <div className="homeWrapperTextItemBoxes">
              <div className="box bold">krótkoterminowy</div>
              <div className="box bold">długoterminowy</div>
              <div className="box bold">
                jako samochód zastępczy (z OC sprawcy)
              </div>
            </div>
            <p className="bold">
              Wszystkie opłaty są u nas{" "}
              <span className="capital">
                transparentne - nie mamy nic do ukrycia.
              </span>
            </p>
          </div>
          <div className="homeSectionTitle">
            <h2>TAXI</h2>
          </div>
          <div className="homeWrapperTextItem">
            <h3 className="homeWrapperTextItemTitle bold">
              Jesteśmy partnerem rozliczeniowym kierowców taxi Współpracujemy
              praktycznie ze wszystkimi korporacjami taxi w Warszawie i nie
              tylko. Najwięcej naszych kierowców jeździ dla m.in.:
            </h3>
            <div className="homeWrapperTextItemBoxes">
              <div className="box bold">FreeNow</div>
              <div className="box bold">iTaxi</div>
              <div className="box bold">Ele Taxi</div>
              <div className="box bold">Bolt</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
