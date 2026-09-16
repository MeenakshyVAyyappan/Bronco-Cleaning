import React, { Fragment } from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from "../../components/pagetitle/PageTitle";
import CTATwoSection from "../../components/CTATwoSection/CTATwoSection";
import FaqSection from "../../components/FaqSection/FaqSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { useRef } from "react";
import Shape1 from "../../images/service/shape1.svg";
import Shape3 from "../../images/service/shape3.svg";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useSplitTextAnimation from "../../components/splittextAnimation/useSplitTextAnimation";


// Validation Schema
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  approx: z.string().optional(),
  bed: z.string().optional(),
  bath: z.string().optional(),
  phone: z.string().min(6, "Enter a valid phone number"),
  zip: z.string().optional(),
  note: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const AppoinmentPage: React.FC = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {

    console.log(data);

    // simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    alert("Appointment submitted successfully!");

    reset();
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useSplitTextAnimation(ref);

  return (
    <Fragment>

      <Navbar2 />

      <PageTitle
        pageTitle={"Because Clean Feels Better"}
        pagesub={"Appoinment"}
      />

      <section className="wpo-contact-section-s2 section-padding" ref={ref}>

        <div className="container">

          <div className="wpo-contact-section-wrapper">

            <div className="row align-items-center justify-content-center">

              <div className="col-lg-8 col-md-12 col-12">

                <div className="wpo-contact-form-area">

                  <div className="wpo-section-title">
                    <h2 className="poort-text poort-in-right">
                      Make An Appointment
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">

                      {/* NAME */}
                      <div className="col col-lg-6 col-12">

                        <input
                          {...register("name")}
                          className="form-control"
                          placeholder="Your Name"
                        />

                        {errors.name && (
                          <p className="error">{errors.name.message}</p>
                        )}

                      </div>

                      {/* EMAIL */}
                      <div className="col col-lg-6 col-12">

                        <input
                          {...register("email")}
                          className="form-control"
                          placeholder="Your Email"
                        />

                        {errors.email && (
                          <p className="error">{errors.email.message}</p>
                        )}

                      </div>

                      {/* SERVICE */}
                      <div className="col col-lg-6 col-12">

                        <select {...register("service")} className="form-control">
                          <option value="">Choose a Service</option>
                          <option>Residential Cleaning</option>
                          <option>Commercial Cleaning</option>
                          <option>Office Cleaning</option>
                          <option>Home Cleaning</option>
                          <option>Shop Cleaning</option>
                          <option>Road Cleaning</option>
                          <option>Car Cleaning</option>
                        </select>

                        {errors.service && (
                          <p className="error">{errors.service.message}</p>
                        )}

                      </div>

                      {/* APPROX */}
                      <div className="col col-lg-6 col-12">

                        <select {...register("approx")} className="form-control">
                          <option value="">Approx SF</option>
                          <option>800</option>
                          <option>700</option>
                          <option>900</option>
                          <option>500</option>
                          <option>300</option>
                        </select>

                      </div>

                      {/* BEDROOMS */}
                      <div className="col col-lg-6 col-12">

                        <select {...register("bed")} className="form-control">
                          <option value="">Bedrooms</option>
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Apartment</option>
                        </select>

                      </div>

                      {/* BATHROOMS */}
                      <div className="col col-lg-6 col-12">

                        <select {...register("bath")} className="form-control">
                          <option value="">Bathrooms</option>
                          <option>Residential</option>
                          <option>Commercial</option>
                          <option>Apartment</option>
                        </select>

                      </div>

                      {/* PHONE */}
                      <div className="col col-lg-6 col-12">

                        <input
                          {...register("phone")}
                          className="form-control"
                          placeholder="Phone"
                        />

                        {errors.phone && (
                          <p className="error">{errors.phone.message}</p>
                        )}

                      </div>

                      {/* ZIP */}
                      <div className="col col-lg-6 col-12">

                        <input
                          {...register("zip")}
                          className="form-control"
                          placeholder="Zip Code"
                        />

                      </div>

                      {/* MESSAGE */}
                      <div className="col fullwidth col-lg-12">

                        <textarea
                          {...register("note")}
                          className="form-control"
                          placeholder="Message"
                        />

                      </div>

                    </div>

                    <div className="submit-area">

                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </button>

                    </div>

                  </form>

                  <div className="border-style"></div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="left-shape2">
          <img src={Shape1} alt="" />
        </div>

        <div className="right-shape">
          <img src={Shape3} alt="" />
        </div>

      </section>

      <CTATwoSection />
      <FaqSection />
      <Footer />
      <Scrollbar />

    </Fragment>
  );
};

export default AppoinmentPage;
