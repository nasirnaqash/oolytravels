import React from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import EnquireForm from "../../components/EnquireForm/EnquireForm";
import { useFactory } from "../../context/FactoryContext";
import API from "../../utils/network/API";

const EnquirePage = () => {
  const { enquiryDetails, setEnquiryDetails } = useFactory();
  const navigate = useNavigate();
  console.log(enquiryDetails);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const onFormikSubmit = (values) => {
    const data = {
      ...values,
      ...(enquiryDetails
        ? {
            placeName: enquiryDetails.title || "",
            placeId: enquiryDetails.id || "",
            reffer: enquiryDetails.reffer,
          }
        : {
            reffer: "contact",
          }),
    };
    const res = API.post("/enquire", data);

    toast.promise(res, {
      loading: "Sending...",
      success: "Enquiry sent successfully",
      error: "Something went wrong",
    });

    res.then((res) => {
      setEnquiryDetails(null);
      navigate("/");
    });
  };

  return (
    <div className="">
      <Navbar />
      <main className="container pt-36 pb-40">
        <div className="flex items-start justify-start  ">
          {enquiryDetails && (
            <div className="w-[50%]  ">
              <img
                src={enquiryDetails.image}
                className="w-[70%] rounded-2xl "
              />
              <p className="mt-10">
                <p className="card-subtitle text-5xl">{enquiryDetails.title}</p>
                <h3 className="h3 card-title text-7xl mt-3 ">
                  {enquiryDetails.subtitle}
                </h3>
              </p>
            </div>
          )}
          <div className="border border-gray-200 px-20 pt-10 pb-20 rounded-2xl h-[475px] ">
            <EnquireForm
              isContactForm={enquiryDetails !== null ? false : true}
              initialValues={initialValues}
              onFormikSubmit={onFormikSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EnquirePage;
