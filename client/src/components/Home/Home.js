import Header from "./Header";
import About from "./About";
import PriceList from "./PriceList";
import Benefits from "./Benefits";
import LatestReviews from "./LatestReviews";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div id="Home">
      <Header />
      <About />
      <PriceList />
      <Benefits />
      <LatestReviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
