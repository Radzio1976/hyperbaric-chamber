import Header from "./Header";
import About from "./About";
import PriceList from "./PriceList";
import Benefits from "./Benefits";
import LatestReviews from "./LatestReviews";

const Home = () => {
  return (
    <div id="Home">
      <Header />
      <About />
      <PriceList />
      <Benefits />
      <LatestReviews />
    </div>
  );
};

export default Home;
