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
        {/* <div className="homeWrapperText">*/}
        <div className="homeWrapperText">
          <div className="homeWrapperTextItem">
            <h3 className="homeWrapperTextItemTitle">
              Zajmujemy się wynajmem samochodów:
            </h3>
            <div className="homeWrapperTextItemBoxes">
              <div className="box bold">
                <p>osobowych</p>
              </div>
              <div className="box bold">
                <p>dostawczych</p>
              </div>
              <div className="box bold">
                <p>osobowych na taxi</p>
              </div>
            </div>
            <h3 className="bold">na terenie Polski oraz za granicą.</h3>
          </div>
          <div className="homeWrapperTextItem">
            <div>
              <h3 className="homeWrapperTextItemTitle">
                W zależności od Twoich potrzeb oferujemy wynajem:
              </h3>
            </div>
            <div className="homeWrapperTextItemBoxes">
              <div className="box bold">
                <p>długoterminowy</p>
              </div>
              <div className="box bold">
                <p>krótkoterminowy</p>
              </div>
              <div className="box bold">
                <p>jako samochód zastępczy (z OC sprawcy)</p>
              </div>
            </div>
            <div className="payments">
              <h3 className="bold">
                Wszystkie opłaty są u nas{" "}
                <span className="capital">
                  transparentne - nie mamy nic do ukrycia.
                </span>
              </h3>
            </div>
          </div>
        </div>
        <section className="homeSectionTaxi">
          <div className="homeSectionTaxiTitle">
            <h2>TAXI</h2>
          </div>
          <div className="homeSectionTaxiText">
            <h3 className="homeSectionTaxiTextTitle bold">
              Jesteśmy partnerem rozliczeniowym kierowców taxi Współpracujemy
              praktycznie ze wszystkimi korporacjami taxi w Warszawie i nie
              tylko. Najwięcej naszych kierowców jeździ dla m.in.:
            </h3>
            <div className="homeSectionTaxiBoxes">
              <div className="taxiBox bold">
                <p>FreeNow</p>
              </div>
              <div className="taxiBox bold">
                <p>iTaxi</p>
              </div>
              <div className="taxiBox bold">
                <p>Ele Taxi</p>
              </div>
              <div className="taxiBox bold">
                <p>Bolt</p>
              </div>
            </div>
          </div>
        </section>
        {/*</div>*/}
      </section>
    </section>
  );
};

export default HomePage;
