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
  name: z.string().min(1, "Full Name is required").max(25, "Full Name must not exceed 25 characters"),
  email: z.string().min(1, "Email Address is required").email("Enter a valid email address"),
  phone: z.string().min(6, "Valid Phone Number is required"),
  location: z.string().min(1, "Please select a Dubai Location Area"),
  service: z.string().min(1, "Please select a Cleaning Service"),
  approxSqFt: z.string().min(1, "Approximate Square Feet is required").regex(/^[0-9]+$/, "Must be a valid number"),
  bed: z.string().optional(),
  bath: z.string().optional(),
  zip: z.string().optional(),
  note: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const dubailandAreas = [
  "Al Safa", "Jumeirah", "Downtown Dubai", "DIFC", "City Walk", 
  "Business Bay", "Nad Al Sheba", "Sheikh Zayed Road", "Al Quoz", 
  "Al Sufouh", "Dubai Hills", "Arabian Ranches", "Dubai Sports City", 
  "Motor City", "Al Barsha", "Jumeirah Golf Estates", "Emirates Hills", 
  "Palm Jumeirah", "JLT", "Dubai Marina", "Jumeirah Park", "Palm Jebel Ali", "Jebel Ali Free Zone"
];

const cleaningServices = [
  "Deep Cleaning Services Dubai",
  "Home Cleaning Services",
  "Office & Workplace Cleaning",
  "Warehouse Cleaning Services",
  "Aviation Warehouse Cleaning Services",
  "Moving-In & Moving-Out Cleaning",
  "After Builder Cleaning Services",
  "Airbnb Cleaning Services",
  "Hourly Cleaning Services",
  "Daily Cleaning Services",
  "Monthly Cleaning Services",
  "Event Cleaning Services",
  "Hospital Cleaning Services",
  "Laboratory Cleaning Services",
  "After Party Cleaning Services",
  "Specialized Deep Cleaning Services",
  "Gym Cleaning Services",
  "Garage Deep Cleaning Services",
  "Maid Services",
  "Outdoor Cleaning Services",
  "Sofa Cleaning Services"
];

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
    const whatsappNumber = "971541484800";
    const textMessage = `*Appointment Request - Bronco Cleaning Services*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `📍 *Dubai Location:* ${data.location}\n` +
      `🧹 *Service:* ${data.service}\n` +
      `📐 *Approx Sq Ft:* ${data.approxSqFt} sq ft\n` +
      `🛏️ *Bedrooms:* ${data.bed || "N/A"}\n` +
      `🛁 *Bathrooms:* ${data.bath || "N/A"}\n` +
      `📮 *Zip Code:* ${data.zip || "N/A"}\n` +
      `💬 *Note:* ${data.note || "None"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
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
                      <div className="col col-lg-6 col-12 mb-3">
                        <input
                          {...register("name")}
                          className="form-control"
                          maxLength={25}
                          placeholder="Your Full Name*"
                        />
                        {errors.name && (
                          <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.name.message}</p>
                        )}
                      </div>

                      {/* EMAIL */}
                      <div className="col col-lg-6 col-12 mb-3">
                        <input
                          {...register("email")}
                          className="form-control"
                          placeholder="Your Email*"
                        />
                        {errors.email && (
                          <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.email.message}</p>
                        )}
                      </div>

                      {/* PHONE */}
                      <div className="col col-lg-6 col-12 mb-3">
                        <input
                          {...register("phone")}
                          className="form-control"
                          placeholder="Phone Number (+971)*"
                        />
                        {errors.phone && (
                          <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.phone.message}</p>
                        )}
                      </div>

                      {/* APPROX SQ FT */}
                      <div className="col col-lg-6 col-12 mb-3">
                        <input
                          {...register("approxSqFt")}
                          className="form-control"
                          type="number"
                          placeholder="Approx Sq Ft (e.g. 1000)*"
                        />
                        {errors.approxSqFt && (
                          <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.approxSqFt.message}</p>
                        )}
                      </div>

                      {/* SERVICE */}
                      <div className="col col-lg-12 col-12 mb-3">
                        <select {...register("service")} className="form-control">
                          <option value="">Select Cleaning Service*</option>
                          {cleaningServices.map((srv, idx) => (
                            <option key={idx} value={srv}>{srv}</option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.service.message}</p>
                        )}
                      </div>

                      {/* DUBAI LOCATION */}
                      <div className="col col-lg-12 col-12 mb-3">
                        <select {...register("location")} className="form-control">
                          <option value="">Select Dubai Location Area*</option>
                          {dubailandAreas.map((area, idx) => (
                            <option key={idx} value={area}>{area}</option>
                          ))}
                        </select>
                        {errors.location && (
                          <p className="error" style={{ color: "red", fontSize: "13px" }}>{errors.location.message}</p>
                        )}
                      </div>

                      {/* BEDROOMS */}
                      <div className="col col-lg-6 col-12 mb-3">
                        <select {...register("bed")} className="form-control">
                          <option value="">Bedrooms (Optional)</option>
                          <option>Studio</option>
                          <option>1 Bedroom</option>
                          <option>2 Bedrooms</option>
                          <option>3 Bedrooms</option>
                          <option>4+ Bedrooms</option>
                          <option>Commercial Premises</option>
                        </select>
                      </div>

                      {/* BATHROOMS */}
                      <div className="col col-lg-6 col-12 mb-3">
                        <select {...register("bath")} className="form-control">
                          <option value="">Bathrooms (Optional)</option>
                          <option>1 Bathroom</option>
                          <option>2 Bathrooms</option>
                          <option>3 Bathrooms</option>
                          <option>4+ Bathrooms</option>
                        </select>
                      </div>

                      {/* ZIP CODE */}
                      <div className="col col-lg-12 col-12 mb-3">
                        <input
                          {...register("zip")}
                          className="form-control"
                          placeholder="Zip / Postal Code (Optional)"
                        />
                      </div>

                      {/* MESSAGE */}
                      <div className="col fullwidth col-lg-12 mb-3">
                        <textarea
                          {...register("note")}
                          className="form-control"
                          placeholder="Message / Specific Requirements (Optional)"
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
