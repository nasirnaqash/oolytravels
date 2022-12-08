import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { packages } from "../../utils/constants/Packages";
import { useFactory } from "../../context/FactoryContext";

const PackagesDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setEnquiryDetails } = useFactory();

  const data = packages.find((item) => item.id === parseInt(id));

  const handleBooking = () => {
    setEnquiryDetails({
      id: data.id,
      image: data.image,
      title: data.address,
      subtitle: "Exploring the city",
      reffer: "packages",
    });
    navigate("/enquire");
  };

  return (
    <>
      <Navbar />
      <main className="container pt-5 pb-36">
        <section className="section popular">
          {/* large image */}
          <p className="section-subtitle">Let's Explore </p>
          <h2 className="h2 section-title !mb-20 ">{data.address}</h2>
          <img
            src={data.image}
            loading="lazy"
            alt="Kuala Lumpur, Malaysia"
            className=" w-2/3 mx-auto h-[55rem] object-cover rounded-3xl "
          />

          {/* short descption */}
          <div className=" w-2/3 mt-10 mx-auto">
            <h3 className="mt-20 mb-5 text-6xl leading-normal opacity-90 font-bold">
              Description
            </h3>
            <p className=" leading-normal  text-3xl opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              commodi velit aliquam itaque sunt nobis nesciunt hic! Asperiores,
              reprehenderit deserunt. Sit unde ducimus consectetur voluptas eius
              facere alias! Exercitationem dolor culpa vitae labore accusamus
              ullam harum temporibus eligendi earum asperiores provident et id
              a, recusandae voluptatem quam quaerat natus quibusdam optio
              deleniti voluptates libero nulla esse velit! Ratione possimus
              magni illum praesentium saepe. Sunt mollitia nihil veniam soluta
              eveniet harum explicabo at, deleniti delectus consectetur enim
              sint praesentium quas similique asperiores sed. <br />
              <br />
              Quas nam fugiat, nihil autem aut libero consequatur, repellendus
              corporis maxime blanditiis sit beatae, minima accusamus sapiente
              aliquid culpa. Minus suscipit vitae ea quos, explicabo dicta
              perspiciatis saepe laboriosam neque modi? Minima perspiciatis
              excepturi, aliquid qui et corporis nam explicabo, necessitatibus
              recusandae animi quasi iste tenetur quos, rerum pariatur.
              Cupiditate iste, alias eius repudiandae, nesciunt exercitationem
              dolore laudantium eveniet accusantium nobis voluptatum dicta
              labore provident impedit repellendus voluptates sed? Repudiandae,
              accusamus! Deleniti accusamus a nam provident nulla eligendi eos
              consectetur blanditiis mollitia maxime, suscipit excepturi sunt
              itaque, necessitatibus pariatur officiis. Nulla non repudiandae
              tempora ipsa obcaecati error alias rem perspiciatis? Nemo enim
              iure blanditiis obcaecati
            </p>

            <button
              onClick={handleBooking}
              className="btn btn-primary btn-lg mt-20 "
            >
              Book Now
            </button>
          </div>
          {/* pricing details */}
          {/* large descrition */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PackagesDetailsPage;
