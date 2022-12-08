import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { destinations } from "../../utils/constants/Destinations";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { useFactory } from "../../context/FactoryContext";
const DestinationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setEnquiryDetails } = useFactory();
  const data = destinations.find((item) => item.id === parseInt(id));

  const handleBooking = () => {
    setEnquiryDetails({
      id: data.id,
      image: data.image,
      title: data.state,
      subtitle: data.country,
      reffer: "destination",
    });
    navigate("/enquire");
  };

  return (
    <>
      <Navbar />
      <main className="container pt-32 pb-36">
        <section className="flex items-end gap-5 justify-between h-full">
          {/* left image */}
          <img
            src={data.image}
            loading="lazy"
            alt="Kuala Lumpur, Malaysia"
            className=" w-2/3 mx-auto h-[55rem] object-cover rounded-3xl "
          />
          {/* right data */}
          <div className=" w-2/3  mx-auto px-10 py-4 flex flex-col  justify-end h-auto">
            <p className="card-subtitle text-5xl">{data.state}</p>
            <h3 className="h3 card-title text-7xl mt-3 ">{data.country}</h3>
            <div className="text-2xl  ">
              <p className=" font-semibold text-3xl mt-4 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, totam labore officia rerum pariatur vel in quidem e
              </p>
              <p className=" mt-10 opacity-80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, totam labore officia rerum pariatur vel in quidem
                est quas placeat ipsam qui obcaecati modi earum dolores aut
                fugit porro recusandae. text-5xl Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur, totam labore officia
                rerum pariatur vel in quidem est quas placeat ipsam qui
                obcaecati modi earum dolores aut fugit porro recusandae.
                text-5xl
              </p>
              <p className=" mt-10 opacity-80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, totam labore officia rerum pariatur vel in quidem
                est quas placeat ipsam qui obcaecati modi earum dolores aut
                text-5xl
              </p>
              <p className=" mt-4 opacity-80">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, totam labore officia rerum pariatur vel in quidem
                est quas placeat ipsam qui obcaecati modi earum dolores aut
                fugit porro recusandae. text-5xl Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur, totam labore officia
              </p>
            </div>

            <button
              onClick={handleBooking}
              className="btn bg-teal-600 text-white mt-10 active:scale-95 rounded-xl "
            >
              Book now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DestinationDetailsPage;
