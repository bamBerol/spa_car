import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import freeNow from "../../images/logo/freenow.png";
import iTaxi from "../../images/logo/itaxiCzarne.png";
import bolt from "../../images/logo/boltGreen.svg";
import "../../styles/home/Home.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="home">
      <section data-aos="fade-left" className="homeTitle">
        <h2 className="homeTitleTitle">Viki Transcar</h2>
        <p className="homeTitleText">Wynajem samochodów</p>
        <div className="shadow"></div>
      </section>
      <section className="homeWrapper">
        <div className="homeWrapperText">
          <div data-aos="fade-right" className="homeWrapperTextItem">
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
          <div data-aos="fade-left" className="homeWrapperTextItem">
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
          <div data-aos="fade-left" className="homeSectionTaxiTitle">
            <h2>TAXI</h2>
          </div>
          <div className="homeSectionTaxiText">
            <div data-aos="fade-right" className="homeSectionTaxiTextTitle">
              <h3>
                Jesteśmy partnerem rozliczeniowym kierowców taxi. Współpracujemy
                praktycznie ze wszystkimi korporacjami taxi w Warszawie i nie
                tylko.
              </h3>
            </div>
            <div data-aos="fade-left" className="homeSectionTaxiTextText">
              <div className="homeSectionTaxiTexSubtitle">
                <h3>Najwięcej naszych kierowców jeździ dla m.in.:</h3>
              </div>
              <div className="homeSectionTaxiBoxes">
                <div className="taxiBox itaxi">
                  {/* <p>iTaxi</p> */}
                  <img src={iTaxi} alt="iTaxi" />
                </div>
                <div className="taxiBox freenow">
                  {/* <p>FreeNow</p> */}
                  <img src={freeNow} alt="FreeNow" />
                </div>

                <div className="taxiBox ele">
                  <p>Ele Taxi</p>
                </div>
                <div className="taxiBox bolt">
                  {/* <p>Bolt</p> */}
                  <img src={bolt} alt="Bolt" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default HomePage;
