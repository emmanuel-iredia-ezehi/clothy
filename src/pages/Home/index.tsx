import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import NavBar from "../../components/NavBar";
import ShowCase from "../../components/Showcase";
import TopNewProducts from "../../components/TopNewProducts";
import Footer from "../../Footer";
import TopSellingProducts from "../../TopSellingProducts";

const Home = () => {
  return (
    <div data-testid="homepage">
      <NavBar />
      <Header />
      <HomeBanner />
      <ShowCase />
      <TopNewProducts />
      <TopSellingProducts />
      <Footer />
    </div>
  );
};

export default Home;
