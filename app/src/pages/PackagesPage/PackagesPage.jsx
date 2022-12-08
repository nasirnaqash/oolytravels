import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { FeaturedTours } from "../../components";
import FeatureCard from "../../components/FeatureCard";
import { packages } from "../../utils/constants/Packages";

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="section popular">
          <p className="section-subtitle">Explore Packages</p>
          <ul className="popular-list mt-20">
            {packages.map((item) => (
              <FeatureCard data={item} key={item.id} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PackagesPage;
