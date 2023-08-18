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
              <div className="box">
                <p>osobowych</p>
              </div>
              <div className="box">
                <p>dostawczych</p>
              </div>
              <div className="box">
                <p>osobowych na taxi</p>
              </div>
            </div>
            <h3>na terenie Polski oraz za granicą.</h3>
          </div>
          <div className="homeWrapperTextItem">
            <div>
              <h3 className="homeWrapperTextItemTitle">
                W zależności od Twoich potrzeb oferujemy wynajem:
              </h3>
            </div>
            <div className="homeWrapperTextItemBoxes">
              <div className="box">
                <p>długoterminowy</p>
              </div>
              <div className="box">
                <p>krótkoterminowy</p>
              </div>
              <div className="box">
                <p>jako samochód zastępczy (z OC sprawcy)</p>
              </div>
            </div>
            <div className="payments">
              <h3>
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
            <div className="homeSectionTaxiTextTitle">
              <h3>
                Jesteśmy partnerem rozliczeniowym kierowców taxi. Współpracujemy
                praktycznie ze wszystkimi korporacjami taxi w Warszawie i nie
                tylko.
              </h3>
            </div>
            <div className="homeSectionTaxiTextTitle">
              <h3>Najwięcej naszych kierowców jeździ dla m.in.:</h3>
            </div>
            <div className="homeSectionTaxiBoxes">
              <div className="taxiBox">
                <p>FreeNow</p>
              </div>
              <div className="taxiBox">
                <p>iTaxi</p>
              </div>
              <div className="taxiBox">
                <p>Ele Taxi</p>
              </div>
              <div className="taxiBox">
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
