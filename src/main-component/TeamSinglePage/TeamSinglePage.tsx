import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

import teamMembers from "../../api/team";

const schema = z.object({
  name: z.string().min(1, "Full Name is required").max(25, "Full Name must not exceed 25 characters"),
  email: z.string().min(1, "Email Address is required").email("Enter a valid email address"),
  phone: z.string().min(6, "Valid Phone Number is required"),
  location: z.string().min(1, "Please select a Dubai Location Area"),
  service: z.string().min(1, "Please select a Cleaning Service"),
  approxSqFt: z.string().min(1, "Approximate Square Feet is required").regex(/^[0-9]+$/, "Must be a valid number"),
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

const TeamSinglePage: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();

  const TeamDetails = teamMembers.find(
    (item) => item.slug === slug
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    const whatsappNumber = "971541484800";
    const textMessage = `*Appointment Enquiry - Bronco Cleaning Services*\n\n` +
      `👤 *Name:* ${data.name}\n` +
      `📧 *Email:* ${data.email}\n` +
      `📞 *Phone:* ${data.phone}\n` +
      `📍 *Dubai Location:* ${data.location}\n` +
      `🧹 *Service:* ${data.service}\n` +
      `📐 *Approx Sq Ft:* ${data.approxSqFt} sq ft\n` +
      (data.note ? `💬 *Description:* ${data.note}` : ``);

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
    reset();
  };

  if (!TeamDetails) {
    return <div style={{ padding: "120px", textAlign: "center" }}>Team member not found</div>;
  }

  return (
    <Fragment>

      <Navbar2 />

      <PageTitle
        pageTitle={`Because Clean Feels Better`}
        pagesub={TeamDetails.name}
        pclass={'wpo-page-title-s2'}
      />

      <div className="team-pg-area section-padding">

        <div className="container">

          <div className="team-single-wrap">

            {/* TEAM INFO */}
            <div className="team-info-wrap">

              <div className="row align-items-center">

                <div className="col-lg-6 col-12">
                  <div className="team-info-img">
                    <img src={TeamDetails.image} alt={TeamDetails.name} />
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <div className="team-info-text">

                    <h2>{TeamDetails.name}</h2>
                    <span>{TeamDetails.role}</span>

                    <p>
                      Professional cleaner at Bronco Cleaning Services Dubai, committed to delivering high-quality residential and commercial cleaning solutions across Dubai.
                    </p>

                    <ul>
                      <li>Experience: <span>5+ Years</span></li>
                      <li>Email: <span>contact@broncocleaning.ae</span></li>
                      <li>Phone: <span>+971 054 148 4800</span></li>
                    </ul>

                  </div>
                </div>

              </div>

            </div>


            {/* CONTACT FORM */}
            <div className="wpo-contact-area ex-wiget mt-5">

              <div className="wpo-contact-title">

                <h2>Make an Appointment</h2>

                <p>
                  Fill out the form below to book a cleaning service with our team.
                </p>

              </div>


              <div className="quote-form">

                <form onSubmit={handleSubmit(onSubmit)}>

                  <div className="row">

                    {/* NAME */}
                    <div className="col-lg-6 col-12 mb-3">
                      <input
                        {...register("name")}
                        type="text"
                        className="form-control"
                        maxLength={25}
                        placeholder="Full Name (Max 25 chars)*"
                      />
                      {errors.name && (
                        <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.name.message}</p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="col-lg-6 col-12 mb-3">
                      <input
                        {...register("email")}
                        type="email"
                        className="form-control"
                        placeholder="Email Address*"
                      />
                      {errors.email && (
                        <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.email.message}</p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div className="col-lg-6 col-12 mb-3">
                      <input
                        {...register("phone")}
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number (+971)*"
                      />
                      {errors.phone && (
                        <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.phone.message}</p>
                      )}
                    </div>

                    {/* APPROX SQ FT */}
                    <div className="col-lg-6 col-12 mb-3">
                      <input
                        {...register("approxSqFt")}
                        type="number"
                        className="form-control"
                        placeholder="Approx Sq Ft (e.g. 1000)*"
                      />
                      {errors.approxSqFt && (
                        <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.approxSqFt.message}</p>
                      )}
                    </div>

                    {/* SERVICE */}
                    <div className="col-lg-12 col-12 mb-3">
                      <select {...register("service")} className="form-control">
                        <option value="">Select Cleaning Service*</option>
                        {cleaningServices.map((srv, idx) => (
                          <option key={idx} value={srv}>{srv}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.service.message}</p>
                      )}
                    </div>

                    {/* DUBAI LOCATION */}
                    <div className="col-lg-12 col-12 mb-3">
                      <select {...register("location")} className="form-control">
                        <option value="">Select Dubai Location Area*</option>
                        {dubailandAreas.map((area, idx) => (
                          <option key={idx} value={area}>{area}</option>
                        ))}
                      </select>
                      {errors.location && (
                        <p className="error" style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>{errors.location.message}</p>
                      )}
                    </div>

                    {/* NOTE */}
                    <div className="col-lg-12 col-12 mb-3">
                      <textarea
                        {...register("note")}
                        className="form-control"
                        placeholder="Case Description / Specific Requirements (Optional)"
                      ></textarea>
                    </div>

                    <div className="col-lg-12 col-12 text-center">
                      <button className="btn theme-btn-s2" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Appointment"}
                      </button>
                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
      <Scrollbar />

    </Fragment>
  );
};

export default TeamSinglePage;
