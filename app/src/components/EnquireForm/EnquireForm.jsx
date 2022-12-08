import React from "react";
import withFormik from "../../hocs/withFormik";
import * as Yup from "yup";
import Input from "../../common/Input";

const EnquireForm = ({ formikProps, isContactForm }) => {
  const { values, handleChange, handleBlur, getError } = formikProps;

  return (
    <div class=" flex  flex-col  ">
      <h1 class="  mt-6 text-6xl font-bold text-teal-800  ">
        {isContactForm ? "Contact Us" : "Enquire Now"}
      </h1>

      <p class="mt-4 leading-relaxed text-gray-500 ">
        {isContactForm
          ? "We'll be happy to assist you, our agent will get back to you soon!"
          : "We'll are drafting your enquiry, and finding the best location fit for you!"}
      </p>

      <div className=" mt-10  gap-1 flex flex-col">
        <div className="flex gap-4">
          <Input
            cx="w-1/2"
            value={values.firstName}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={getError("firstName")}
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <Input
            cx="w-1/2"
            value={values.lastName}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={getError("lastName")}
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
        </div>
        <Input
          cx="w-100"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={getError("email")}
          name="email"
          placeholder="Email"
          type="email"
        />
        <Input
          cx="w-100"
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={getError("phone")}
          name="phone"
          placeholder="Phone"
          type="number"
        />
      </div>

      <div className="mt-10">
        <button
          className="bg-teal-800 text-white text-2xl font-medium px-10 py-5 rounded-xl"
          type="submit"
        >
          {isContactForm ? "Contact Us" : "Enquire Now"}
        </button>
      </div>
    </div>
  );
};

export default withFormik(EnquireForm, {
  validationsSchema: Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Required field"),
    firstName: Yup.string().required("Required field"),
    lastName: Yup.string().required("Required field"),
    phone: Yup.string().required("Required field"),
  }),
});
