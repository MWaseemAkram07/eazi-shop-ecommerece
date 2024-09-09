import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { contactValidationSchema } from "./validationSchema"; // Import the validation schema

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  // Formik hook to manage form state and validation
  const formik = useFormik({
    initialValues: {
      clientName: "",
      email: "",
      messages: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      // Success message when the form is submitted
      setSuccessMsg(
        `Thank you dear ${values.clientName}, Your messages have been received successfully. Further details will be sent to you by your email at ${values.email}.`
      );
      resetForm(); // Reset the form fields
    },
  });

  // Success message state
  const [successMsg, setSuccessMsg] = useState("");

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <form onSubmit={formik.handleSubmit} className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">Fill up a Form</h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            
            {/* Name Input */}
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Name</p>
              <input
                name="clientName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.clientName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
              />
              {formik.touched.clientName && formik.errors.clientName ? (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {formik.errors.clientName}
                </p>
              ) : null}
            </div>

            {/* Email Input */}
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Email</p>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your email here"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            {/* Messages Input */}
            <div>
              <p className="text-base font-titleFont font-semibold px-2">Messages</p>
              <textarea
                name="messages"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.messages}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                placeholder="Enter your message here"
              ></textarea>
              {formik.touched.messages && formik.errors.messages ? (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {formik.errors.messages}
                </p>
              ) : null}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Post
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
