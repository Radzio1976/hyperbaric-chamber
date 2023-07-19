import AppState from "../../hooks/AppState";

const Benefits = () => {
  const { benefitsRef } = AppState();
  return (
    <div className="benefits-container" ref={benefitsRef}>
      <div className="benevits-boxes">
        <div className="benefits-boxes-top">
          <div className="benefits-box animate__animated animate__lightSpeedInLeft animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-neurologia"></div>
            <h3>Neurologia</h3>
            <p>
              Ma zastosowanie w poraże- niach mózgowych i pourazowych
              uszkodzeniach mózgu, powstałych w wyniku udaru lub wylewu. Ożywia
              i pobudza uśpione komórki, podnosi koncentrację, łagodzi stany
              depresyjne, przewlekły stres i bezsenność. Zwiększa aktywność
              mózgu, przez co wspomaga prawidłową pracę układu nerwowego ...
            </p>
          </div>
          <div className="benefits-box animate__animated animate__lightSpeedInLeft animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-medycyna-sportowa"></div>
            <h3>Medycyna sportowa</h3>
            <p>
              Podnosi wydolność fizyczną, przyspiesza procesy regeneracji tkanki
              mięśniowej, ścięgien i więzadeł. Działa przeciwbólowo, wpływa na
              procesy naprawcze w tkance kostnej, chrząstce oraz w mięśniach
              szkieletowych.
            </p>
          </div>
          <div className="benefits-box animate__animated animate__lightSpeedInRight animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-medycyna-estetyczna"></div>
            <h3>Medycyna estetyczna</h3>
            <p>
              Działa stymulująco na fibroblasty, odpowiedzialne za syntezę
              kolagenu i elastyny, czyli włókien zapewniających elastyczność
              skórze. Sprzyja wzmożonej regeneracji nabłonka, wspomaga gojenie
              po inwazyjnych zabiegach, zmniejsza obrzęki, działa
              antybakteryjnie.
            </p>
          </div>
          <div className="benefits-box animate__animated animate__lightSpeedInRight animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-dermatologia"></div>
            <h3>Dermatologia</h3>
            <p>
              Terapia ma zastosowanie w leczeniu trądziku, łuszczycy, atopowego
              zapalenia skóry, egzemy oraz trądziku różowatego. Redukuje
              wszelkie ogniska zapalne, bakteryjne lub alergiczne na skórze i w
              tkance podskórnej. Tlenoterapia wpływa na szybszą regenerację
              tkanek oraz usprawnia proces gojenia się ran i oparzeń. Wpływa ...
            </p>
          </div>
        </div>
        <div className="benefits-boxes-title">
          <h2>Korzyści z tlenoterapii</h2>
        </div>
        <div className="benefits-boxes-bottom">
          <div className="benefits-box animate__animated animate__lightSpeedInLeft animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-ortopedia"></div>
            <h3>Ortopedia</h3>
            <p>
              Poprawia przepływ krwi w uszkodzonych kończynach, zwiększa
              ciśnienie tlenu w kościach powodując ustępowanie stanu zapalnego
              kości i szpiku, osteoporozy, choroby stawów oraz przyspiesza
              wzrost uszkodzonej kości. W trakcie terapii następuje obkurczanie
              naczyń krwionośnych prowadzące do zmniejszenia obrzęku.
            </p>
          </div>
          <div className="benefits-box animate__animated animate__lightSpeedInLeft animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-onkologia"></div>
            <h3>Onkologia</h3>
            <p>
              Sprzyja rewitalizacji komórek i zapobiega dalszym uszkodzeniom.
              Oczyszcza organizm z toksyn i metali ciężkich, obniża poziom
              białka C-reaktywnego, czynnika martwicy nowotworów i innych
              markerów stanu zapalnego. Niweluje poparzenia powstałe w procesie
              chemioterapii i radioterapii. Przyczynia się do wzmożenia pracy
              ...
            </p>
          </div>
          <div className="benefits-box animate__animated animate__lightSpeedInRight animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-kardiologia"></div>
            <h3>Kardiologia</h3>
            <p>
              Korzystny wpływ na dolegliwości o charakterze wieńcowym. Zmniejsza
              nasilenie objawów niewydolności serca, zapobie- ga zawałom mięśnia
              sercowego, reguluje ciśnienie tętnicze. Pomaga w leczeniu cukrzycy
              i miażdżycy zmniejszając ryzyko powikłań sercowo-naczyniowych.
              Wpływa na tworzenie się włosowatych naczyń krwionośnych, redukuje
              ...
            </p>
          </div>
          <div className="benefits-box animate__animated animate__lightSpeedInRight animate__delay-1s">
            <div className="benefits-box-icon benefits-box-icon-inne-wskazania"></div>
            <h3>Inne wskazania</h3>
            <p>
              Przyspiesza przemianę materii w walce z nadwagą i otyłością.
              Wspomaga wychodzenie z nałogów, pomaga w oczyszczaniu i odtruwaniu
              organizmu oraz usuwaniu wolnych rodników. Pomaga w leczeniu
              zaburzeń seksualnych, zmniejsza bóle migrenowe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
