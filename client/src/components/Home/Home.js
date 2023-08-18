import Slider from "./Slider";
import About from "./About";
import PriceList from "./PriceList";
import Benefits from "./Benefits";
import LatestReviews from "./LatestReviews";
import Contact from "./Contact";

import AppState from "../../hooks/AppState";

const Home = (props) => {
  const { homeRef } = AppState();
  const googleReviews = props.googleReviews;
  return (
    <div ref={homeRef} id="Home">
      <Slider />
      <About />
      <PriceList />
      <Benefits />
      <LatestReviews googleReviews={googleReviews} />
      <Contact />
    </div>
  );
};

export default Home;
