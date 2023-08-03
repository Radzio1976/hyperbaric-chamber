import Header from "./Header";
import Slider from "./Slider";
import About from "./About";
import PriceList from "./PriceList";
import Benefits from "./Benefits";
import LatestReviews from "./LatestReviews";
import Contact from "./Contact";
import Footer from "./Footer";

import AppState from "../../hooks/AppState";

const Home = (props) => {
  const { homeRef } = AppState();
  const googleReviews = props.googleReviews;
  return (
    <div ref={homeRef} id="Home">
      <Header />
      <Slider />
      <About />
      <PriceList />
      <Benefits />
      <LatestReviews googleReviews={googleReviews} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
